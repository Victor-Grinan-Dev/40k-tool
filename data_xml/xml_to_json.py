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
    json_data = json_data.replace('\u00e2\u20ac\u02dc', "'").replace('\u00e2\u20ac\u2122', "'").replace('\u00c2\u00a0', " ")

    with open(output_filename, 'w') as js_file:
        js_file.write(f"const data = {json_data};")
    
    os.remove(input_file)
    print(f"Deleted original XML file: {input_file}")

if __name__ == "__main__":
    files = [
        'Imperium - Space Wolves.cat',
        'Imperium - Space Marines.cat',
        'Imperium - Dark Angels.cat',
        'Imperium - Astra Militarum.cat',
        'Imperium - Ultramarines.cat',
        'Tyranids.cat',
        'Warhammer 40,000.gst'
    ]

    for file in files:
        filename = '\\' + file
        input_file = r'C:\Users\victo\Desktop' + filename
        output_filename = './src/data/'+ file + '.js'
        convert_xml_to_json(input_file, output_filename)
