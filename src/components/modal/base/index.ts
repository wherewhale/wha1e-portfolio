import dynamic from 'next/dynamic';

export const BaseModal = dynamic(() => import('./BaseModal'), { ssr: false });
