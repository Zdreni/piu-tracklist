def include(f):
	with open(f, 'r', encoding='utf-8') as file:
		print(file.read())

print("""
var _ = require('underscore');
""")

include("tracklist.js")
include("tracklist_src.js")
include("tracklist_unlocks.js")

include("check.js")
#include("check_Exceed2_Zero.js")
#include("check_NX.js")
#include("check_NX2_NXA.js")
#include("check_XX.js")

#include("tracklist_bpms.js")
#include("tracklist_level_estimations.js")
#include("tracklist_tags.js")
#include("tracklist_notes.js")

include("PIU.dump-json.js")

print("""
DumpPlainTextForBackend();
""")
