import React, { useState } from 'react';
import { Site } from '../types/site';
import { Resume } from '../types/resume';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
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
    consent: false,
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [success, setSuccess] = useState('');
  const [mailtoError, setMailtoError] = useState(false);

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = 'Full Name is required.';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required.';
    if (!form.service) e.service = 'Please select a topic.';
    if (!form.message.trim() || form.message.length < MIN_MESSAGE_LENGTH)
      e.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
    if (!form.consent) e.consent = 'Consent is required.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
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
      `Name: ${form.name}\nOrganization: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nTopic: ${form.service}\nMessage:\n${form.message}`
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
    <Section id="contact" tone="light" className="py-14 md:py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-3 text-h1 font-extrabold text-navy leading-tight">{site.contact.headline}</h2>
            {site.contact.subcopy && (
              <p className="mt-4 text-base text-text-secondary leading-relaxed">{site.contact.subcopy}</p>
            )}

            <div className="mt-6 space-y-1.5">
              <a href={`tel:${resume.phone}`} className="block text-lg font-semibold text-navy hover:text-primary transition">
                {resume.phone}
              </a>
              <a href={`mailto:${resume.email}`} className="block text-lg font-semibold text-navy hover:text-primary transition">
                {resume.email}
              </a>
              <p className="text-sm text-text-secondary">{resume.location} · Remote availability</p>
            </div>
            <Button variant="outline" type="button" className="mt-4" onClick={copyEmail}>
              Copy Email
            </Button>

            <p className="mt-5 text-xs text-text-muted">{site.contact.responseSLA}</p>
            {success && <div className="mt-3 text-sm font-medium text-success">{success}</div>}
            {mailtoError && (
              <div className="mt-3 text-sm font-medium text-error">
                Could not open your email client. Please copy the email address above.
              </div>
            )}
          </div>

          <form
            className="bg-white border border-border rounded-2xl shadow-sm p-5 md:p-6 flex flex-col gap-3.5"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Full Name*</label>
              <Input name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} />
              {errors.name && <span className="text-xs text-error mt-1 block">{errors.name}</span>}
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Organization / Practice</label>
                <Input name="company" placeholder="Your Practice Name" value={form.company} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Phone</label>
                <Input name="phone" placeholder="+1 (555) 123-4567" value={form.phone} onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Work Email*</label>
              <Input name="email" placeholder="you@clinic.com" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
              {errors.email && <span className="text-xs text-error mt-1 block">{errors.email}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">What do you need help with?*</label>
              <Select name="service" value={form.service} onChange={handleChange} aria-invalid={!!errors.service}>
                <option value="">Select a topic...</option>
                {site.services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </Select>
              {errors.service && <span className="text-xs text-error mt-1 block">{errors.service}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Message*</label>
              <Textarea
                name="message"
                placeholder="Tell me about your team's workflow..."
                value={form.message}
                onChange={handleChange}
                minLength={MIN_MESSAGE_LENGTH}
                aria-invalid={!!errors.message}
                rows={3}
              />
              {errors.message && <span className="text-xs text-error mt-1 block">{errors.message}</span>}
            </div>

            {site.contact.privacyNotice && (
              <p className="text-xs text-text-muted bg-clinical-ice border border-border rounded-lg px-3.5 py-2.5">
                {site.contact.privacyNotice}
              </p>
            )}

            <label className="flex items-start gap-2 text-xs text-navy">
              <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-0.5" /> {site.contact.consentText}
            </label>
            {errors.consent && <span className="text-xs text-error block">{errors.consent}</span>}

            <Button variant="primary" type="submit" className="w-full">
              Send Inquiry
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
};
