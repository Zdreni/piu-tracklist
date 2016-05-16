# -*- coding: utf-8 -*-

from operator import itemgetter

Fiesta_all = """
title	artist	S	S	S	S	S	S	S	D	D	D	D	Sp	Dp	Dp
80's Pop	Energy Presents		2	5		12	16			6	17		3	4	
Arirang	BanYa Production			9		18	22		10		20				
Betrayer -Act. 2-	msgoon		4	6		10							3	3	
Big Beat	NOW			5		13	15			6	14		3	5	
By Chance	Baby V.O.X.		2	4		15				6	16		2	4	
Destination	SHK		4	7	11	16	18			13	20				
Dieciseis	Nina Pilots	2	4		6	13			5		15				
Do It -Reggae Style-	BanYa Production					13					15		4	5	
Fire	2NE1		3		5	8	15	16	4		11		3	4	
Exciting	Dynamic Duo	2	3			14					14		5		
Enjoy! Enjoy!	Mudagang		3	 _4  	6	11	14			7	14		4	5	
Get Up (And Go)	BanYa Production		4	7	10	17				11	20				
Good Life	Drunken Tiger	2		4		15				5	16		2	3	
Hello William	BanYa Production		4	6	9	17	19			9	21				
Innocent	Koyote		3	5		11				6	15				
In your fantasy	Taiji Boys		2	4	6	14				7	16			3	
Mission Possible -Blowback-	BanYa Production					18					17		3	5	
Napalm	Doin				13	19	22			14	23				
Narcisista Por Excelencia	Panda		5		8	16				9	18				
No Rhyme No Reason	LTJ X-Perience		2	5		15					20		2		
Phantom -Intermezzo-	BanYa Production				12	15	19	21		15	19				
Pumping Jumping	BanYa Production	1	3	5	13	15	17			6	17		4	5	6
Sorceress Elise	Yahpp	4	6	8	10	18	23		8		17	24		??	
Tek -Club Copenhagen	BanYa Production	3		5		16	17				17		5	4	
The Angel Who Lost Wings	Roo'ra	1		4	6	13				6	16		2	3	
Tepris	Doin		2	4	7	16				9	18			??	
To The Sky	Lexy	1	3	5		12				6	16		3	6	
Turkey March -Minimal Tunes-	BanYa Production		3	6	8	17				10	18				
Twist King	Turbo		4		6	14				7	15		4		
U Got 2 Know	MAX				17	18	19				18		2	4	
Vacuum	Doin					21	23				22	25			
Wanna	Kara	2		4	9	16			3		12	17	2	5	
Xenesis	BanYa Production		4	7	10	18				12	15	18			
X-Tree	Yahpp			7	12	20				14	18	22			
Adios	Eun Ji Won		3		6	14					16		2	4	
Another Truth	Novasonic		3		5	15			6	16	17	22			
Bad Character	Jang Na Ra		3	5	6	10					11		1	3	
Beat # No. 4	HEaDTriP				6	15					17		2	5	
Beat of the War	BanYa				5	10	15			12	19				
Beat of the War 2	BanYa			5	10	16				12	19				
Beat of the War 2 (D&G Ver.)	BanYa														
Beat the Ghost	BanYa Production		3		9	18	20			7	20				
Bee	BanYa			4	11	15	19			11	21	23			
Beethoven Virus	BanYa		4	7	8	13	16	17		8	18	20			11
Betrayer	BanYa			5	8					8	13		2		
Blaze Emotion	Yahpp		2		7	16	17			10	17	18			
Blazing	BanYa			3	6	15					19				
Breakin' Love	Yoo Seung Jun			6		12					14		2	4	
Bullfighter's song	BanYa Production			5	8	16			9	17	21				
Cannon X.1	Yahpp		3		10	20	21			13	22				
Canon-D	BanYa		3	7		20	21			10	22				
Caprice of Otada	BanYa Production		4		8	17				10	18				
Change Myself	Wang Lee Hom		1	4	5	10					9		1	5	
Chicken Wing	BanYa				10			19		11					
Chimera	Yahpp		4	7	11	16	18	23		16	25	??		??	
Chocolate	Banana Girl			5	6	9	13				9	15	2	3	
Chopsticks Challenge	Yahpp			6		17			3		16		1		
Chopstix	Sonic Dimension			5		13					15		2	2	
Close Your Eyes	BanYa			4									2	3	
Com'back	Sechskies			4	6	15			7	8	16				
Come On!	Lee Jeong Hyun		2	4	5	12					9			4	
Come To Me	BanYa				6	11	12	15			13	14	3	6	
Crazy	Gyfted				5	15					19		2	6	
Csikos Post	BanYa		3	7	10	13				8		16			
D Gang	BanYa		4	6	9			18		7		15			
Dance All Night	Oscillator X				5	13					15		2		
Dance Vibrations	Elpis			5	10	14				15	18		1	6	
Dance With Me	BanYa												4	6	
Dawn of the Apocalypse	Vassline		4	14		21				14	21				
Deja Vu	Som2		3	6		13				6	13				
Digan Lo Que Digan	Nina Pilots		3	6		16					13	18		8	
Dignity	Crash		3	5	12	16	20			13	23				
DJ Otada	BanYa Production		4	8		19				14	22				
Do It!	House Rulez			6		15					18		2	4	
Don't Bother Me	Tashannie			4	5		10			5			2		
Dr. M	BanYa			3	7	12	16			11	16				
Emperor	BanYa			5		11		16				17			
Empire of the Sun	Novasonic				6	11					13		1	4	
Energizer	ZiGZaG				9	16				11	17		2		
Enter the Dragon	JTL		1	4	5		14				17		2	5	
Extravaganza	BanYa			9	11	16	21			12	17	19			
Faster Z	BanYa Production		4	8	12	16	19	20		14	20				
Final Audition	BanYa				7	15	17				15	17		3	
Final Audition 2	BanYa			8	10	16				8	17	19			
Final Audition 3 U.F	BanYa				6	14					17	19	3	5	
Final Audition Episode 1	BanYa			8	13	15	19			11	21	23			
Final Audition Episode 2-1	Yahpp		3	4	7	18	20	21		9	21	22			
Final Audition Episode 2-2	Yahpp			7	16	17	21	22		18	23	24			
Final Audition Episode 2-X	Yahpp				8	17	23				21	24			
First Love	BanYa			4	9							14	1	4	
Fly	Epik High		1	3	6	14					16		3	4	
Forward	DJ Missill		4	5		13					13		2	5	
Free Style	BanYa											15	1	3	
Funky Tonight	Clon		2	4	5	12				4					
Get Up!	BanYa			4	8	13				9		18			
Go	U;nee			3	7	12					13			3	
Groovin' Motion	Sonic Dimension				6	9					11		3	6	
Gun Rock	BanYa Production														
Haley	Sam-I-Am			4		9					11		2	4	
Hatred	Novasonic				6	13				7	16			7	
Hello	BanYa				7			16		9	16				
Hi-Bi	BanYa			3	8	15	18			8	18	20			
Higgledy Piggledy	BanYa Production		2	6		14				8	15		1		
Hot	1TYM		2	4	6	10					12			4	
Hybs	DJ Dookie			4		11					13		2	4	
I'll Give You All My Love	WAX		4	7		16				7	18				
I'm Your Girl	S.E.S		1	3	5	12					10		2	6	
It's My Business (silent)	Taiji Boys														
J Bong	BanYa			5	7	13					17			5	
Jam O Beat	BanYa Production				7	14					14		2	6	
K.O.A ~Alice in Wonderland~	BanYa Production		3	5	8	17				10	18				
La La La	Big Bang		3	5		10					13		2	5	
Love is a Danger Zone	BanYa		3		7	15	19		6	15	20			??	
Love is a Danger Zone 2	BanYa		4		7	15	21			17	23				
Love is a Danger Zone 2 (D&G Ver.)	Yahpp					16	17				??			??	
Maria	BanYa				6	11		15				15			
Midnight blue	BanYa					12					13		4	5	
Miss's Story	BanYa				5			18				19	3	5	
Mistake	U'Two		2	4	6						12		1	6	
Mobius Strip	Sechskies			4	6	12				7	14				
Monkey Fingers	BanYa			5	8	15					17		5		
Moonlight	BanYa			7	10		18	19		11	20	21			
Mr. Fire Fighter	Spooky Banana		2	4	7	13				8	15				
Mr. Larpus	BanYa			5	11	14	20	22	14	17	23	25?			
My Dreams	BanYa Production		4	10		17	18				18			5	
My Friend	Cho PD		1	3	6	12					14		3	5	6
My Way	BanYa			5		12					15		2	6	
N	BanYa				5	16							2	5	
Naissance	BanYa			7	10	20				7	15				
Naissance 2	BanYa				6	13					15	19	3	5	
Nightmare	BanYa		1	4										5	
Oh! Rosa!	BanYa				7			13		7					
One Night	DJ DOC			5		13					14		2	4	
Only You	Namolla Family		3	6		12			3		13				
Oy Oy Oy	BanYa				6	8									
Panuelito Rojo	Big Metra			5		10					18		1	4	
Papa Gonzales	BanYa				6	14				7	18				
Phantom	BanYa				12		17	18		12	19	20		7	
Phantom (Accel. Ver)	BanYa Production														
Point Break	BanYa				6						14		3	6	
Procedimientos Para Llegar A Un Comun Acuerdo	Pxndx		3		7	15				7	16				
Pump Breakers	Tico			5		17					15		2	4	
Pump Jump	BanYa			4				15			17		2	4	
Pump Me Amadeus	BanYa		 _4 	5	9	17				10	18	19			
Pumping Up	BanYa			4											
Pumptris Quattro [8bit ver.]	Yahpp					16	17					??	15	??	
Pumptris Quattro	Yahpp			3	7	12	17	19		13	20	22	10	2	
Rolling Christmas	BanYa		3		5	8	13			5	13				
Run!	Novasonic			4	8	15				8	17				
Sajahu	Lee Hyun Do		3	6		13					14		3	5	
Set Me Up	BanYa												4	7	
She Likes Pizza	BanYa				8	9				9	16				
Slam	Novasonic		3	6		17	18			6		20			
Slightly	45RPM			4		14					12		1	5	
Solitary	BanYa			6	9	16	17			7	16		3		
Solitary 1.5	Yahpp				7	16					18		4	6	
Solitary 2	BanYa				6	17					18		3	6	
Starian	Duke				7	13	15			9	17				
Storm	Perry				5	12					13		3	4	
Street Show Down	BanYa				7			15			13		4	6	
The People Didn't Know	BanYa Production		2	5		15				7	17				
Till the End of Time	BanYa		2	4				9							
Toccata	BanYa Production		4	7	10	17					14	17	3	6	
Turkey March	BanYa				7	12	15			9	19				
U	Super Junior M		1		4	6	14				13		2	5	
Ugly Dee	BanYa Production									11	15				
Uprock	Sam-I-Am			5		17					14		2	4	
Very Old Couples	015B				6	13					15		2	6	
Vook	BanYa			9	15	17	20		12	17	18	19			
We Are	Deux		4	5		12			6		13				
We Goin' Fly Remix	Gyfted				5	15					19		3	6	
We Will Meet Again	BanYa														
What Do You Really Want?	Crash				9		14	19			16	20			
Will o' the Wisp	BanYa			5	10	13	19		10	13	19	21			
Winter	BanYa		4	6	8	15				11	19				
Witch Doctor	BanYa					16	19	21		19	22	23			
X-Treme	BanYa				9	14				13	19				
FULL SONG: Beat # No. 4	HEaDTriP					17					19			6	
FULL SONG: Beat of the War 2	Yahpp					19					20				
FULL SONG: Canon-D	BanYa				11	16			23						
FULL SONG: Chopsticks Challenge	Yahpp					15					19				
FULL SONG: Dawn of the Apocalypse	Vassline					15									
FULL SONG: Deja  Vu	Som2				7	16			16						
FULL SONG: Digan Lo Que Digan	Nina Pilots				7	18									
FULL SONG: Dignity	Crash				13	19			16		22				
FULL SONG: Enter the Dragon	JTL					17					18			3	
FULL SONG: Fire	2NE1					14									
FULL SONG: Fly	Epik High				10	15			16		17				
FULL SONG: Forward	DJ Missill			4		15			5						
FULL SONG: Guitar Man	BanYa Production														
FULL SONG: La La La	Big Bang			4	14										
FULL SONG: Love is a Danger Zone 2	Yahpp					19					21				
FULL SONG: Mr. Fire Fighter	Spooky Banana														
FULL SONG: Narcisista Por Excelencia	Pxndx					17				18					
FULL SONG: Panuelito Rojo	Big Metra				9	16					18				
FULL SONG: Procedimientos Para Llegar A Un Comun Acuerdo	Pxndx			6		17			7						
FULL SONG: Slightly	45rpm & msgoon			5		17									
FULL SONG: Trato De No Trabarme	Big Metra				10	22					24				
FULL SONG: Very Old Couples	015B														
FULL SONG: Wanna	Kara					16									
REMIX: 45RPM & Eun Ji Won Remix						11			14					5	
REMIX: BanYa Extra Remix															
REMIX: BanYa HipHop Mix				6	7									6	
REMIX: B.P. Classic remix						12			13		19				
REMIX: B.P. Classic Remix 2					11	18									
REMIX: BanYa Classic Remix					7	19				20				11	
REMIX: BanYa-P Guitar Remix						22					24				
REMIX: Bemera					16	24			18		26				
REMIX: Big Metra Remix					5	19					17				
REMIX: Caprice of DJ Otada					11	19					22				
REMIX: Dr. K.O.A					8	18					20				
REMIX: FAE1 & Chicken Wing Remix (NX2 ver.)					8	21			13						
REMIX: Groove Party					5	14			15					5	
REMIX: Hard Core Rock Mix					18	21									
REMIX: History: We Are The Zest													6	5	
REMIX: K-Pop Mix (Old & New)					7	13									
REMIX: Love is a Danger Zone - Try to BPM					12	20			14		23				
REMIX: Money Fingers					8	16			9		17				
REMIX: msgoon RMX pt. 1					7	17					17				
REMIX: msgoon RMX pt. 3					6	17			11		20				
REMIX: msgoon RMX pt. 5						17				17			3	4	
REMIX: msgoon RMX pt. 6										19					
REMIX: msgoon RMX pt. 7										17				4	
REMIX: Nina/Pxndx Remix					6	16			8						
REMIX: Novasonic Mix Ver. 3					6	17					19				
REMIX: NX K-Pop Dance					8	14			9		16				
REMIX: PaPa Helloizing					8										
REMIX: Pro Pop Mix (new remix)						17									
REMIX: Pump It Up With You						17				17					
REMIX: Scream Song															
REMIX: Set Up Me2 Mix						17									
REMIX: The People Didn't Know "Pumping Up"					7				4		17				
REMIX: Treme-Vook of the War					11	19			13		22				
REMIX: Turkey Virus					8	15			11						
REMIX: Wi-Ex-Doc-Va					15	21			15		23				
REMIX: Yasangma															
SHORT CUT: Bemera	Yahpp			13	21	23					19				
SHORT CUT: Chicken Wing	BanYa					20			13						
SHORT CUT: Destination	SHK				9	15				18	20				
SHORT CUT: Exceed 2 Opening	BanYa Production					15					19				
SHORT CUT: Extravaganza	BanYa					14				14	21		15		
SHORT CUT: Final audition 2	BanYa										18				
SHORT CUT: Final Audition 3	BanYa										16				
SHORT CUT: Final Audition Episode 2-X	Yahpp										19				
SHORT CUT: K.O.A	BanYa Production				8	16									
SHORT CUT: Love is a Danger Zone	BanYa					13					17				
SHORT CUT: Love is a Danger Zone 2	BanYa				8	19					21				
SHORT CUT: Moonlight	BanYa				16	18									
SHORT CUT: NX Opening	Yahpp					16					17				
SHORT CUT: Procedimientos Para Llegar A Un Comun Acuerdo	Pxndx					18					16				
SHORT CUT: Pumptris 8bit Ver.	Yahpp				8	16									
SHORT CUT: Solitary 2	BanYa										17				
SHORT CUT: Winter	BanYa			6	9	16				10					
SHORT CUT: Witch Doctor	BanYa					14					16				
"""

