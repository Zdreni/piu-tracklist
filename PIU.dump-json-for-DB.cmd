@set PYTHONIOENCODING=utf-8
@python export/PIU.dump-json-for-DB.py "../piu-top-GD/Tracklist.json.txt" | node  &&  @start ../piu-top-GD/Tracklist.json.txt
