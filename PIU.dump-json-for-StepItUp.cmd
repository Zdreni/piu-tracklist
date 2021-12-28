@set PYTHONIOENCODING=utf-8
@python export/PIU.dump-json-for-StepItUp.py | node > "../Step It Up/branches/Unity3D-2018/Assets/Resources/Tracklist.json.txt"
@start "" "../Step It Up/branches/Unity3D-2018/Assets/Resources/Tracklist.json.txt"