FiestaEX_newTunes = """
title	S	S	S	S	S	S	D	D	D	D	Sp	Dp	Dp
Allegro con fuoco	4	7	11	17			9	18	23		1	6	
ASDF			8	17				10	17				
Butterfly	3	6	8	13	16		7	17			2	3	
Cleaner	4	7	12	18	22	23	20		24	26			
Crashday	4	6	11	17	23	24	17	26					
Energy	4	8	13	15			9	14			4	5	
Gargoyle	4	7	9	18			12	20	23		2		
Hot issue	3	7	10	16			5	13	15		4	5	
Hungarian dance V	4	6	8	17	18		9	17			2		
Interference			11	18			12	19			2	3	
Jonathan's dream			8	16			10	15					
Last farewell	2	5	8	13	17		6	14			3	5	
Like a man	4	6	8	18			10	18				3	
Magic	1	4	8	13			3	14			3	4	
Magic girl	4	7	11	15			5	13	16	21	3	4	
Mother	1	4	7	13			5	14			2	3	
Native	3	5	9	17	20		10	18			2	3	
Necromancy	4	7	10	18	20		13	19		24	2	3	
No.3	4	7	9	16			5	16				4	
Overblow	4	7	10	16	18	20	12	18		20	2	3	
Pavane	3	6	10	17			16	22			2		
Pine nut			13	20				16					
Rave until the night is over	2	5	9	15			11	17			3	4	
Reality	3	6	8	14	17		4	15			4	2	
Ring Ding Dong	3	5	8	15			5	17			3	4	
Shock	3	5	8	14	16		4	15				5	
Smells like a chocolate	4	6	9	16			12	17			1	3	
Super man	4	6	8	14	16		9	15	23		1	4	??
Take out	4	7	11	17	20		13	19	22	23			??
The Devil	4	6	9	12	20		13	21					??
We got 2 know	1	5	8	17		20	4	18			2	3	??
What happened	3	7	12	17	20			20	23				
X-rave	3	6	9	17			11	20			2	6	
"""

