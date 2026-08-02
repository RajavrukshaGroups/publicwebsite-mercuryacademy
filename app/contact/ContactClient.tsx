"use client";

import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../services/api/client';
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactClient() {
    const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    universityCourse: '',
    country: '',
    state: '',
    city: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [universities, setUniversities] = useState<any[]>([]);

  useEffect(() => {
    apiRequest<any>('/university-courses')
      .then(resData => {
        // Handle if response is array directly or wrapped in data
        const list = Array.isArray(resData) ? resData : (resData.data || []);
        setUniversities(list);
      })
      .catch(err => console.error('Error fetching universities:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Phone validation
    const phone = formState.phone.trim();
    if (phone.startsWith('0')) {
      alert('Phone number cannot start with zero.');
      return;
    }
    if (phone.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    try {
      // Filter out empty fields and text-based fields that require objectIds
      const payloadData = Object.fromEntries(
        Object.entries(formState).filter(([key, val]) => 
          val !== '' && !['country', 'state', 'city'].includes(key)
        )
      );

      await apiRequest('/leads', {
        method: 'POST',
        body: JSON.stringify(payloadData)
      });
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ firstName: '', lastName: '', email: '', phone: '', universityCourse: '', country: '', state: '', city: '', message: '' });
      }, 4000);
    } catch (error) {
      console.error(error);
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50 -mt-24.5">
      {/* HERO SECTION */}
      <section className="relative bg-[#0a1835] overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-40 border-b-4 border-[#ca9a3e]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ca9a3e 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-12">
          <span className="text-[#ca9a3e] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            Reach Out To Us
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Our expert academic counsellors are here to guide you through your online education journey. Reach out for admission queries, scholarship details, and more.
          </p>
        </div>
      </section>

      {/* FLOATING CONTACT CARDS */}
      <section className="relative z-20 -mt-20 lg:-mt-24 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border-t-[3px] border-[#ca9a3e] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-[#ca9a3e]" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Call Us</h3>
              <p className="text-gray-500 text-sm mb-4">Mon - Sat, 9:00 AM to 6:00 PM</p>
              <a href="tel:+917204141825" className="font-bold text-[#0a1835] text-lg hover:text-[#ca9a3e] transition-colors">
                +91 72041 41825
              </a>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border-t-[3px] border-[#ca9a3e] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-5">
                <Mail className="w-6 h-6 text-[#ca9a3e]" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4">We usually respond within 24 hours</p>
              <a href="mailto:info@dsuonline.com" className="font-bold text-[#0a1835] text-lg hover:text-[#ca9a3e] transition-colors">
                info@dsuonline.com
              </a>
            </div>

            {/* Card 3: Visit */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border-t-[3px] border-[#ca9a3e] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#ca9a3e]" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Visit Us</h3>
              <p className="text-gray-500 text-sm mb-4">Dayananda Sagar University Campus</p>
              <span className="font-bold text-[#0a1835] text-sm leading-snug max-w-[200px]">
                Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/60 overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            
            {/* Left: Form */}
            <div className="w-full lg:w-3/5 p-8 sm:p-12 lg:p-16">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and our admission experts will contact you shortly.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-100">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">First Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formState.firstName}
                        onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formState.lastName}
                        onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        pattern="^[1-9][0-9]{9}$"
                        title="Phone number must be exactly 10 digits and cannot start with 0"
                        maxLength={10}
                        value={formState.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          if (val.length <= 10) {
                            setFormState({...formState, phone: val});
                          }
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Program of Interest / University</label>
                      <select 
                        value={formState.universityCourse}
                        onChange={(e) => setFormState({...formState, universityCourse: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select a University / Program</option>
                        {universities.map((uni: any, idx: number) => {
                          const uniName = uni.university?.name || '';
                          const courseName = uni.courseCatalog?.name || '';
                          const specName = uni.specialization?.name ? ` - ${uni.specialization.name}` : '';
                          const displayName = uniName && courseName 
                            ? `${uniName} : ${courseName}${specName}` 
                            : (uni.name || uni.title || uni.slug || 'Course Program');

                          return (
                            <option key={uni._id || idx} value={uni._id}>{displayName}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Country</label>
                      <input 
                        type="text" 
                        value={formState.country}
                        onChange={(e) => setFormState({...formState, country: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm"
                        placeholder="India"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">State</label>
                      <input 
                        type="text" 
                        value={formState.state}
                        onChange={(e) => setFormState({...formState, state: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm"
                        placeholder="Karnataka"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">City</label>
                      <input 
                        type="text" 
                        value={formState.city}
                        onChange={(e) => setFormState({...formState, city: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm"
                        placeholder="Bengaluru"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Message</label>
                    <textarea 
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ca9a3e] focus:border-[#ca9a3e] outline-none transition-all text-sm resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5  bg-gradient-to-r from-[#ebb850] via-[#dfad43] to-[#cf982e] hover:from-[#dfad43] hover:to-[#c48c20] text-gray-950 font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info Area */}
            <div className="w-full lg:w-2/5 bg-[#0a1835] text-white p-8 sm:p-12 lg:p-16 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ca9a3e] rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Why Contact Us?</h3>
              
              <div className="space-y-8 flex-grow">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#ca9a3e]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Direct Admission Guidance</h4>
                    <p className="text-sm text-gray-400">Get step-by-step assistance for smooth onboarding into your chosen program.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#ca9a3e]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Scholarship Information</h4>
                    <p className="text-sm text-gray-400">Learn about early-bird discounts and special grants you might be eligible for.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#ca9a3e]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Career Counselling</h4>
                    <p className="text-sm text-gray-400">Not sure which course? Speak to experts to align your goals with our degrees.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-[#ca9a3e] mb-2">Office Hours</h4>
                <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Monday - Saturday</span>
                </div>
                <div className="text-white font-semibold">09:00 AM - 06:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
