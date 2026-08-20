import React from 'react';

export type ToolIconName =
  | 'ehr'
  | 'records'
  | 'checklist'
  | 'cloud-share'
  | 'crm'
  | 'mail'
  | 'doc-text'
  | 'spreadsheet'
  | 'documents'
  | 'pdf';

const shared = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const paths: Record<ToolIconName, React.ReactNode> = {
  ehr: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <path d="M7.5 13h2.5l1.5-3 2 6 1.5-3h2" />
    </>
  ),
  records: (
    <>
      <path d="M3.5 8.5V6a1.5 1.5 0 0 1 1.5-1.5h4l2 2h9A1.5 1.5 0 0 1 21.5 8v9a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17V8.5Z" />
      <path d="M9 12.5h4.5M13.5 12.5 11.5 10.5M13.5 12.5 11.5 14.5" />
    </>
  ),
  checklist: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <path d="M7.5 8.25h1.5M7.5 12h1.5M7.5 15.75h1.5" />
      <path d="M11.5 8.25h5M11.5 15.75h5" />
      <path d="m10.75 11.25 1 1 2-2" />
    </>
  ),
  'cloud-share': (
    <>
      <path d="M7.5 17.5A4 4 0 0 1 7 9.55 5 5 0 0 1 16.9 8.5 3.75 3.75 0 0 1 16.5 16H7.5Z" />
      <path d="M12 12.5v6M9.5 15l2.5-2.5 2.5 2.5" />
    </>
  ),
  crm: (
    <>
      <circle cx="9" cy="9.5" r="3" />
      <path d="M4.5 19a4.5 4.5 0 0 1 9 0" />
      <circle cx="17" cy="8" r="2.25" />
      <path d="M14.75 13.25a3.25 3.25 0 0 1 5 2.75" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </>
  ),
  'doc-text': (
    <>
      <path d="M6.5 3.5h7l4 4v12.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M13.5 3.5V8h4" />
      <path d="M8.5 12.5h7M8.5 15.75h7M8.5 9.5h2" />
    </>
  ),
  spreadsheet: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9.5h16M4 14.5h16M9.5 4v16M14.5 4v16" />
    </>
  ),
  documents: (
    <>
      <path d="M8.5 6.5h8a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1Z" />
      <path d="M6 3.5h8a1 1 0 0 1 1 1V6" />
      <path d="M10.5 11h5M10.5 14h5M10.5 17h3" />
    </>
  ),
  pdf: (
    <>
      <path d="M6.5 3.5h7l4 4v12.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M13.5 3.5V8h4" />
      <path d="M8 12v5h1.4a1.3 1.3 0 0 0 0-2.6H8m5-1.9v5m2.5-5v5m0-2.5h1.8" />
    </>
  ),
};

export const ToolIcon: React.FC<{ name: ToolIconName; className?: string }> = ({ name, className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} {...shared} aria-hidden="true">
    {paths[name]}
  </svg>
);
