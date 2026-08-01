import re

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacement = '''<CourseClientView 
        university={university}
        course={course}
        curriculum={curriculum}
        faqs={faqs}
        summary={summary}
        courseName={courseName}
        fullCourseName={fullCourseName}
        bannerUrl={bannerUrl}
        logoUrl={logoUrl}
        brochureUrl={brochureUrl}
        location={location}
        feeItems={feeItems}
      />'''

content = content.replace('<CourseClientView />', replacement)

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
