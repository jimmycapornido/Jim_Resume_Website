import React, { useState } from 'react';
import { Site } from '../types/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Divider } from '../components/ui/Divider';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Images from public folder (non-cert)
const BASE = '/Jim_Resume_Website';
const serviceImages = [
  `${BASE}/med-transcript.jpg`,
  `${BASE}/ChartSwap.jpg`,
  `${BASE}/med-transcrip-2.jpg`,
  `${BASE}/PCA.jpg`,
  `${BASE}/SalesForce.jpg`,
  `${BASE}/SharePoint.jpg`,
];
const serviceIcons = ['📋', '🗂️', '📝', '🔍', '📊', '✅'];

export const Services: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % site.services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + site.services.length) % site.services.length);
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="services"
      ref={elementRef}
      className={`py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl px-4 mx-auto">
        <SectionHeading>Core Services</SectionHeading>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-border dark:border-slate-700 shadow-lg relative lg:h-[450px]">
            
            {/* The Track */}
            <div 
              className="flex h-full w-full transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {site.services.map((service, i) => {
                const isMedicalLegal = service.title.toLowerCase().includes('record release coordination');
                
                return (
                  <div
                    key={i}
                    className="w-full h-full flex-shrink-0 flex flex-col md:flex-row bg-white dark:bg-slate-900"
                  >
                    {/* Left Column (Image) */}
                    <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 dark:bg-slate-800 p-6 md:p-10 border-b md:border-b-0 md:border-r border-border dark:border-slate-700 relative min-h-[250px] md:min-h-full">
                      {isMedicalLegal ? (
                         <div className="relative w-full flex items-center justify-center h-full">
                           <img
                             src={BASE + '/medical-legal.jpg'}
                             alt="Medical-Legal Record Release Coordination"
                             className="w-full h-auto object-contain max-h-[200px] md:max-h-[300px] rounded-lg shadow-sm bg-white"
                           />
                           <img
                             src={BASE + '/medical-legal-2.jpg'}
                             alt="Medical-Legal Overlay"
                             className="absolute right-0 bottom-0 md:-right-4 md:-bottom-4 w-2/3 max-w-[150px] md:max-w-[200px] border-4 border-white rounded-lg shadow-lg bg-white"
                             style={{ zIndex: 2 }}
                           />
                         </div>
                      ) : (
                        <img
                          src={serviceImages[i % serviceImages.length]}
                          alt={service.title + ' Example'}
                          className="w-full h-auto object-contain max-h-[200px] md:max-h-[300px] rounded-lg shadow-sm bg-white p-2"
                        />
                      )}
                    </div>

                    {/* Right Column (Content) */}
                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center overflow-y-auto bg-white dark:bg-slate-900">
                      <div className="mb-4 text-4xl">{serviceIcons[i]}</div>
                      <h3 className="mb-3 text-2xl font-bold text-text-primary dark:text-slate-100 leading-tight">
                        {service.title}
                      </h3>
                      <p className="mb-5 text-sm md:text-base leading-relaxed text-text-secondary dark:text-slate-300">
                        {service.description}
                      </p>
                      <ul className="text-sm text-text-muted dark:text-slate-400 space-y-2.5">
                        {service.outcomes.map((o, j) => (
                          <li key={j} className="flex items-start">
                            <span className="mr-3 text-primary dark:text-accent font-bold mt-0.5">✓</span>
                            <span className="leading-snug">{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 md:-left-6 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-border dark:border-slate-700 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md text-text-primary dark:text-slate-200 hover:text-primary dark:hover:text-accent hover:border-primary transition-all z-20 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous service"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 md:-right-6 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-border dark:border-slate-700 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md text-text-primary dark:text-slate-200 hover:text-primary dark:hover:text-accent hover:border-primary transition-all z-20 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next service"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2.5 md:gap-3">
            {site.services.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                  i === currentIndex 
                    ? 'bg-primary dark:bg-accent w-6 md:w-8' 
                    : 'w-2.5 md:w-3 bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        <Divider />
      </div>
    </section>
  );
};
