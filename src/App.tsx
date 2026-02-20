import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { useResumeData } from './hooks/useResumeData';
import { useSiteData } from './hooks/useSiteData';
import { Loader } from './components/ui/Loader';
import { ErrorPanel } from './components/ui/ErrorPanel';
import { ThemeProvider } from './components/ui/ThemeProvider';
import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { About } from './sections/About'; // ✅ Added
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Proof } from './sections/Proof';
import { Experience } from './sections/Experience';
import { SkillsTools } from './sections/SkillsTools';
import { Certifications } from './sections/Certifications';
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
      <ThemeProvider>
        <Nav site={site} />
        <main>
          <Hero site={site} resume={resume} />
          <About /> {/* ✅ Inserted here */}
          <Services site={site} />
          <Process site={site} />
          <Proof site={site} />
          <Experience resume={resume} />
          <SkillsTools resume={resume} site={site} />
          <Certifications resume={resume} />
          <Contact site={site} resume={resume} />
        </main>
        <Footer site={site} />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
