import json

def create_json(fileName, content, file_path=None):

    full_path = fileName if file_path is None else f"{file_path}/{fileName}"
    
    with open(full_path, 'w') as json_file:
        json.dump(content, json_file, indent=4)