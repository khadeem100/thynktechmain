import iconGithub from '@/assets/landing-page/integration-icons/icon-github.png';
import iconInstagram from '@/assets/landing-page/integration-icons/icon-instagram.png';
import iconSnapchat from '@/assets/landing-page/integration-icons/icon-snapchat.png';
import iconSpotify from '@/assets/landing-page/integration-icons/icon-spotify.png';
import iconThreads from '@/assets/landing-page/integration-icons/icon-threads.png';
import iconTiktok from '@/assets/landing-page/integration-icons/icon-tiktok.png';
import iconTwitch from '@/assets/landing-page/integration-icons/icon-twitch.png';
import iconYoutube from '@/assets/landing-page/integration-icons/icon-youtube.png';
import { MarketingContainer } from '@/components/marketing-container';
import { cn } from '@trylinky/ui';
import Image from 'next/image';
import React from 'react';

// Placeholder Icon component - User should replace with actual Image components and paths
const PlaceholderIcon = ({
  bgColor = 'bg-gray-300',
  textColor = 'text-black',
  label,
  className,
  isSymbol = false,
}: {
  bgColor?: string;
  textColor?: string;
  label: string;
  className?: string;
  isSymbol?: boolean;
}) => (
  <span
    className={cn(
      'inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full mx-1 font-bold text-sm md:text-base align-middle shadow-sm',
      bgColor,
      textColor,
      isSymbol ? 'font-mono' : 'font-sans',
      className
    )}
    aria-hidden="true"
  >
    {label}
  </span>
);

const socialIcons = [
  {
    name: 'Instagram',
    icon: iconInstagram,
  },
  {
    name: 'Threads',
    icon: iconThreads,
  },
];

const musicIcons = [
  {
    name: 'Spotify',
    icon: iconSpotify,
  },
];

const videoIcons = [
  {
    name: 'Youtube',
    icon: iconYoutube,
  },
  {
    name: 'TikTok',
    icon: iconTiktok,
  },
];

const IconSet = ({ variant }: { variant: 'social' | 'video' | 'music' }) => {
  const iconVariants = {
    social: socialIcons,
    video: videoIcons,
    music: musicIcons,
  };

  const icons = iconVariants[variant];

  return (
    <div className="inline-flex flex-row-reverse items-center justify-center ml-2 top-1 relative">
      {icons.map((icon) => (
        <Image
          key={icon.name}
          src={icon.icon}
          alt={icon.name}
          width={42}
          height={42}
          className="-ml-2"
        />
      ))}
    </div>
  );
};

export function InlineShowcaseSection() {
  return (
    <section className="py-20 relative bg-white">
      <MarketingContainer className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight md:leading-snug">
            At Thynk we leverage {' '}
            <span className="font-black">The sleekest </span>
            <IconSet variant="social" />, The{' '}
            <span className="font-black"> Newest</span>
            <IconSet variant="video" /> And only the fastest{' '}
            <span className="font-black">Frameworks</span>{' '}
            <IconSet variant="music" /> On the market!{' '}
          </h2>
        </div>
      </MarketingContainer>
    </section>
  );
}
