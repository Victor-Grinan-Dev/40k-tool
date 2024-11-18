# from utils import read_html_file, scrape_content, create_json

from file_reader.file_reader import read_html_file
from scrapper.scrapper import scrape_content, scrape_summary
from file_creator.file_creator import create_json
from pathfinder.pathfinder import find_cwd
import os

def main(filename):

    list_filename = filename.split("/")
    full_path = os.path.join(*list_filename)
    html_file_path = find_cwd() + "\\" + full_path

    html_content = read_html_file(html_file_path)

    if not html_content:
        print("Failed to read the HTML file. Exiting...")
        return
    
    # scraped_data = scrape_content(html_content)
    scraped_data = scrape_summary(html_content)

    print(scraped_data)
   
    # create_json(json_file_name, scraped_data, save_directory)

if __name__ == "__main__":
    main("src/data/bs/wolves_app_test.html")