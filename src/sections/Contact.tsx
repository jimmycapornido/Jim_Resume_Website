import React, { useRef, useState } from 'react';
import { Site } from '../types/site';
import { Resume } from '../types/resume';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';

const MIN_MESSAGE_LENGTH = 10;

export const Contact: React.FC<{ site: Site; resume: Resume }> = ({ site, resume }) => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    contactMethod: 'email',
    consent: false,
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [success, setSuccess] = useState('');
  const [mailtoError, setMailtoError] = useState(false);

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = 'Full Name is required.';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required.';
    if (!form.service) e.service = 'Please select a service.';
    if (!form.message.trim() || form.message.length < MIN_MESSAGE_LENGTH) e.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
    if (!form.consent) e.consent = 'Consent is required.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setMailtoError(false);
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;
    const subject = encodeURIComponent(`Client Inquiry: ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Needed: ${form.service}\nPreferred Contact: ${form.contactMethod}\nMessage:\n${form.message}`
    );
    const mailto = `mailto:${resume.email}?subject=${subject}&body=${body}`;
    try {
      window.location.href = mailto;
      setSuccess('Draft email opened.');
    } catch {
      setMailtoError(true);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(resume.email);
    setSuccess('Email address copied!');
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* LEFT */}
        <div>
          <SectionHeading>Let's Connect</SectionHeading>
          <p className="mb-6 text-text-secondary dark:text-slate-300 text-base leading-relaxed">{site.contact.headline}</p>
          <div className="mb-4">
            <a href={`tel:${resume.phone}`} className="block text-base font-semibold text-primary dark:text-slate-100 hover:text-accent transition mb-2">{resume.phone}</a>
            <a href={`mailto:${resume.email}`} className="block text-base font-semibold text-primary dark:text-slate-100 hover:text-accent transition mb-3">{resume.email}</a>
            <Button variant="outline" type="button" onClick={copyEmail}>Copy Email</Button>
          </div>
          <div className="text-xs text-text-muted dark:text-slate-500 mb-4">{site.contact.responseSLA}</div>
          {success && <div className="text-green-700 dark:text-green-400 text-sm font-medium mb-2">{success}</div>}
          {mailtoError && <div className="text-red-700 dark:text-red-400 text-sm font-medium mb-2">Could not open email client. Please copy the email address above.</div>}
        </div>
        {/* RIGHT: FORM */}
        <form className="bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm p-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-sm font-medium text-text-primary dark:text-slate-100 mb-2">Full Name*</label>
            <Input name="name" placeholder="John Doe" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} />
            {errors.name && <span className="text-xs text-red-600 dark:text-red-400 mt-1 block">{errors.name}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary dark:text-slate-100 mb-2">Clinic / Company</label>
            <Input name="company" placeholder="Your Practice Name" value={form.company} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary dark:text-slate-100 mb-2">Email*</label>
            <Input name="email" placeholder="you@clinic.com" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
            {errors.email && <span className="text-xs text-red-600 dark:text-red-400 mt-1 block">{errors.email}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary dark:text-slate-100 mb-2">Phone</label>
            <Input name="phone" placeholder="+1 (555) 123-4567" value={form.phone} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary dark:text-slate-100 mb-2">Service Needed*</label>
            <Select name="service" value={form.service} onChange={handleChange} aria-invalid={!!errors.service}>
              <option value="">Select a service...</option>
              {site.services.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
            </Select>
            {errors.service && <span className="text-xs text-red-600 dark:text-red-400 mt-1 block">{errors.service}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary dark:text-slate-100 mb-2">Message*</label>
            <Textarea name="message" placeholder="Tell me about your clinic's needs..." value={form.message} onChange={handleChange} minLength={MIN_MESSAGE_LENGTH} aria-invalid={!!errors.message} />
            {errors.message && <span className="text-xs text-red-600 dark:text-red-400 mt-1 block">{errors.message}</span>}
          </div>
          <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
            <div className="flex gap-4 items-center mb-4">
              <label className="flex items-center gap-2 text-sm text-text-primary dark:text-slate-100">
                <input type="radio" name="contactMethod" value="email" checked={form.contactMethod === 'email'} onChange={handleChange} /> Email
              </label>
              <label className="flex items-center gap-2 text-sm text-text-primary dark:text-slate-100">
                <input type="radio" name="contactMethod" value="phone" checked={form.contactMethod === 'phone'} onChange={handleChange} /> Phone
              </label>
            </div>
            <label className="flex items-center gap-2 text-xs text-text-primary dark:text-slate-100">
              <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} /> {site.contact.consentText}
            </label>
            {errors.consent && <span className="text-xs text-red-600 dark:text-red-400 mt-2 block">{errors.consent}</span>}
          </div>
          <Button variant="primary" type="submit" className="w-full">Send Inquiry</Button>
        </form>
      </div>
    </section>
  );
};
