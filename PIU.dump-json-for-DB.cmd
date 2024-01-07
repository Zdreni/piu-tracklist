@set PYTHONIOENCODING=utf-8
@set "target=../piu-top/piu-top-GD/Tracklist.json.txt"
@python export/PIU.dump-json-for-DB.py "%target%" | node  &&  @start "" "%target%"
