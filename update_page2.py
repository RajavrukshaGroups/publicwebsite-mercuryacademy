import re

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_return = '''  return (
    <>
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      )}
      <CourseClientView 
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
      />
    </>
  );
}
'''

content = re.sub(r'  return \([\s\S]*$', new_return, content)

if 'import CourseClientView' not in content:
    content = content.replace('import { notFound } from "next/navigation";', 'import { notFound } from "next/navigation";\nimport CourseClientView from "./CourseClientView";')

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
