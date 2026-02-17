import { useEffect, useState } from 'react';
import { Resume, ResumeSchema } from '../types/resume';

export function useResumeData() {
  const [data, setData] = useState<Resume | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Jim_Resume_Website/src/data/resume.json')
      .then((res) => res.json())
      .then((json) => {
        const parsed = ResumeSchema.safeParse(json);
        if (parsed.success) {
          setData(parsed.data);
        } else {
          setError('Resume data is invalid. Please check JSON format.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load resume data.');
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
}