FiestaEX_revivals = """
title	S	S	S	S	S	S	S	S	D	D	D	D	Sp	Dp	Dp
2006. LOVE SONG			3	10	12	15					13			5	
80's Pop		2	5	8	12	16				6	17		3	4	
Adios	1	3	6		14						16		2	4	
All I want for X-mas		3	6	11						7					
Another Truth	3		5	8	15				6	16	17	22			
Arch of darkness	2	4	5	8	14	16				7	18				
Arirang			9		18	22			10		20			2	
Bad Character	3		6		10						11		1	3	
Beat # No. 4			6		15						17		2	5	
Beat of the War		3	5	9	10		15			12	19				
Beat of the War 2	4	5	6	10	16					12	19				
Beat the Ghost	3		9		18		20			7	20				
Bee	4	7	10	11	15		19		11	19	21	23			
Beethoven Virus	4	7	8		13		16	17		8	18	20		3	11
Betrayer	1	5	8	13						8	13		2		
Betrayer -Act. 2-		4	6		10						15		3	3	
Big Beat (NOW)			5		13	15				6	14		3	5	
Blaze Emotion	2	3	6	7	9	16	17			10	17	18			
Blazing		3	6	9	15						19				
Breakin' Love		6			12						14		2	4	
Bullfighter's song	4	5	8		16				9	17	21				
By Chance		2	4	5	15					6	16		2	4	
Cannon X.1	3	7	10		20		21			13	22				
Canon-D	3	7	9		20		21			10	22				
Caprice of Otada	4	6	8		17					10	18				
Change Myself	1	4	5		10						9		1	5	
Chicken Wing			4	6	9		10	19		11	17				
Chimera	4	7	11		16		18	23		16	25	??		??	
Chocolate		5	6		9		13				9	15	2	3	
Chopsticks Challenge		6			17				3		16		1		
Chopstix		5			13						15		2	2	
Chung hwa ban jeom			6		14						16		1	2	
Close Your Eyes		4											2	3	
Com'back		4	6	8	15				7		16				
Come On!	2	4	5		12						9			4	
Come To Me		4	6		11		12	15			13	14	3	6	
Crazy	2	4	5	8	15						19		2	3	6
Csikos Post	3	7	10		13					8		16			
D Gang	4	6	9					18		7		15			
Dance All Night			5		13						15		2		
Dance Vibrations	4	5	10		14					15	18		1	6	
Dance With Me	2	4	6	12	14					15			4	4	6
Dawn of the Apocalypse	4	14			21					14	21				
Deja  Vu	1	3	6		13					6	13				
Destination		4	7	11	16	18	19			13	20			5	
Dieciseis	2	4		6	13				5		15				
Digan Lo Que Digan	3	4	6	7	9	16					13	18		8	
Dignity	3	5	12		16		20			13	18	23			
DJ Otada	4	6	8		19					14	22				
Do It -Reggae Style-					13						15		4	5	
Do It!		6			15						18		2	4	
Do you know that -old school-		4	6	14							18			8	
Don't Bother Me		4	5				10			5	13		2		
Dr. M		3	7	9	12		16			11	16				
Emperor	2	5	8		11			16				17	3	3	
Empire of the Sun			6		11						13		1	4	
Energizer	4	7	9		16					11	17		2		
Enjoy! Enjoy!		3		6	11	14				7	14		4	5	
Enter the Dragon	1	4	5	8			14				17		2	5	
Exciting (Sin na - Zin na)	2	3			14						14		5		
Extravaganza	4	7	9	11	16		21			12	17	19			
Faster Z	4	6	8	12	16		19	20		14	20	23			
Final Audition	2	6	7	9	15		17				15	17		3	
Final Audition 2	4	7	8	10	16					8	17	19		3	
Final Audition 3 UF	2	5	6	9	14						17	19	3	5	
Final Audition Episode 1	4	7	8	13	15		19			11	21	23			
Final Audition Episode 2-1	3	4	7		18		20	21		9	21	22			
Final Audition Episode 2-2		7	16		17		21	22		18	23	24			
Final Audition Episode 2-X	3	5	8		17		23				21	24		2	
Fire		3		5	8	15	16		4		11	14	3	4	
First Love		4	9									14	1	4	
Fly	1	3	6		14						16		3	4	
Forward	2	4	5		13						13		2	5	
Free Style			13									15	1	3	
Funky Tonight	2	4	5		12					4	14				
Get Up (And Go)		4	7	10	17					11	20			3	
Get Up!		4	8		13					9		18			
Get your groove on		4	6	13						9					
Go		3	7		12						13			3	
Good Life	2		4		15					5	16		2	3	
Groovin' Motion			6		9						11		3	6	
Guitar Man		3	9	13	18					10	13	19			
Gun Rock		5	11	17	18					11	18	22			
Haley		4			9						11		2	4	
Hatred			6		13					7	16			7	
Hello			7					16		9	16				
Hello William		4	6	9	17	19				9	21				
Hi-Bi	3	5	8		15		18			8	18	20			
Higgledy Piggledy	2	6	9		14					8	15		1		
Hot	2	4	6		10						12			4	
Hybs		4			11						13		2	4	
I'll Give You All My Love	2	4	7		16					7	18				
I'm Your Girl	1	3	5		12						10		2	6	
In your fantasy	2	4	6		14					7	16			3	
Innocent		3	5		11	14				6	15				
J Bong	3	5	7	8	13						17			5	
Jam O Beat			7		14						14		2	6	
K.O.A.	2	3	5	8	17					10	18				
La La La	1	3	5		10						13		2	5	
Love is a Danger Zone	3		7	10	15		19		6	15	20			??	
Love is a Danger Zone 2	4		7	9	15		21			17	23				
Love is a Danger Zone 2 (D&G Ver.)					16		17				??			??	
Maria			6		11			15				15			
Midnight blue					12						13		4	5	
Mission possible  			5	7	13	19				8					
Mission Possible -Blowback-					18						17		3	5	
Miss's Story			5					18				19	3	5	
Mistake	2	4	6	11							12		1	6	
Mobius Strip	2	4	6		12					7	14				
Money				10	14					12	16		4		
Monkey Fingers	3	5	8		15						17		5		
Monkey Fingers 2			6	10	17					9	19				
Moonlight	4	7	10				18	19		11	20	21			
Mr. Fire Fighter		4	7		13					8	15				
Mr. Larpus	3	5	11		14		20	22	14	17	23				
My Dreams	4	10			17		18				18			5	
My Friend	1	3	6		12						14		3	5	6
My Way	3	5	8		12						15		2	4	6
N			5		16					16			2	5	
Naissance	4	7	8	10	20					7	15				
Naissance 2			6		13						15	19	3	5	
Napalm				13	19	22				14	23				
Narcisista Por Excelencia	3	5		8	16					9	18				
Nightmare	1	4								13				5	
No Rhyme No Reason		2	5	8	15						20		2		
Oh Rosa			7					13		7					
One Night		5			13						14		2	4	
Only You	3	6			12				3		13				
Oy Oy Oy	3		6		8	13					13		2	3	
Panuelito Rojo		5			10						18		1	4	
Papa Gonzales		4	6	8	14					7	18				
Phantom	2	7	12				17	18		12	19	20		7	
Phantom -Intermezzo-		3	7	12	15	19	21			15	19	20		3	
Point Break			6								14		3	6	
Procedimientos Para Llegar A Un Comun Acuerdo	3		7		15					7	16				
Pump Breakers		5			17						15		2	4	
Pump Jump		4						15			17		2	4	
Pump Me Amadeus	3	5	9		17					10	18	19			
Pumping Jumping	1	3	5	13	15	17	19			6	17		4	5	6
Pumping Up		4	12												
Pumptris 8bit ver. 		3	5	8	16	17						??	15	??	
Pumptris Quattro		3	7		12		17	19		13	20	22	10	2	
Rolling Christmas	3		5		8		13			5	13				
Run		4	8		15					8	17				
Run to you	2	4	5	7	10	13				6	14				
Sajahu	3	6			13						14		3	5	
Set Me Up	2	4	6	9	13								4	4	7
She Likes Pizza			8		9					9	16				
Slam	3	6		9	17		18			6		20			
Slightly		4			14						12	14	1	5	
Solitary	2	4	6	8	9	16	17			7	16		3	5	
Solitary 1.5			7		16						18		4	6	
Solitary 2		4	6	8	17						18		3	6	
Sorceress Elise	4	6	8	10	15	18	21	23	8		17	24		??	
Starian		2	7		13		15			9	17				
Storm			5		12						13		3	4	
Street Show Down			7					15			13		4	6	
Tek -Club Copenhagen	3		5		16	17					17		5	4	
Tepris		2	4	7	16					9	18			??	
The Angel Who Lost Wings	1		4	6	13					6	16		2	3	
The People Didn't Know	2	5			15					7	17				
Till the End of Time	2	4						9						3	
To The Sky	1	3	5		12	15				6	16		3	6	
Toccata	4	7	10		17						14	17	3	6	
Top city		4	6	12						7	12				
Turkey March		3	7		12		15			9	19				
Turkey March -Minimal Tunes-		3	6	8	17					10	18			1	
Twist King		4	6	10	14					7	15		4		
U	1		4		6		14				13		2	5	
U Got 2 Know	2	7	8	17	18	19					18		2	4	
Ugly Dee		3	5	9						11	15				
Uprock		5			17						14		2	4	
Vacuum					21	23					22	25		3	
Very Old Couples			6		13						15		2	6	
Vook	4	7	9	15	17		20		12	17	18	19			
Wanna	2		4	9	16				3		12	17	2	5	
We Are	2	4	5		12				6		13			4	
We Goin' Fly Remix			5		15						19		3	6	
We Will Meet Again		3	8	13	14					8					
What Do You Really Want?			9				14	19			16	20			
Will o' the Wisp	3	5	10		13		19		10	13	19	21			
Winter	4		6	8	15					11	17	19			
Witch Doctor		4	6	10	16		19	21		19	22	23			
Witch Doctor #1	2	5	8	9	15	16	18			17	19	20	3	7	
Xenesis		4	7	10	18					12	15	18	1		
X-Tree		3	7	12	20					14	18	22	2	3	
X-Treme	4	7	9		14	18				13	19				
"""

