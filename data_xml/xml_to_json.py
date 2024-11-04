import xmltodict
from pathlib import Path
import json
import os

def convert_xml_to_json(input_file, output_filename):
    with open(input_file, 'r') as file:
        xml_data = file.read()

    dict_data = xmltodict.parse(xml_data) 
    json_data = json.dumps(dict_data, indent=4)
    json_data = json_data.replace('@', '').replace('#', '')

    with open(output_filename, 'w') as js_file:
        js_file.write(f"const data = {json_data};")
    
    os.remove(input_file)
    print(f"Deleted original XML file: {input_file}")

if __name__ == "__main__":
    filename = 'Imperium - Space Wolves'
    # input_file = r'C:\Users\victo\Desktop\Imperium - Space Wolves.cat'
    input_file = r'C:\Users\victo\Desktop\Warhammer 40,000.cat'
    'Imperium - Space Wolves.cat'
    print(input_file)
  
    output_filename = './src/data/Warhammer 4k.js'
    convert_xml_to_json(input_file, output_filename)
