export const BrandLogo = ({ scale = 1 }) => (
    <div className="flex flex-col items-center justify-center" style={{ transform: `scale(${scale})` }}>
        <div className="flex items-end gap-2">
            <span className="font-cursive text-6xl md:text-7xl text-brand-navy logo-shadow leading-none pr-2">Bhvikhn</span>
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="40" r="28" fill="url(#sunsetGradient)" />
                <path d="M15 25 L30 20 L25 30 Z" fill="#0A192F" />
                <path d="M30 20 L40 23 L33 25 Z" fill="#0A192F" />
                <path d="M5 35 Q 20 30, 30 20" stroke="#0A192F" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
                <path d="M 55 25 Q 58 22, 60 25 Q 62 22, 65 25" stroke="#0A192F" strokeWidth="1.5" fill="none" />
                <path d="M 70 20 Q 73 17, 75 20 Q 77 17, 80 20" stroke="#0A192F" strokeWidth="1.5" fill="none" />
                <path d="M95 70 Q 100 50, 95 30 M95 70 Q 90 50, 95 30" stroke="#0A192F" strokeWidth="2.5" fill="none" />
                <path d="M95 30 Q 85 25, 80 35 M95 30 Q 105 25, 110 35 M95 30 Q 85 35, 90 45 M95 30 Q 105 35, 100 45" stroke="#0A192F" strokeWidth="2.5" fill="none" />
                <path d="M45 70 L70 45 L95 70 Z" fill="#0A192F" opacity="0.9" />
                <path d="M60 70 L85 35 L110 70 Z" fill="#0A192F" opacity="0.7" />
                <path d="M0 70 Q 20 60, 40 70 T 80 70 T 120 70 T 160 70" stroke="#F59E0B" strokeWidth="4" fill="none" />
                <path d="M0 78 Q 20 68, 40 78 T 80 78 T 120 78 T 160 78" stroke="#F59E0B" strokeWidth="2" fill="none" opacity="0.6" />
                <defs><linearGradient id="sunsetGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFB347" /><stop offset="100%" stopColor="#FF7B00" /></linearGradient></defs>
            </svg>
        </div>
        <div className="flex items-center gap-4 mt-2 w-full justify-center">
            <span className="h-[1.5px] w-12 bg-brand-navy"></span>
            <span className="text-[11px] tracking-[0.4em] font-bold text-brand-navy uppercase font-sans">Travel • Explore • Belong</span>
            <span className="h-[1.5px] w-12 bg-brand-navy"></span>
        </div>
    </div>
);
export const IconHeart = ({ filled, size = 20 }) => (
    <svg width={size} height={size} fill={filled ? "#ef4444" : "none"} stroke={filled ? "#ef4444" : "currentColor"} strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
);
export const IconPin = () => <svg width="16" height="16" className="inline mr-1 text-brand-sunset" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
export const IconStar = () => <svg width="18" height="18" className="inline text-brand-sunset" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>;
export const IconCouple = () => <svg width="18" height="18" className="text-brand-navy mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
export const IconShield = () => <svg width="18" height="18" className="text-brand-navy mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
export const IconCoffee = () => <svg width="18" height="18" className="text-brand-navy mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3zM5 11v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6M8 21h8" /></svg>;
export const IconPool = () => <svg width="24" height="24" className="text-brand-sunset mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-8 0v6m-8-6v6m16-6v6" /><path d="M4 8c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0" /></svg>;
export const IconGym = () => <svg width="24" height="24" className="text-brand-sunset mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5h11M6.5 17.5h11M3 12h18M6.5 6.5v11M17.5 6.5v11" /></svg>;
export const IconWifi = () => <svg width="24" height="24" className="text-brand-sunset mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>;
export const IconSpa = () => <svg width="24" height="24" className="text-brand-sunset mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9 9 9 0 00-18 0 9 9 0 009 9zM12 21V9m-4 12v-4a4 4 0 118 0v4" /></svg>;
export const IconCheckCircle = () => <svg width="64" height="64" className="text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const IconMap = () => <svg width="16" height="16" className="text-brand-sunset" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;