FiestaEX_longs = """
title	S	S	S	D	D	D	Sp	Dp
FULL SONG: Beat # No. 4			17			19		6
FULL SONG: Beat of the War 2			19			20		
FULL SONG: Canon-D		11	16	23				
FULL SONG: Chopsticks Challenge			15			19		
FULL SONG: Crashday			22	22				
FULL SONG: Dawn of the Apocalypse		15	21					
FULL SONG: Deja  Vu		7	16	16				
FULL SONG: Digan Lo Que Digan		7	18					
FULL SONG: Dignity		13	19	16		22		
FULL SONG: Energy			15					
FULL SONG: Enter the Dragon			17			18		3
FULL SONG: Fire			14					
FULL SONG: Fly		10	15	16		17		
FULL SONG: Forward	4		15	5				
FULL SONG: Hot issue		9	14	16				
FULL SONG: Interference			18	15	18			
FULL SONG: La La La	4	14						
FULL SONG: Like a Man			19	19				
FULL SONG: Love is a Danger Zone 2			19			21		
FULL SONG: Magic Girl			12					
FULL SONG: Narcisista Por Excelencia			17		18			
FULL SONG: No.3			17	18				
FULL SONG: Panuelito Rojo		9	16			18		
FULL SONG: Procedimientos Para Llegar A Un Comun Acuerdo	6		17	7				
FULL SONG: Ring ding dong			16	17				
FULL SONG: Shock			17	15				
FULL SONG: Slightly	5		17					
FULL SONG: Trato De No Trabarme		10	22			24		
FULL SONG: Wanna			16					
REMIX: 45RPM & Eun Ji Won Remix			11	14				5
REMIX: BanYa HipHop Mix	6	7						6
REMIX: B.P. Classic remix		12	18	13		19		
REMIX: B.P. Classic Remix 2		11	18					
REMIX: BanYa Classic Remix		7	19		20			11
REMIX: BanYa-P Guitar Remix			22			24		
REMIX: Bemera		16	24	18		26		
REMIX: Big Metra Remix		5	19			17		
REMIX: Caprice of DJ Otada		11	19		22	25		
REMIX: Dr. K.O.A		8	18			20		
REMIX: Everybody Got 2 Know		??	19			18		
REMIX: FAE1 & Chicken Wing Remix (NX2 ver.)		8	21	13				
REMIX: Groove Party		5	14	15				5
REMIX: Hard Core Rock Mix		18	21					
REMIX: History: We Are The Zest							6	5
REMIX: K-POP Boy Group RMX				17				
REMIX: K-Pop Girl Group RMX			14	15				
REMIX: K-Pop Mix (Old & New)		7	13					
REMIX: Love is a Danger Zone - Try to BPM		12	20	14		23		
REMIX: Money Fingers		8	16	9		17		
REMIX: msgoon RMX pt. 1		7	17			17		
REMIX: msgoon RMX pt. 3		6	17	11		20		
REMIX: msgoon RMX pt. 5			17		17		3	4
REMIX: msgoon RMX pt. 6			20		19			
REMIX: msgoon RMX pt. 7			17					4
REMIX: Nina/Pxndx Remix		6	16	8				
REMIX: Novasonic Mix Ver. 3		6	17			19		
REMIX: Novarash		11	17			12		
REMIX: NX K-Pop Dance		8	14	9		16		
REMIX: PaPa Helloizing		8	19					
REMIX: Pro Pop Mix (new remix)			17					
REMIX: Pump It Up With You			17		17			
REMIX: Set Up Me2 Mix			17					
REMIX: Techno repeatorment		7	19	8				
REMIX: The People Didn't Know "Pumping Up"		7		4		17		
REMIX: Treme-Vook of the War		11	19	13		22		
REMIX: Turkey Virus		8	15	11				
REMIX: Vacuum cleaner	15	20	25			27		
REMIX: Wi-Ex-Doc-Va		15	21	15		23		
SHORT CUT: Bemera	13	21	23			19		
SHORT CUT: Chicken Wing			20	13				
SHORT CUT: Cleaner			21	20				
SHORT CUT: Destination		9	15		18	20		
SHORT CUT: Exceed 2 Opening			15		19	??		
SHORT CUT: Extravaganza			14		14	21	15	
SHORT CUT: Final audition 2			16			17		
SHORT CUT: Final Audition 3			17			16		
SHORT CUT: Final Audition Episode 2-X			20			19		
SHORT CUT: K.O.A		8	16			18		
SHORT CUT: Love is a Danger Zone		13	20			17		
SHORT CUT: Love is a Danger Zone 2		8	19			21		
SHORT CUT: Moonlight		16	18			20		
SHORT CUT: NX Opening			16			17		
SHORT CUT: Overblow			18			17		
SHORT CUT: Procedimientos Para Llegar A Un Comun Acuerdo			18			16		
SHORT CUT: Pumptris 8bit Ver.		8	16			22		
SHORT CUT: Solitary 2			18			17		
SHORT CUT: Take out			18			19		
SHORT CUT: Trotpris			14			15		
SHORT CUT: Winter	6	9	16		10	17		
SHORT CUT: Witch Doctor		14	20			16		
SHORT CUT: X-rave			16			18		
"""

