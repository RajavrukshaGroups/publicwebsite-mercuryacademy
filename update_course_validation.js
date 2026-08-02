const fs = require('fs');
const file = 'd:/Websites-Changes/publicwebsite-mercuryacademy/app/universities/[universitySlug]/courses/[universityCourseSlug]/CourseClientView.tsx';
let data = fs.readFileSync(file, 'utf8');

const oldHandleGateSubmit = `  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phone = gateFormState.phone.trim();
    if (phone.startsWith('0')) {
      alert('Phone number cannot start with zero.');
      return;
    }
    if (phone.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }`;

const newHandleGateSubmit = `  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const firstName = gateFormState.firstName.trim();
    if (firstName.length < 2) {
      alert('First name must be at least 2 characters.');
      return;
    }
    const phone = gateFormState.phone.trim();
    if (phone.startsWith('0')) {
      alert('Phone number cannot start with zero.');
      return;
    }
    if (phone.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }`;

data = data.replace(oldHandleGateSubmit, newHandleGateSubmit);

fs.writeFileSync(file, data);
console.log('Successfully updated validation in CourseClientView.tsx');
