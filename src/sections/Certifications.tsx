import React, { useState } from 'react';
const BASE = '/Jim_Resume_Website';
const documentCheckIconUrl = BASE + '/assets/vectors/document-check.svg';
import { SectionHeading } from '../components/ui/SectionHeading';

const certificates = [
  {
    img: `${BASE}/medical-transcription-cert.jpg`,
    title: 'Medical Transcription Training',
    org: 'Clair Voyance',
    date: 'Jan 2026',
    desc: 'Comprehensive training in medical transcription, focusing on accuracy, speed, and compliance with healthcare documentation standards.'
  },
  {
    img: `${BASE}/medical-coding-cert.jpg`,
    title: 'Medical Coding Training',
    org: 'Clair Voyance',
    date: 'Jan 2026',
    desc: 'Intensive coding program covering ICD-10, CPT, and HCPCS, with emphasis on insurance claims and regulatory compliance.'
  },
  {
    img: `${BASE}/medical-va-cert.jpg`,
    title: 'Medical Virtual Assistant Training',
    org: 'Clair Voyance',
    date: 'Jan 2026',
    desc: 'Specialized training for virtual assistants in the medical field, including EHR management, patient communication, and telehealth support.'
  },
  {
    img: `${BASE}/ambulance-cert.jpg`,
    title: 'Ambulance Training',
    org: 'Cebu Doctors’ University Hospital',
    date: '2025',
    desc: 'Hands-on training in ambulance operations, emergency response, and patient transport protocols.'
  },
  {
    img: `${BASE}/radiation-cert.jpg`,
    title: 'Radiation Safety Seminar/Short Course',
    org: 'Cebu Doctors’ University Hospital',
    date: '2025',
    desc: 'Seminar on radiation safety, compliance, and best practices for healthcare professionals.'
  },
];

export const Certifications: React.FC<{ resume: any }> = ({ resume }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-5xl px-4 mx-auto">
        <SectionHeading icon={<img src={documentCheckIconUrl} alt="Certificate Icon" className="w-8 h-8" />}>Certifications & Compliance Training</SectionHeading>
        <div className="flex flex-col gap-8 mt-10">
          {certificates.map((cert, idx) => (
            <div key={cert.title} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center md:items-start gap-6 bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-5 shadow-sm`}>
              <button
                type="button"
                className="flex-shrink-0 w-full md:w-1/2"
                aria-label={`Enlarge certificate: ${cert.title}`}
                onClick={() => setSelectedImage(cert.img)}
              >
                <img
                  src={cert.img}
                  alt={`Certificate: ${cert.title} from ${cert.org}`}
                  className="w-full h-auto max-w-xs md:max-w-full object-contain transition rounded-lg shadow hover:opacity-90 bg-white p-2"
                  style={{ maxHeight: '320px' }}
                  loading="lazy"
                />
              </button>
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-semibold text-text-primary dark:text-slate-100">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-slate-300">
                  {cert.org} • {cert.date}
                </p>
                <p className="mt-2 text-sm text-text-muted dark:text-slate-400">
                  {cert.desc}
                </p>
                <p className="mt-2 text-xs text-text-muted dark:text-slate-400">
                  Click certificate to enlarge
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Modal Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70"
            onClick={() => setSelectedImage(null)}
          >
            <div className="w-full max-w-5xl">
              <img
                src={selectedImage}
                alt="Enlarged certificate preview"
                className="max-h-[90vh] w-full object-contain rounded-xl shadow-2xl bg-white p-4 md:p-8"
                style={{ maxWidth: '900px', margin: '0 auto' }}
                aria-modal="true"
                tabIndex={0}
                loading="lazy"
              />
              <p className="mt-3 text-xs text-center text-white/80">
                Click anywhere to close
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
