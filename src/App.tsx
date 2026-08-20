import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { useResumeData } from './hooks/useResumeData';
import { useSiteData } from './hooks/useSiteData';
import { Loader } from './components/ui/Loader';
import { ErrorPanel } from './components/ui/ErrorPanel';
import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Services } from './sections/Services';
import { Results } from './sections/Results';
import { WorkflowPortfolio } from './sections/WorkflowPortfolio';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Process } from './sections/Process';
import { Tools } from './sections/Tools';
import { Training } from './sections/Training';
import { Testimonial } from './sections/Testimonial';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const App: React.FC = () => {
  const { data: resume, error: resumeError, loading: resumeLoading } = useResumeData();
  const { data: site, error: siteError, loading: siteLoading } = useSiteData();

  if (resumeLoading || siteLoading) return <Loader />;
  if (resumeError || siteError || !resume || !site) {
    return <ErrorPanel message={resumeError || siteError || 'Missing data.'} />;
  }

  return (
    <ErrorBoundary>
      <Nav site={site} />
      <main>
        <Hero site={site} />
        <Problem site={site} />
        <Services site={site} />
        <Results site={site} />
        <WorkflowPortfolio />
        <About site={site} />
        <Experience resume={resume} />
        <Process site={site} />
        <Tools resume={resume} site={site} />
        <Training />
        <Testimonial site={site} />
        <Contact site={site} resume={resume} />
      </main>
      <Footer site={site} />
    </ErrorBoundary>
  );
};

export default App;