Fiesta2_newTunes = """
title	bpm	S	S	S	S	S	S	D	D	D	D	D	D	D	Sp	Dp	Dp	-
Accident	183	4	7	10	19			11	20									
Bad Girl Good Girl	136	1	3	5	14			4	13						2	3		
Baroque virus	135		5	9	17			11	18									
Be alive	142	2	5	8				10									??	
Be mine	130	2	4	7	15			5	15						3	5		
Can't nobody	130	2	4	6	15	17		5	16						3	5		
Crayon	132	4	6	8	17			5	17									
D	180	4	7	9	18			11	19									
Danza kuduro	131	4	7	9	15			10	16									
Dream to nightmare					19	21	23		22	24								
Dam	141	1	3	5	8			4	9									
Electric	120	2	4	6	14			4	16									
Elise	162	4	7	10	17	19		13	16								??	
Fantastic Baby	130	3	5	8	14			5	17						1	5		
Flew Far Faster	200	10	17	23				12	22								??	
Hands Up (East 4A Mix)	130	3	5	8	15			5	15						3	4		
Hardkore of the North	190	4	7	11	21			16										
Heartbreaker	135	1	3	5	15			4	16				18		3	6		
Heel and toe	185	2	7	9				11									??	
Hypnosys remix	175	8	11	17	21			13	15	20								
I am the Best	128	2	4	6	15			5	13						3	4		
Ignis Fatuus	220	9	15	19	23			15	17	19	23	24	25	26			??	
Ladybug	133	1	3	5	13			13									??	
Lie	125	2	4	6	15			5	15						2	5		
Los malaventurados no lloran	172	4	7	9	16			12	18									
Love is a danger zone (Cranky remix)	155		6	12	20	19		8	16	24							??	
Lovumba	121	2	5	8	14			5	16									
Lucid (PIU Edit)	40-190	4	7	10	20			11	20								??	
Mackerel	150	4	6	8	16			5	15						2	4	??	
Monolith	196	3	5	9				13										
Nobody	131	2	4	6	15				8	17					3	4		
One two three go!	150	3	6	8	13				7	14								
Online	118	1	4	6	15			4	15									
Passacaglia	175	4	7	10	16	20	19	12	17	22								
Pop the Track	160	2	7	9	16				9	18							??	
Rabiosa	133	2	4	7	14			5	16									
Rainspark 	125	2	5	9	15			5	17									
Re:RAVE							16											
Rippin' It Up	129	2	5	9	16			4	18									
Rockhill	140	3	6	11	16				12	18								
Shanghai Romance	149	4	7	9	14	16	18	5	13	17					2	4		
Sik asik	147	3	5	8	13			4	14									
Star command	155	3	5	12	15	19		14	21									
Step	123	2	4	7	15			5	15				16		2	4		
Sugar eyes	122	1	3	6	8	10		4	9									
Switchback	112	3	5	9	15	18		10	16	18								
Take me back	172	3	7	9	17			10	16									
To Mary/ Two guys	128	4	7	9	15			5	16				18		3	6		
Tribe Attacker	150	3	6	9	16			10	15								??	
U Got Me Rocking	128	3	6	8	17	18		4	17							3		
Unique	145	3	6	10	17		16	12	19									
Utopia	166	4	7	9	17			9	18									
Virtual emotion	180	3	7	11	17												??	
VVV													24					
Xuxa	160	3	5	9	14			12	18								??	
Y2Z		3	6	9	16			9	17									
"""

