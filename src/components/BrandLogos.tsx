import React from 'react';
import { getAssetUrl } from '../utils/assets';

// Appagentix Black Logo for Header / Light backgrounds
export const AppagentixBlackLogo: React.FC<{ className?: string }> = ({
  className = "h-8 sm:h-9 w-auto object-contain"
}) => {
  return (
    <img
      src={getAssetUrl('assets/aistudio/Agentic_black_logo_878668b7.png')}
      alt="Appagentix"
      className={className}
    />
  );
};

// Appagentix White Logo for Footer / Dark backgrounds
export const AppagentixWhiteLogo: React.FC<{ className?: string }> = ({
  className = "h-8 sm:h-9 w-auto object-contain"
}) => {
  return (
    <img
      src={getAssetUrl('assets/aistudio/Agentic_White-logo_2529adb7.png')}
      alt="Appagentix"
      className={className}
    />
  );
};

// Mixpanel Partner Logo
export const MixpanelLogo: React.FC = () => (
  <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
    <span className="tracking-tight text-xl font-bold">mixpanel</span>
    <span className="flex gap-1">
      <span className="w-2 h-2 rounded-full bg-slate-900"></span>
      <span className="w-2 h-2 rounded-full bg-slate-900"></span>
      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
    </span>
  </div>
);

// Claude Partner Network Logo
export const ClaudePartnerLogo: React.FC = () => (
  <div className="flex items-center gap-2.5 text-slate-800">
    <svg className="w-6 h-6 text-[#D97706]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
    </svg>
    <div className="flex flex-col text-left leading-none">
      <span className="text-base font-bold tracking-tight text-slate-900">Claude</span>
      <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">PARTNER NETWORK</span>
    </div>
  </div>
);

// Microsoft Solutions Partner Logo
export const MicrosoftPartnerLogo: React.FC = () => (
  <div className="flex items-center gap-2.5 text-slate-800">
    <div className="grid grid-cols-2 gap-1 w-5 h-5">
      <div className="bg-[#F25022] rounded-[1px]"></div>
      <div className="bg-[#7FBA00] rounded-[1px]"></div>
      <div className="bg-[#00A4EF] rounded-[1px]"></div>
      <div className="bg-[#FFB900] rounded-[1px]"></div>
    </div>
    <div className="flex flex-col text-left leading-none">
      <span className="text-base font-bold tracking-tight text-slate-900">Microsoft</span>
      <span className="text-[10px] font-medium text-slate-500">Solutions Partner</span>
    </div>
  </div>
);

// CBS Logo
export const CbsLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-slate-900 font-serif font-black tracking-widest text-xl">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
    <span className="text-lg font-bold tracking-widest">CBS</span>
  </div>
);

// Google Developers Logo
export const GoogleDevLogo: React.FC = () => (
  <div className="flex items-center gap-2.5 text-slate-800">
    <div className="flex items-center font-mono font-bold text-xl">
      <span className="text-[#4285F4]">&lt;</span>
      <span className="text-[#EA4335]">/</span>
      <span className="text-[#34A853]">&gt;</span>
    </div>
    <div className="flex flex-col text-left leading-none">
      <span className="text-xs font-semibold text-slate-500">Google</span>
      <span className="text-base font-bold text-slate-900">Developers</span>
    </div>
  </div>
);

// Forbes Logo
export const ForbesLogo: React.FC = () => (
  <div className="font-serif italic font-extrabold text-2xl text-slate-900 tracking-wider">
    Forbes
  </div>
);

// AWS Partner Logo
export const AwsPartnerLogo: React.FC = () => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#232F3E] text-white text-xs font-medium border border-slate-700">
    <span className="font-extrabold text-[#FF9900] text-sm">aws</span>
    <span className="text-[10px] text-slate-300 font-semibold tracking-wider">PARTNER ADVANCED TIER</span>
  </div>
);

// SOC 2 Badge
export const Soc2Badge: React.FC = () => (
  <div className="flex flex-col items-center justify-center border border-slate-600 rounded-full w-14 h-14 text-[8px] text-slate-300 font-bold p-1 text-center bg-slate-900/60 leading-tight">
    <span className="text-[7px] text-slate-400">AICPA</span>
    <span className="text-white font-extrabold text-[10px]">SOC 2</span>
  </div>
);

// ISO 27001 Badge
export const Iso27001Badge: React.FC = () => (
  <div className="flex flex-col items-center justify-center border border-slate-600 rounded-full w-14 h-14 text-[8px] text-slate-300 font-semibold p-1 text-center bg-slate-900/60 leading-tight">
    <span>CERTIFIED</span>
    <span className="text-white font-extrabold text-[9px]">ISO</span>
    <span className="text-[7px]">27001:2022</span>
  </div>
);

// ISO 9001 Badge
export const Iso9001Badge: React.FC = () => (
  <div className="flex flex-col items-center justify-center border border-slate-600 rounded-full w-14 h-14 text-[8px] text-slate-300 font-semibold p-1 text-center bg-slate-900/60 leading-tight">
    <span>CERTIFIED</span>
    <span className="text-white font-extrabold text-[9px]">ISO</span>
    <span className="text-[7px]">9001:2015</span>
  </div>
);
