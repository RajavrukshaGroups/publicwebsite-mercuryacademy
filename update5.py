import re

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace leftFaqs mapping
content = content.replace('faq.id', 'faq._id')

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
