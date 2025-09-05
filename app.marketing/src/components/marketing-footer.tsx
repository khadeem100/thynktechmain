import { MarketingContainer } from '@/components/marketing-container';
import Link from 'next/link';

const BrandLogo = () => {
  return (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 240.75 240.75" height="25" version="1.0"><defs><clipPath id="b"><path d="M44.055 65.465h176.777v134.289H44.055Zm0 0"/></clipPath><clipPath id="c"><path d="M92.266 65.465h125.297a3.24 3.24 0 0 1 3.074 4.265l-41.922 125.758a6.23 6.23 0 0 1-5.914 4.266H47.504c-1.043 0-2.02-.5-2.629-1.348a3.23 3.23 0 0 1-.445-2.918L86.348 69.73a6.24 6.24 0 0 1 5.918-4.265m0 0"/></clipPath><clipPath id="e"><path d="M.055.465h176.777v134.289H.055Zm0 0"/></clipPath><clipPath id="f"><path d="M48.266.465h125.297a3.24 3.24 0 0 1 3.074 4.265l-41.922 125.758a6.23 6.23 0 0 1-5.914 4.266H3.504c-1.043 0-2.02-.5-2.629-1.348a3.23 3.23 0 0 1-.445-2.918L42.348 4.73A6.24 6.24 0 0 1 48.266.465m0 0"/></clipPath><clipPath id="d"><path d="M0 0h177v135H0z"/></clipPath><clipPath id="i"><path d="M1.492.746H178.27v134.29H1.492Zm0 0"/></clipPath><clipPath id="j"><path d="M49.7.746h125.296c1.043 0 2.02.5 2.629 1.348.61.844.777 1.93.445 2.918L136.152 130.77a6.24 6.24 0 0 1-5.918 4.265H4.937a3.24 3.24 0 0 1-3.074-4.265L43.785 5.012A6.23 6.23 0 0 1 49.7.746m0 0"/></clipPath><clipPath id="l"><path d="M.492.746H177.27v134.29H.492Zm0 0"/></clipPath><clipPath id="m"><path d="M48.7.746h125.296c1.043 0 2.02.5 2.629 1.348.61.844.777 1.93.445 2.918L135.152 130.77a6.24 6.24 0 0 1-5.918 4.265H3.937a3.24 3.24 0 0 1-3.074-4.265L42.785 5.012A6.23 6.23 0 0 1 48.7.746m0 0"/></clipPath><clipPath id="k"><path d="M0 0h178v136H0z"/></clipPath><clipPath id="h"><path d="M0 0h181v136H0z"/></clipPath><filter x="0%" y="0%" width="100%" height="100%" id="a"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/></filter><mask id="g"><g filter="url(#a)"><path fill-opacity=".8" d="M-24.075-24.075h288.9v288.9h-288.9z"/></g></mask></defs><g clip-path="url(#b)"><g clip-path="url(#c)"><g clip-path="url(#d)" transform="translate(44 65)"><g clip-path="url(#e)"><g clip-path="url(#f)"><path fill="#0558ee" d="M-.992.465h178.875v134.289H-.992Zm0 0"/></g></g></g></g></g><g mask="url(#g)"><g clip-path="url(#h)" transform="translate(18 40)"><g clip-path="url(#i)"><g clip-path="url(#j)"><g clip-path="url(#k)" transform="translate(1)"><g clip-path="url(#l)"><g clip-path="url(#m)"><path fill="#21e8e6" d="M-.559.746h178.875v134.29H-.559Zm0 0"/></g></g></g></g></g></g></g></svg>

  );
};

const XTwitterLogo = () => {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      className="p-px h-4 w-4 text-white/80 transition-colors group-hover:text-white"
    >
      <path
        fill="currentColor"
        d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
      />
    </svg>
  );
};

const GithubLogo = () => {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="h-4 w-4 text-white/80 transition-colors group-hover:text-white"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    </svg>
  );
};

const InstagramLogo = () => {
  return (
    <svg
      fill="currentColor"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      className="h-4 w-4 text-white/80 transition-colors group-hover:text-white"
    >
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const socialLinks = [
  {
    label: 'X / Twitter',
    href: 'https://x.com/trylinky',
    icon: XTwitterLogo,
  },
  {
    label: 'Github',
    href: 'https://github.com/trylinky/linky',
    icon: GithubLogo,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/trylinky',
    icon: InstagramLogo,
  },
];

export default function MarketingFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-[#19191a] via-[#181817] to-[#131313] pt-0 text-white overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-72 w-96 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fff2] via-[#fff1] to-transparent blur-2xl opacity-40" />

      <div className="relative z-10 flex flex-col items-center justify-center py-16 space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <span className="scale-150 drop-shadow-lg">
            <BrandLogo />
          </span>
          <span className="font-extrabold text-3xl tracking-tight text-white drop-shadow">
            Thynk Tech
          </span>
        </div>
        <p className="max-w-xl text-center text-lg text-white/80 font-medium">
          The ultimate link-in-bio platform for creators. <br />
          <span className="text-white/60">
            Delightfully simple, delightfully fast.
          </span>
        </p>
        <Link
          href="/i/auth/signup"
          className="mt-2 rounded-full bg-gradient-to-r from-[#fff] to-[#eaeaea] px-8 py-3 text-base font-bold text-gray-900 shadow-lg transition-all hover:scale-105 hover:from-[#f3f3f3] hover:to-[#fff] focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Get Started Free
        </Link>
      </div>
      <div className="relative z-10 border-t border-white/10 bg-transparent">
        <MarketingContainer>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-10 gap-10 lg:gap-0">
            <nav className="flex-1 flex flex-col items-center lg:items-start gap-6 lg:gap-2">
              <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 text-base font-medium">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-white/90"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/i/pricing"
                    className="transition-colors hover:text-white/90"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/i/auth/signup"
                    className="transition-colors hover:text-white/90"
                  >
                    Get started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/i/learn/what-is-a-link-in-bio"
                    className="transition-colors hover:text-white/90"
                  >
                    What is a link in bio?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/i/learn/what-is-linky"
                    className="transition-colors hover:text-white/90"
                  >
                    What is Linky?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/i/blog"
                    className="transition-colors hover:text-white/90"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/i/terms"
                    className="transition-colors hover:text-white/90"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/i/privacy"
                    className="transition-colors hover:text-white/90"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Social icons */}
            <div className="flex flex-col items-center gap-4 mt-8 lg:mt-0">
              <div className="flex items-center gap-4 rounded-full bg-white/10 px-6 py-2 shadow-inner backdrop-blur-md">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-full p-2 transition-all hover:bg-white/20 hover:scale-110"
                  >
                    <span className="sr-only">{link.label}</span>
                    {link.icon()}
                  </Link>
                ))}
              </div>
              <span className="text-xs text-white/40 mt-2">
                © 2023 - {new Date().getFullYear()} Linky – Hyperdusk Ltd
              </span>
            </div>
          </div>
        </MarketingContainer>
      </div>
    </footer>
  );
}
