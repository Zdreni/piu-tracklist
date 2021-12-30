import sys


def include(f):
	with open(f, 'r', encoding='utf-8') as file:
		print(file.read())

print("""
var _ = require('underscore');

var fs = require('fs');
""")

include("src/tracklist.js")
include("src/tracklist_src.js")
include("src/tracklist_unlocks.js")

include("src/check.js")
#include("src/check_Exceed2_Zero.js")
#include("src/check_NX.js")
#include("src/check_NX2_NXA.js")
#include("src/check_XX.js")

include("src/tracklist_bpms.js")
#include("src/tracklist_level_estimations.js")
include("src/tracklist_tags.js")
include("src/tracklist_notes.js")

include("export/PIU.dump-json.js")


outputPathString = sys.argv[1].replace("\\", "\\\\")

print(f"""
DumpPlainTextForStepItUp("{outputPathString}");
""")