Fiesta2_revivals = """
title	S	S	S	S	S	S	S	S	D	D	D	D	Sp	Dp	Dp
2006. LOVE SONG			3	10	12	15					13			5	
80's Pop		2	5	8	12	16				6	17		3	4	
Adios	1	3	6		14						16		2	4	
All I want for X-mas		3	6	11						7					
Allegro con fuoco	4	7	11	17					9	18	23		1	6	
Another Truth	3		5	8	15				6	16	17	22			
Arch of darkness	2	4	5	8	14	16				7	18				
Arirang			9		18	22			10		20			2	
ASDF			9	17						10	17				
Bad Character	3		6		10						11		1	3	
Beat # No. 4			6		15						17		2	5	
Beat of the War		3	5	9	10		15			12	19				
Beat of the War 2	4	5	6	10	16					12	19				
Beat the Ghost	3		9		18		20			7	20				
Bee	4	7	10	11	15		19		11	19	21	23			
Beethoven Virus	4	7	8		13		16	17		8	18	20		3	11
Betrayer	1	5	8	13						8	13		2		
Betrayer -Act. 2-		4	6		10						15		3	3	
Big Beat (NOW)			5		13	15				6	14		3	5	
Blaze Emotion	2	3	6	7	9	16	17			10	17	18			
Blazing		3	6	9	15						19				
Breakin' Love		6			12						14		2	4	
Bullfighter's song	4	5	8		16				9	17	21				
Butterfly	3	6	8	13	16				7	17			2	3	
By Chance		2	4	5	15					6	16		2	4	
Cannon X.1	3	7	10		20		21			13	22				
Canon-D	3	7	9		20		21			10	22				
Caprice of Otada	4	6	8		17					10	18				
Change Myself	1	4	5		10						9		1	5	
Chicken Wing			4	6	9		10	19		11	17				
Chimera	4	7	11		16		18	23		16	25	??		??	
Chocolate		5	6		9		13				9	15	2	3	
Chopsticks Challenge		6			17				3		16		1		
Chopstix		5			13						15		2	2	
Chung hwa ban jeom			6		14						16		1	2	
Cleaner	4	7	12	18	22	23			20		24	26			
Close Your Eyes		4											2	3	
Com'back		4	6	8	15				7		16				
Come On!	2	4	5		12						9			4	
Come To Me		4	6		11		12	15			13	14	3	6	
Crashday	4	6	11	17	23	24			17	26					
Crazy	2	4	5	8	15						19		2	3	6
Csikos Post	3	7	10		13					8		16			
D Gang	4	6	9					18		7		15			
Dance All Night			5		13						15		2		
Dance Vibrations	4	5	10		14					15	18		1	6	
Dance With Me	2	4	6	12	14					15			4	4	6
Dawn of the Apocalypse	4	14			21					14	21				
Deja  Vu	1	3	6		13					6	13				
Destination		4	7	11	16	18	19			13	20			5	
Dieciseis	2	4		6	13				5		15				
Digan Lo Que Digan	3	4	6	7	9	16					13	18		8	
Dignity	3	5	12		16		20			13	18	23			
DJ Otada	4	6	8		19					14	22				
Do It -Reggae Style-					13						15		4	5	
Do It!		6			15						18		2	4	
Do you know that -old school-		4	6	14							18			8	
Don't Bother Me		4	5				10			5	13		2		
Dr. M		3	7	9	12		16			11	16				
Emperor	2	5	8		11			16				17	3	3	
Empire of the Sun			6		11						13		1	4	
Energizer	4	7	9		16					11	17		2		
Energy	4	8	13	15					9	14			4	5	
Enjoy! Enjoy!		3		6	11	14				7	14		4	5	
Enter the Dragon	1	4	5	8			14				17		2	5	
Exciting (Sin na - Zin na)	2	3			14						14		5		
Extravaganza	4	7	9	11	16		21			12	17	19			
Faster Z	4	6	8	12	16		19	20		14	20	23			
Final Audition	2	6	7	9	15		17				15	17		3	
Final Audition 2	4	7	8	10	16					8	17	19		3	
Final Audition 3 UF	2	5	6	9	14						17	19	3	5	
Final Audition Episode 1	4	7	8	13	15		19			11	21	23			
Final Audition Episode 2-1	3	4	7		18		20	21		9	21	22			
Final Audition Episode 2-2		7	16		17		21	22		18	23	24			
Final Audition Episode 2-X	3	5	8		17		23				21	24		2	
Fire		3		5	8	15	16		4		11	14	3	4	
First Love		4	9									14	1	4	
Fly	1	3	6		14						16		3	4	
Forward	2	4	5		13						13		2	5	
Free Style			13									15	1	3	
Funky Tonight	2	4	5		12					4	14				
Gargoyle	4	7	9	18					12	20	23		2		
Get Up (And Go)		4	7	10	17					11	20			3	
Get Up!		4	8		13					9		18			
Get your groove on		4	6	13						9					
Go		3	7		12						13			3	
Good Life	2		4		15					5	16		2	3	
Groovin' Motion			6		9						11		3	6	
Guitar Man		3	9	13	18					10	13	19			
Gun Rock		5	11	17	18					11	18	22			
Haley		4			9						11		2	4	
Hatred			6		13					7	16			7	
Hello			7					16		9	16				
Hello William		4	6	9	17	19				9	21				
Hi-Bi	3	5	8		15		18			8	18	20			
Higgledy Piggledy	2	6	9		14					8	15		1		
Hot	2	4	6		10						12			4	
Hot issue	3	7	10	16					5	13	15		4	5	
Hungarian dance V	4	6	8	17	18				9	17			2		
Hybs		4			11						13		2	4	
I'll Give You All My Love	2	4	7		16					7	18				
I'm Your Girl	1	3	5		12						10		2	6	
In your fantasy	2	4	6		14					7	16			3	
Innocent		3	5		11	14				6	15				
Interference			11	18					12	19			2	3	
J Bong	3	5	7	8	13						17			5	
Jam O Beat			7		14						14		2	6	
Jonathan's dream			8	16					10	15	18				
K.O.A.	2	3	5	8	17					10	18				
La La La	1	3	5		10						13		2	5	
Last farewell	2	5	8	13	17				6	14			3	5	
Like a man	4	6	8	18					10	18				3	
Love is a Danger Zone	3		7	10	15		19		6	15	20			??	
Love is a Danger Zone 2	4		7	9	15		21			17	23				
Love is a Danger Zone 2 (D&G Ver.)					16		17				??			??	
Magic	1	4	8	13					3	14			3	4	
Magic girl	4	7	11	15					5	13	16	21	3	4	
Maria			6		11			15				15			
Midnight blue					12						13		4	5	
Mission possible  			5	7	13	19				8					
Mission Possible -Blowback-					18						17		3	5	
Miss's Story			5					18				19	3	5	
Mistake	2	4	6	11							12		1	6	
Mobius Strip	2	4	6		12					7	14				
Money				10	14					12	16		4		
Monkey Fingers	3	5	8		15						17		5		
Monkey Fingers 2			6	10	17					9	19				
Moonlight	4	7	10				18	19		11	20	21			
Mother	1	4	7	13					5	14			2	3	
Mr. Fire Fighter		4	7		13					8	15				
Mr. Larpus	3	5	11		14		20	22	14	17	23				
My Dreams	4	10			17		18				18			5	
My Friend	1	3	6		12						14		3	5	6
My Way	3	5	8		12						15		2	4	6
N			5		16					16			2	5	
Naissance	4	7	8	10	20					7	15				
Naissance 2			6		13						15	19	3	5	
Napalm				13	19	22				14	23				
Narcisista Por Excelencia	3	5		8	16					9	18				
Native	3	5	9	17	20				10	18			2	3	
Necromancy	4	7	10	18	20				13	19		24	2	3	
Nightmare	1	4								13				5	
No Rhyme No Reason		2	5	8	15						20		2		
No.3	4	7	9	16					5	16				4	
Oh Rosa			7					13		7					
One Night		5			13						14		2	4	
Only You	3	6			12				3		13				
Overblow	4	7	10	16	18	20			12	18		20	2	3	
Oy Oy Oy	3		6		8	13					13		2	3	
Panuelito Rojo		5			10						18		1	4	
Papa Gonzales		4	6	8	14					7	18				
Pavane	3	6	10	17					16	22			2		
Phantom	2	7	12				17	18		12	19	20		7	
Phantom -Intermezzo-		3	7	12	15	19	21			15	19	20		3	
Pine nut			13	20						16					
Point Break			6								14		3	6	
Procedimientos Para Llegar A Un Comun Acuerdo	3		7		15					7	16				
Pump Breakers		5			17						15		2	4	
Pump Jump		4						15			17		2	4	
Pump Me Amadeus	3	5	9		17					10	18	19			
Pumping Jumping	1	3	5	13	15	17	19			6	17		4	5	6
Pumping Up		4	12												
Pumptris 8bit ver. 		3	5	8	16	17						??	15	??	
Pumptris Quattro		3	7		12		17	19		13	20	22	10	2	
Rave until the night is over	2	5	9	15					11	17			3	4	
Reality	3	6	8	14	17				4	15			4	2	
Ring Ding Dong	3	5	8	15					5	17			3	4	
Rolling Christmas	3		5		8		13			5	13				
Run		4	8		15					8	17				
Run to you	2	4	5	7	10	13				6	14				
Sajahu	3	6			13						14		3	5	
Set Me Up	2	4	6	9	13								4	4	7
She Likes Pizza			8		9					9	16				
Shock	3	5	8	14	16				4	15				5	
Slam	3	6		9	17		18			6		20			
Slightly		4			14						12	14	1	5	
Smells like a chocolate	4	6	9	16					12	17			1	3	
Solitary	2	4	6	8	9	16	17			7	16		3	5	
Solitary 1.5			7		16						18		4	6	
Solitary 2		4	6	8	17						18		3	6	
Sorceress Elise	4	6	8	10	15	18	21	23	8		17	24		??	
Starian		2	7		13		15			9	17				
Storm			5		12						13		3	4	
Street Show Down			7					15			13		4	6	
Super man	4	6	8	14	16				9	15	23		1	4	??
Take out	4	7	11	17	20				13	19	22	23			??
Tek -Club Copenhagen	3		5		16	17					17		5	4	
Tepris		2	4	7	16					9	18			??	
The Angel Who Lost Wings	1		4	6	13					6	16		2	3	
The Devil	4	6	9	12	20				13	21					??
The People Didn't Know	2	5			15					7	17				
Till the End of Time	2	4						9						3	
To The Sky	1	3	5		12	15				6	16		3	6	
Toccata	4	7	10		17						14	17	3	6	
Top city		4	6	12						7	12				
Turkey March		3	7		12		15			9	19				
Turkey March -Minimal Tunes-		3	6	8	17					10	18			1	
Twist King		4	6	10	14					7	15		4		
U	1		4		6		14				13		2	5	
U Got 2 Know	2	7	8	17	18	19					18		2	4	
Ugly Dee		3	5	9						11	15				
Uprock		5			17						14		2	4	
Vacuum					21	23					22	25		3	
Very Old Couples			6		13						15		2	6	
Vook	4	7	9	15	17		20		12	17	18	19			
Wanna	2		4	9	16				3		12	17	2	5	
We Are	2	4	5		12				6		13			4	
We Goin' Fly Remix			5		15						19		3	6	
We got 2 know	1	5	8	17		20			4	18			2	3	??
We Will Meet Again		3	8	13	14					8					
What Do You Really Want?			9				14	19			16	20			
What happened	3	7	12	17	20					20	23				
Will o' the Wisp	3	5	10		13		19		10	13	19	21			
Winter	4		6	8	15					11	17	19			
Witch Doctor		4	6	10	16		19	21		19	22	23			
Witch Doctor #1	2	5	8	9	15	16	18			17	19	20	3	7	
Xenesis		4	7	10	18					12	15	18	1		
X-rave	3	6	9	17					11	20			2	6	
X-Tree		3	7	12	20					14	18	22	2	3	
X-Treme	4	7	9		14	18				13	19				
"""

