@set PYTHONIOENCODING=utf-8
@set "target=../Step It Up/branches/Unity3D-2023/Assets/Resources/Tracklist.json.txt"
@python export/PIU.dump-json-for-StepItUp.py "%target%" | node  &&  @start "" "%target%"
