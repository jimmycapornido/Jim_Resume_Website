import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Certifications: React.FC<{ resume: any }> = ({ resume }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>Certifications & Training</SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Medical Transcription */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-5 shadow-sm">
            <h3 className="font-semibold text-lg text-text-primary dark:text-slate-100">
              Medical Transcription Training
            </h3>
            <p className="text-sm text-text-secondary dark:text-slate-300">
              Clair Voyance • Jan 2026
            </p>

            <button
              type="button"
              className="mt-4 w-full"
              onClick={() => setSelectedImage('/medical-transcription.jpg')}
            >
              <img
                src="/medical-transcription.jpg"
                alt="Medical Transcription Certificate"
                className="rounded-lg w-full hover:opacity-90 transition"
              />
            </button>
            <p className="mt-2 text-xs text-text-muted dark:text-slate-400">
              Click to enlarge
            </p>
          </div>

          {/* Medical Coding */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-5 shadow-sm">
            <h3 className="font-semibold text-lg text-text-primary dark:text-slate-100">
              Medical Coding Training
            </h3>
            <p className="text-sm text-text-secondary dark:text-slate-300">
              Clair Voyance • Jan 2026
            </p>

            <button
              type="button"
              className="mt-4 w-full"
              onClick={() => setSelectedImage('/medical-coding.jpg')}
            >
              <img
                src="/medical-coding.jpg"
                alt="Medical Coding Certificate"
                className="rounded-lg w-full hover:opacity-90 transition"
              />
            </button>
            <p className="mt-2 text-xs text-text-muted dark:text-slate-400">
              Click to enlarge
            </p>
          </div>

          {/* Medical VA */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-5 shadow-sm">
            <h3 className="font-semibold text-lg text-text-primary dark:text-slate-100">
              Medical Virtual Assistant Training
            </h3>
            <p className="text-sm text-text-secondary dark:text-slate-300">
              Clair Voyance • Jan 2026
            </p>

            <button
              type="button"
              className="mt-4 w-full"
              onClick={() => setSelectedImage('/medical-va.jpg')}
            >
              <img
                src="/medical-va.jpg"
                alt="Medical Virtual Assistant Certificate"
                className="rounded-lg w-full hover:opacity-90 transition"
              />
            </button>
            <p className="mt-2 text-xs text-text-muted dark:text-slate-400">
              Click to enlarge
            </p>
          </div>

        </div>

        {/* Modal Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-5xl w-full">
              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="max-h-[90vh] w-full object-contain rounded-xl shadow-2xl bg-white"
              />
              <p className="mt-3 text-center text-xs text-white/80">
                Click anywhere to close
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