Fiesta2_longs = """
title	S	S	S	D	D	D	Sp	Dp	-	-
FULL SONG: Beat # No. 4			17			19		6		
FULL SONG: Beat of the War 2			19			20				
FULL SONG: Canon-D		11	16	23						
FULL SONG: Chopsticks Challenge			15			19				
FULL SONG: Crashday			22	22						
FULL SONG: Dawn of the Apocalypse		15	21							
FULL SONG: Deja  Vu		7	16	16						
FULL SONG: Digan Lo Que Digan		7	18							
FULL SONG: Dignity		13	19	16		22				
FULL SONG: Energy			15							
FULL SONG: Enter the Dragon			17			18		3		
FULL SONG: Fantastic baby			17	15						
FULL SONG: Fire			14							
FULL SONG: Fly		10	15	16		17				
FULL SONG: Forward	4		15	5						
FULL SONG: Hot issue		9	14	16						
FULL SONG: I'm the best			18	14						
FULL SONG: Interference			18	15	18					
FULL SONG: La La La	4	14								
FULL SONG: Like a Man			19	19						
FULL SONG: Love is a Danger Zone 2			19			21				
FULL SONG: Magic Girl			12							
FULL SONG: Narcisista Por Excelencia			17		18					
FULL SONG: No.3			17	18						
FULL SONG: Panuelito Rojo		9	16			18				
FULL SONG: Procedimientos Para Llegar A Un Comun Acuerdo	6		17	7						
FULL SONG: Ring ding dong			16	17						
FULL SONG: Shanghai Romance			17	16						
FULL SONG: Shock			17	15						
FULL SONG: Slightly	5		17							
FULL SONG: Step			15	17						
FULL SONG: Trato De No Trabarme		10	22			24				
FULL SONG: Wanna			16							
REMIX: 45RPM & Eun Ji Won Remix			11	14				5		
REMIX: BanYa HipHop Mix	6	7						6		
REMIX: B.P. Classic remix		12	18	13		19				
REMIX: B.P. Classic Remix 2		11	18							
REMIX: BanYa Classic Remix		7	19		20			11		
REMIX: BanYa-P Guitar Remix			22			24				
REMIX: Bemera		16	24	18		26				
REMIX: Big Metra Remix		5	19			17				 
REMIX: BIG to the BANG			17		17					
REMIX: Caprice of DJ Otada		11	19		22	25				
REMIX: Dr. K.O.A		8	18			20				
REMIX: Everybody Got 2 Know		??	19			18				
REMIX: FAE1 & Chicken Wing Remix (NX2 ver.)		8	21	13						
REMIX: Groove Party		5	14	15				5		
REMIX: Hard Core Rock Mix		18	21							
REMIX: History: We Are The Zest							6	5		
REMIX: Infinity RMX			20	20						
REMIX: K-POP Boy Group RMX				17						
REMIX: K-Pop Girl Group RMX			14	15						
REMIX: K-Pop Mix (Old & New)		7	13							
REMIX: Love is a Danger Zone - Try to BPM		12	20	14		23				
REMIX: Money Fingers		8	16	9		17				
REMIX: msgoon RMX pt. 1		7	17			17				
REMIX: msgoon RMX pt. 3		6	17	11		20				
REMIX: msgoon RMX pt. 5			17		17		3	4		
REMIX: msgoon RMX pt. 6			20		19					
REMIX: msgoon RMX pt. 7			17					4		
REMIX: Nina/Pxndx Remix		6	16	8						
REMIX: Novasonic Mix Ver. 3		6	17			19				
REMIX: Novarash		11	17			12				
REMIX: NX K-Pop Dance		8	14	9		16				
REMIX: PaPa Helloizing		8	19							
REMIX: Pro Pop Mix (new remix)			17							
REMIX: Pump It Up With You			17		17					
REMIX: Set Up Me2 Mix			17							
REMIX: Super mackerel			16		18					
REMIX: Techno repeatorment		7	19	8						
REMIX: The People Didn't Know "Pumping Up"		7		4		17				
REMIX: Treme-Vook of the War		11	19	13		22				
REMIX: Turkey Virus		8	15	11						
REMIX: Vacuum cleaner	15	20	25			27				
REMIX: What are you Doin?			19	24						
REMIX: Wi-Ex-Doc-Va		15	21	15		23				
SHORT CUT: Bemera	13	21	23			19				
SHORT CUT: Chicken Wing			20	13						
SHORT CUT: Cleaner			21	20						
SHORT CUT: Destination		9	15		18	20				
SHORT CUT: Exceed 2 Opening			15		19	??				
SHORT CUT: Extravaganza			14		14	21	15			
SHORT CUT: Final audition 2			16			17				
SHORT CUT: Final Audition 3			17			16				
SHORT CUT: Final Audition Episode 2-X			20			19				
SHORT CUT: Flew Far Faster			18		21					
SHORT CUT: Ignis fatuus			21		21					
SHORT CUT: K.O.A		8	16			18				
SHORT CUT: Love is a Danger Zone		13	20			17				
SHORT CUT: Love is a Danger Zone 2		8	19			21				
SHORT CUT: Moonlight		16	18			20				
SHORT CUT: NX Opening			16			17				
SHORT CUT: Overblow			18			17				
SHORT CUT: Passacaglia			17		18					
SHORT CUT: Pop the track			18		16					
SHORT CUT: Procedimientos Para Llegar A Un Comun Acuerdo			18			16				 
SHORT CUT: Pumptris 8bit Ver.		8	16			22				
SHORT CUT: Solitary 2			18			17				
SHORT CUT: Take out			18			19				
SHORT CUT: Trotpris			14			15				
SHORT CUT: U got me rocking			17		17					
SHORT CUT: Unique			18		16					
SHORT CUT: Winter	6	9	16		10	17				
SHORT CUT: Witch Doctor		14	20			16				
SHORT CUT: X-rave			16			18				
"""

