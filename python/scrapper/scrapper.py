from bs4 import BeautifulSoup

def scrape_content(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    result = []

    root_selections = soup.find_all('li', class_='rootselection')

    for root in root_selections:
        header = root.find('h4').get_text(strip=True)
        details = {}
        
        for p in root.find_all('p'):
            label = p.find('span', class_='bold')
            if label:
                key = label.get_text(strip=True).replace(':', '')
                value = ' '.join(p.get_text(strip=True).split(':')[1:]).strip()
                details[key] = value

        tables = root.find_all('table')
        table_data = []
        for table in tables:
            rows = table.find_all('tr')
            headers = [th.get_text(strip=True) for th in rows[0].find_all('th')]
            for row in rows[1:]:
                values = [td.get_text(strip=True) for td in row.find_all('td')]
                table_data.append(dict(zip(headers, values)))
        if table_data:
            details["Tables"] = table_data

        result.append({header: details})

    return result

def scrape_summary(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    result = {}
    summary_selections = soup.find_all('div', class_='summary')

    for summary in summary_selections:
        content = summary.find_all('p')
        for p in content:
           span_tag = p.find('span', class_='bold')
           key = span_tag.text.replace(':', '').strip().lower()
           span_tag.extract()
           value = p.text.strip()

           result[key] = value
    
    print(result)
    



