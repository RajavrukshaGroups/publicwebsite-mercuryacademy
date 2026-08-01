import re

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the imports from './data'
content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+\'./data\';', '', content)

# 2. Add Props interface and modify the component signature
props_interface = '''type CourseClientViewProps = {
  university: any;
  course: any;
  curriculum: any[];
  faqs: any[];
  summary: any;
  courseName: string;
  fullCourseName: string;
  bannerUrl?: string;
  logoUrl?: string;
  brochureUrl?: string;
  location?: string;
  feeItems: { label: string; value: number | undefined }[];
};

function formatMoney(value?: number, currency = "INR") {
  if (value === undefined || value === null) {
    return "Contact for details";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CourseClientView(props: CourseClientViewProps) {
  const {
    university,
    course,
    curriculum,
    faqs,
    summary,
    courseName,
    fullCourseName,
    bannerUrl,
    logoUrl,
    brochureUrl,
    location,
    feeItems
  } = props;
'''

content = content.replace('export default function App() {', props_interface)

with open(r'd:\Websites-Changes\publicwebsite-mercuryacademy\app\universities\[universitySlug]\courses\[universityCourseSlug]\CourseClientView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
