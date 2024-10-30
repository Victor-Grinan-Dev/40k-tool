import xmltodict
from pathlib import Path
import json
import os

def convert_xml_to_json(input_file, output_filename):
    # Read XML data from the input file
    with open(input_file, 'r') as file:
        xml_data = file.read()

    # Convert XML to dictionary
    dict_data = xmltodict.parse(xml_data)

    # Convert dictionary to JSON
    json_data = json.dumps(dict_data, indent=4)

    # Remove all "@" and "#" characters from the JSON string
    json_data = json_data.replace('@', '').replace('#', '')

    # Write JSON data to a .js file as a JavaScript variable
    with open(output_filename, 'w') as js_file:
        js_file.write(f"const data = {json_data};")
    
    # Delete the original XML file
    os.remove(input_file)
    print(f"Deleted original XML file: {input_file}")

if __name__ == "__main__":
    filename = 'Imperium - Space Wolves'
    input_file = r'C:\Users\victo\Desktop\Imperium - Space Wolves.cat'
    'Imperium - Space Wolves.cat'
    print(input_file)
  
    output_filename = './src/data/Imperium - Space Wolves.js'
    convert_xml_to_json(input_file, output_filename)
