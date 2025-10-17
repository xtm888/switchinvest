import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio | Premium Properties Across Belgium',
  description: 'Explore SwitchInvest\'s portfolio of premium properties across Belgium, featuring residential, commercial, and mixed-use developments managed with excellence.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'SwitchInvest Portfolio | Premium Properties in Belgium',
    description: 'Discover our exclusive collection of premium properties across Belgium, showcasing our expertise in property management and investment.',
    url: 'https://switchinvest.be/portfolio',
    images: ["/portfolio-og.jpg"],
  }
};
