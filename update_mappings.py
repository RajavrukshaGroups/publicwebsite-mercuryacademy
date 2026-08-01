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

# The title is hardcoded as 'BBA in Business Analytics' or similar?
# They had: {ABOUT_TEXT.heading}
content = content.replace('{ABOUT_TEXT.heading}', '{courseName}')
content = re.sub(r'\{ABOUT_TEXT\.paragraphs\.map\(\(para,\s*idx\) => \(\s*<p key=\{idx\} className="text-gray-600 leading-7">\s*\{para\}\s*</p>\s*\)\)\}', '<p className="text-gray-600 leading-7 whitespace-pre-line">{course.overview || course.courseCatalog.overview}</p>', content)

# FEE_STRUCTURE - feeItems is an array with {label, value}
content = re.sub(
r'\{FEE_STRUCTURE\.map\(\(item\) => \([\s\S]*?key=\{item\.id\}[\s\S]*?<p className="text-sm font-semibold text-gray-500 mb-1">\{item\.label\}</p>\s*<p className="text-xl font-bold text-gray-900">\{item\.amount\}</p>[\s\S]*?\}\)\}',
r'''{feeItems.map((fee, index) => (
  <div key={index} className="bg-amber-50/40 hover:bg-amber-50/70 rounded-2xl p-6 border border-amber-100/60 shadow-2xs hover:shadow-sm transition-all flex items-center gap-4">
    <div>
       <p className="text-sm font-semibold text-gray-500 mb-1">{fee.label}</p>
       <p className="text-xl font-bold text-gray-900">{formatMoney(fee.value, course.currency)}</p>
    </div>
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

# FAQ_ITEMS splitting logic
content = content.replace('FAQ_ITEMS.length', 'faqs.length')
content = content.replace('FAQ_ITEMS.slice', 'faqs.slice')
# The user's newest JSX had aq.id but the backend is aq._id, but they also changed the mapping back to .id in the revert!
content = content.replace('faq.id', 'faq._id')

# INFO_CARDS - They had Eligibility, Admission, Brochure hardcoded cards.
content = re.sub(
r'\{INFO_CARDS\.map\(\(card\) => \([\s\S]*?key=\{card\.id\}[\s\S]*?\{card\.title\}[\s\S]*?\{card\.description\}[\s\S]*?\{card\.bulletPoints\.map\(\(pt, idx\) => \([\s\S]*?key=\{idx\}[\s\S]*?\{pt\}[\s\S]*?\}\)\}[\s\S]*?onClick=\{\(\) => setActiveModal\(card\.linkAction as ModalType\)\}[\s\S]*?\{card\.linkText\}[\s\S]*?\}\)\}',
r'''
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Eligibility Criteria</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {course.eligibility || "Contact our counsellors for complete eligibility details."}
            </p>
            <button onClick={() => setActiveModal('eligibility')} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-amber-500 transition-colors mt-auto">
              Check Eligibility
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Admission Process</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {course.admissionProcess || "Apply online, submit the required documents and complete the university verification process."}
            </p>
            <button onClick={() => setActiveModal('apply')} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-amber-500 transition-colors mt-auto">
              Start Application
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Learning Benefits</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
              Flexible learning schedule tailored for working professionals. Live interactive sessions, recorded lectures, and dedicated mentors.
            </p>
            {brochureUrl ? (
              <a href={brochureUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-amber-500 transition-colors mt-auto">
                Download Brochure
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            ) : (
              <button onClick={() => setActiveModal('brochure')} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-amber-500 transition-colors mt-auto">
                Download Brochure
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            )}
          </div>
''', content)

# Total Fee in highlights
content = content.replace('₹1,30,000', '{formatMoney(course.totalFee, course.currency)}')

# Write back
with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
