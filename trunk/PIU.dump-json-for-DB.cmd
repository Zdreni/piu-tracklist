@set PYTHONIOENCODING=utf-8
@python PIU.dump-json-for-DB.py | node > ../../piu-top-GD/Tracklist.json.txt
@start ../../piu-top-GD/Tracklist.json.txt
