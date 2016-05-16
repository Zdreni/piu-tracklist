import urllib2
import re
import os
import sys
import string

def OpenOrGetFile( url, fileName ):
	if os.path.isfile( fileName ):
		#print( "Reading cached " + url + " as " + fileName + "..." )
		f = open( fileName, 'rb' )
		text = f.read()
		f.close()
		return text
	
	#print( "Loading " + url + " as " + fileName + "..." )
	response = urllib2.urlopen( url )
	output = open( fileName, 'wb' )
	text = response.read()
	output.write( text )
	output.close()
	return text

siteUrl = "http://pumpout.anyhowstep.com/"

def TagsFromSpanText( spanText ):
	return spanText.replace("</span>", "").replace("<span>", "").split( ", " )

channelTagToChannel = {
	"K-POP": "K-Pop",
	"ORIGINAL": "Original",
	"WORLD MUSIC": "World",
}

def StripTags( str, tag ):
	return str.replace( "<"+tag+">", "" ).replace( "</"+tag+">", "" )


url_id_title_RE = "<td><a href=\\\"(SongDetails\.php\?SongId=(\d+))\\\" onclick=\\\"\\\">(.*)<\/a><\/td>";
artist_RE = "<td>(.*)<\/td>";
bpm_RE = "<td>(.*)<\/td>";
tags_RE = "<td><span>(.*)<\/span><\/td>";
channel_RE = "<td><a href=\\\"Songs\.php\?CategoryId=\d+\" onclick=\\\"\\\">(.*)<\/a><\/td>"
line_RE = url_id_title_RE + artist_RE + bpm_RE + tags_RE + channel_RE


def GetSongInfo( line ):
	match = re.search( line_RE, line )
	try:
		song = {
			'line': line,
			'url': match.group( 1 ),
			'id': match.group( 2 ),
			'title': match.group( 3 ).replace( '?', '_' ),
			'artist': match.group( 4 ),
			'bpm': match.group( 5 ),
			'tags': TagsFromSpanText( match.group( 6 ) ),
			'channel': channelTagToChannel[ match.group( 7 ) ]
			}
		
		if 'FULL SONGS' in song['tags']:
			song['title'] += "  [FULL]"
			song['duration'] = 'Full'
		
		if 'SHORT CUT' in song['tags']:
			song['title'] += "  [SHORT]"
			song['duration'] = 'Short'
		
		if 'REMIX' in song['tags']:
			song['duration'] = 'Remix'
		
		song['artist'] = re.sub( r'<ahref=\"\d+\">(.*?)<\/a>', r'\1', StripTags( song['artist'], "span" ) )
		
		return song
	
	except:
		print '>>> Invalid line for regexp:'
		print line
		print '>>> Regexp:'
		print line_RE
		print "Unexpected error:", sys.exc_info()
		print match

	
def GetSongs():
	songUrls = OpenOrGetFile( siteUrl + "Songs.php", "Songs.php.txt" )
	songUrls = songUrls.replace( "</td>\n<td", "</td><td" ).replace( " class=\"NoDataTH TextAlignLeft\"", "" ).replace( " class=\"NoDataTH\"", "" )
	songUrls = songUrls.replace("<a href=\"ArtistDetails.php?ArtistId=", "<ahref=\"")
	songUrls = songUrls.replace( "&amp;", "&" )
	songUrlLines = songUrls.splitlines()
	return [ GetSongInfo( line ) for line in songUrlLines if re.search( '(SongDetails.php\?SongId=\d+)\"', line ) ]


songs = GetSongs()


def GetChartInfo( line ):
	match = re.search( 'ChartDetails\.php\?ChartId=\d+\" class=\"(.+)\"', line )
	chart = match.group( 1 )
	chart = chart.replace( "SP", "Sp" ).replace( "DP", "Dp" ).replace( "UNKNOWN", "??" )
	chart = chart.replace( "S0", "S" ).replace( "D0", "D" ).replace( "Sp0", "Sp" ).replace( "Dp0", "Dp" )
	return chart


for song in songs:
	songDetailLines = OpenOrGetFile( siteUrl + song['url'], "Song - " + song['title'] + " (" + song['id'] + ").txt" ).splitlines()
	song['charts'] = [ GetChartInfo( line ) for line in songDetailLines if re.search( 'ChartDetails\.php\?ChartId=', line ) ]


for song in songs:
	print "\t{";
	str = "\t\ttitle: \"%s\", artist: \"%s\", channel: \"%s\", bpm: \"%s\"," % ( song['title'], song['artist'], song['channel'], song['bpm'] )
	if 'duration' in song:
		str += " duration: \"%s\"," % ( song['duration'] )
	print str
	print "\t\tPrime: [\"%s\"]," % ( "\", \"".join( song['charts'] ) )
	print "\t},\n"
