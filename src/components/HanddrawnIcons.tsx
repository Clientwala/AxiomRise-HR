import React from 'react';

// Common Sketchy Styles
const sketchyStyle = {
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  filter: 'url(#pencilTexture)'
};

const PencilEffect = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <filter id="pencilTexture">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
      </filter>
    </defs>
  </svg>
);

// Vision Icon: Sketched Eye/Horizon
export const SketchedVision = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={sketchyStyle}>
    <path d="M2.5 12C2.5 12 5.5 5 12 5C18.5 5 21.5 12 21.5 12C21.5 12 18.5 19 12 19C5.5 19 2.5 12 2.5 12Z" />
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
    <path d="M12 5C12 5 13 7 12 9" opacity="0.6" />
  </svg>
);

// Mission Icon: Sketched Target/Arrow
export const SketchedMission = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={sketchyStyle}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path d="M19 5L22 2" strokeWidth="2" strokeDasharray="1 2" />
  </svg>
);

// Permanent Placement: Sketched Person & Success
export const SketchedPermanent = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={sketchyStyle}>
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" />
    <path d="M17 11L19 13L23 9" strokeWidth="2" />
  </svg>
);

// Contract Staffing: Sketched Clock/Flexibility
export const SketchedContract = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={sketchyStyle}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6V12L16 14" />
    <path d="M18 18L21 21" opacity="0.5" />
  </svg>
);

// Payroll: Sketched Money/Document
export const SketchedPayroll = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={sketchyStyle}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M16 8H16.01" />
    <path d="M8 16H8.01" />
  </svg>
);

export default PencilEffect;
