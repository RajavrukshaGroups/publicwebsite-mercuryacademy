import re

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace INFO_CARDS usages
# The info cards were hardcoded with eligibility, admission, brochure.
# We can use course.eligibility and course.admissionProcess for the text.

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

# Write back
with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
