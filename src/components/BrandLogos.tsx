import React from 'react';

// Appagentix Geometric Prism / 3-winged diamond Logo
export const AppagentixLogo: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = "w-7 h-7",
  inverted = false
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${inverted ? 'text-white' : 'text-slate-900'}`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Top prong */}
        <path
          d="M18 4L22.5 12H13.5L18 4Z"
          fill={inverted ? "#F8FAFC" : "#0F172A"}
        />
        {/* Bottom right wing */}
        <path
          d="M23.5 14L32 28.5L24 33L19 22L23.5 14Z"
          fill={inverted ? "#E2E8F0" : "#334155"}
        />
        {/* Bottom left wing */}
        <path
          d="M12.5 14L4 28.5L12 33L17 22L12.5 14Z"
          fill={inverted ? "#CBD5E1" : "#475569"}
        />
        {/* Core center node */}
        <circle cx="18" cy="18" r="2.5" fill="#8B5CF6" />
      </svg>
      <span className="text-xl font-bold tracking-tight">Appagentix</span>
    </div>
  );
};

// Mixpanel Partner Logo
export const MixpanelLogo: React.FC = () => (
  <div className="flex items-center gap-1.5 font-bold text-slate-800 text-lg">
    <span>mixpanel</span>
    <span className="flex gap-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
    </span>
  </div>
);

// Claude Partner Network Logo
export const ClaudePartnerLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-slate-800">
    <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
    </svg>
    <div className="flex flex-col text-left leading-none">
      <span className="text-sm font-bold tracking-tight">Claude</span>
      <span className="text-[9px] font-semibold tracking-wider text-slate-500 uppercase">PARTNER NETWORK</span>
    </div>
  </div>
);

// Microsoft Solutions Partner Logo
export const MicrosoftPartnerLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-slate-800">
    <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
      <div className="bg-[#F25022]"></div>
      <div className="bg-[#7FBA00]"></div>
      <div className="bg-[#00A4EF]"></div>
      <div className="bg-[#FFB900]"></div>
    </div>
    <div className="flex flex-col text-left leading-none">
      <span className="text-sm font-bold tracking-tight">Microsoft</span>
      <span className="text-[9px] font-medium text-slate-500">Solutions Partner</span>
    </div>
  </div>
);

// CBS Logo
export const CbsLogo: React.FC = () => (
  <div className="flex items-center gap-1 text-slate-800 font-serif font-black tracking-widest text-lg">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
    <span className="text-base font-bold tracking-wider">CBS</span>
  </div>
);

// Google Developers Logo
export const GoogleDevLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-slate-800">
    <div className="flex items-center font-mono font-bold text-slate-700 text-lg">
      <span className="text-[#4285F4]">&lt;</span>
      <span className="text-[#EA4335]">/</span>
      <span className="text-[#34A853]">&gt;</span>
    </div>
    <div className="flex flex-col text-left leading-none">
      <span className="text-xs font-semibold text-slate-500">Google</span>
      <span className="text-sm font-bold text-slate-800">Developers</span>
    </div>
  </div>
);

// Forbes Logo
export const ForbesLogo: React.FC = () => (
  <div className="font-serif italic font-bold text-xl text-slate-800 tracking-wider">
    Forbes
  </div>
);

// AWS Partner Logo
export const AwsPartnerLogo: React.FC = () => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#232F3E] text-white text-xs font-medium border border-slate-700">
    <span className="font-bold text-[#FF9900]">aws</span>
    <span className="text-[10px] text-slate-300 font-semibold tracking-wider">PARTNER ADVANCED TIER</span>
  </div>
);

// SOC 2 Badge
export const Soc2Badge: React.FC = () => (
  <div className="flex flex-col items-center justify-center border border-slate-600 rounded-full w-12 h-12 text-[8px] text-slate-300 font-bold p-1 text-center bg-slate-900/60 leading-tight">
    <span className="text-[7px] text-slate-400">AICPA</span>
    <span className="text-white font-extrabold text-[9px]">SOC 2</span>
  </div>
);

// ISO 27001 Badge
export const Iso27001Badge: React.FC = () => (
  <div className="flex flex-col items-center justify-center border border-slate-600 rounded-full w-12 h-12 text-[7px] text-slate-300 font-semibold p-1 text-center bg-slate-900/60 leading-tight">
    <span>CERTIFIED</span>
    <span className="text-white font-extrabold text-[8px]">ISO</span>
    <span className="text-[6px]">27001:2022</span>
  </div>
);

// ISO 9001 Badge
export const Iso9001Badge: React.FC = () => (
  <div className="flex flex-col items-center justify-center border border-slate-600 rounded-full w-12 h-12 text-[7px] text-slate-300 font-semibold p-1 text-center bg-slate-900/60 leading-tight">
    <span>CERTIFIED</span>
    <span className="text-white font-extrabold text-[8px]">ISO</span>
    <span className="text-[6px]">9001:2015</span>
  </div>
);