tracklist = []


def TransformTitle( title ):
	# todo: find REMIX:, FULL: and SHORT CUT: and fix them
	for tagMap in [ ( "REMIX: ", "Remix" ), ( "SHORT CUT: ", "Short" ), ( "FULL SONG: ", "Full" ) ]:
		if title.startswith( tagMap[ 0 ] ):
			return title[ len( tagMap[ 0 ] ) : ], tagMap[ 1 ]
	return title, ""


def AddTrackGroup( mix, titleList, trackLineList ):
	assert( titleList[ 0 ] == "title" )
	assert( len( titleList ) == len( trackLineList ) )
	
	title, duration = TransformTitle( trackLineList[ 0 ] )
	title_upper = title.upper()
	foundTracks = [ track for track in tracklist if track[ 'title_upper' ] == title_upper and track[ 'duration' ] == duration ]
	assert( len( foundTracks ) <= 1 )
	if len( foundTracks ) == 0:
		track = { 'title': title, 'duration': duration, 'title_upper': title_upper }
		tracklist.append( track )
	else:
		track = foundTracks[ 0 ]
	track[ mix ] = []
	for i in xrange( 1, len( titleList ) ):
		if titleList[ i ] in [ "artist", "bpm" ]  and  trackLineList[ i ] != "":
			track[ titleList[ i ] ] = trackLineList[ i ]
		if titleList[ i ] in [ "S", "D", "Sp", "Dp" ]  and  trackLineList[ i ] != "":
			track[ mix ].append( titleList[ i ] + trackLineList[ i ] )


def AddTracks( mix, tracksText ):
	tracksLines = tracksText.splitlines()
	titleList = tracksLines[ 1 ].split( "\t" )
	for i in titleList:
		assert( i in [ "title", "artist", "bpm", "S", "D", "Sp", "Dp", "-" ] )
	tracksLines = tracksLines[ 2: ]
	for trackLine in tracksLines:
		AddTrackGroup( mix, titleList, trackLine.split( "\t" ) )


AddTracks( "Fiesta", Fiesta_all )
AddTracks( "FiestaEX", FiestaEX_newTunes )
AddTracks( "FiestaEX", FiestaEX_revivals )
AddTracks( "FiestaEX", FiestaEX_longs )
AddTracks( "Fiesta2", Fiesta2_newTunes )
AddTracks( "Fiesta2", Fiesta2_revivals )
AddTracks( "Fiesta2", Fiesta2_longs )

tracklist = sorted( tracklist, key = itemgetter( 'duration', 'title_upper' ) )

for track in tracklist:
	print "{"
	titleLine = "\ttitle: \"" + track[ 'title' ] + "\","
	for attr in [ 'artist', 'bpm', 'duration' ]:
		if attr in track and track[ attr ] != "":
			titleLine += " " + attr + ": \"" + track[ attr ] + "\","
	print titleLine
	for mix in ['Fiesta2', 'FiestaEX', 'Fiesta']:
		if mix in track:
			print "\t" + mix + ": " + str( track[ mix ] ).replace( "'", "\"" ) + ","
	print "},"
