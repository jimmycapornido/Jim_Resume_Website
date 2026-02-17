import { useEffect, useState } from 'react';
import { Site, SiteSchema } from '../types/site';

export function useSiteData() {
  const [data, setData] = useState<Site | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Jim_Resume_Website/site.json')
      .then((res) => res.json())
      .then((json) => {
        const parsed = SiteSchema.safeParse(json);
        if (parsed.success) {
          setData(parsed.data);
        } else {
          setError('Site data is invalid. Please check JSON format.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load site data.');
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
}
