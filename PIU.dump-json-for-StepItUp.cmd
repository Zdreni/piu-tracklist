@set PYTHONIOENCODING=utf-8
@python export/PIU.dump-json-for-StepItUp.py "../Step It Up/branches/Unity3D-2018/Assets/Resources/Tracklist.json.txt" | node  &&  @start "" "../Step It Up/branches/Unity3D-2018/Assets/Resources/Tracklist.json.txt"
