import json
import re

with open('full_prompts.txt', 'r', encoding='utf-16') as f:
    lines = f.readlines()

for line in lines:
    try:
        data = json.loads(line)
        content = data['content']
        if 'export default function App()' in content:
            # We found the correct code block
            # Extract just the code part by removing <USER_REQUEST> etc.
            code = re.sub(r'<USER_REQUEST>', '', content)
            code = re.sub(r'</USER_REQUEST>', '', code)
            code = re.sub(r'@\[.*?\]\s*', '', code)
            code = code.replace('export default function App()', 'export default function CourseClientView()')
            
            with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'w', encoding='utf-8') as out:
                out.write('"use client";\n' + code)
            break
    except Exception as e:
        print(f"Error parsing line: {e}")
