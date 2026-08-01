import re

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace PROGRAM_INFO usages
content = content.replace('{PROGRAM_INFO.studyMode}', '{course.studyMode || "Online"}')
content = content.replace('{PROGRAM_INFO.level}', '{course.courseCatalog.level}')
content = content.replace('{PROGRAM_INFO.duration}', '{course.duration} {course.durationUnit}')
content = content.replace('{PROGRAM_INFO.location}', '{location}')
content = content.replace('{PROGRAM_INFO.offeredBy}', '{university.name}')
content = content.replace('{PROGRAM_INFO.programType}', '{course.courseCatalog.level || "Degree"}')
content = content.replace('{PROGRAM_INFO.accreditationBadge}', 'UGC Approved')
content = content.replace('{PROGRAM_INFO.accreditationSubtitle}', 'Entitled Recognition')

# The title is hardcoded as 'BBA in Business Analytics' or similar? Let's check for 'BBA in Business Analytics'
content = re.sub(r'BBA in Business Analytics', '{courseName}', content)

# ABOUT_TEXT
content = content.replace('{ABOUT_TEXT.heading}', '{courseName}')
content = re.sub(r'\{ABOUT_TEXT\.paragraphs\.map\(\(paragraph, index\) => \(\s*<p key=\{index\} className="text-gray-600 leading-relaxed">\s*\{paragraph\}\s*</p>\s*\)\)\}', '{course.overview || course.courseCatalog.overview}', content)

# FEE_STRUCTURE - feeItems is an array with {label, value}
content = re.sub(
r'\{FEE_STRUCTURE\.map\(\(fee\) => \([\s\S]*?key=\{fee\.id\}[\s\S]*?<p className="text-sm font-semibold text-gray-500 mb-1">\{fee\.label\}</p>\s*<p className="text-xl font-bold text-gray-900">\{fee\.amount\}</p>[\s\S]*?\}\)\}',
r'''{feeItems.map((fee, index) => (
  <div key={index} className="bg-gray-50/50 rounded-xl p-5 border border-gray-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all group">
    <p className="text-sm font-semibold text-gray-500 mb-1">{fee.label}</p>
    <p className="text-xl font-bold text-gray-900">{formatMoney(fee.value, course.currency)}</p>
  </div>
))}''', content)

# SEMESTER_CURRICULUM
content = re.sub(
r'\{SEMESTER_CURRICULUM\.map\(\(semester\) => \([\s\S]*?key=\{semester\.id\}[\s\S]*?<span className="text-base font-bold text-blue-950">\{semester\.title\}</span>[\s\S]*?\{semester\.subjects\.map\(\(subject, idx\) => \([\s\S]*?key=\{idx\}[\s\S]*?<span className="text-sm font-medium text-gray-700">\{subject\.name\}</span>[\s\S]*?\}\)\}[\s\S]*?\}\)\}',
r'''{curriculum.map((semester) => (
  <AccordionItem key={semester._id} value={semester._id} className="border-b-0 mb-4 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-xs data-[state=open]:border-blue-200 data-[state=open]:shadow-md transition-all">
    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50/50 transition-colors">
      <div className="flex items-center justify-between w-full pr-4">
        <span className="text-base font-bold text-blue-950">{semester.title || Semester }</span>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{semester.subjects.length} Subjects</span>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-6 pb-6 pt-2">
      {semester.description && <p className="text-gray-600 text-sm mb-4 leading-relaxed">{semester.description}</p>}
      <ul className="space-y-2">
        {semester.subjects.map((subject: any, idx: number) => (
          <li key={subject._id || idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
            <div className="flex flex-col">
               <span className="text-sm font-medium text-gray-700">{subject.name}</span>
               {subject.credits && <span className="text-xs text-gray-500 mt-0.5">{subject.credits} Credits</span>}
            </div>
          </li>
        ))}
      </ul>
    </AccordionContent>
  </AccordionItem>
))}''', content)

# PROGRAM_AT_A_GLANCE
content = content.replace('{PROGRAM_AT_A_GLANCE.semesters}', '{summary.totalSemesters || curriculum.length}')
content = content.replace('{PROGRAM_AT_A_GLANCE.subjects}', '{summary.totalSubjects || 0}')
content = content.replace('{PROGRAM_AT_A_GLANCE.totalCredits}', '{summary.totalCredits || 0}')

# FAQ_ITEMS
content = re.sub(
r'\{FAQ_ITEMS\.map\(\(faq\) => \([\s\S]*?key=\{faq\.id\}[\s\S]*?\{faq\.question\}[\s\S]*?\{faq\.answer\}[\s\S]*?\}\)\}',
r'''{faqs.map((faq) => (
  <AccordionItem key={faq._id} value={faq._id} className="border-b-0 mb-4 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-xs data-[state=open]:border-blue-200 transition-all">
    <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
      <span className="text-base font-bold text-gray-800">{faq.question}</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 pb-5 text-gray-600 leading-relaxed">
      <p className="whitespace-pre-line">{faq.answer}</p>
    </AccordionContent>
  </AccordionItem>
))}''', content)

# Write back
with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
