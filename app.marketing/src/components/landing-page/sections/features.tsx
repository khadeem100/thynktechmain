import analyticsImg from '@/assets/landing-page/analytics.png';
import dropDragImg from '@/assets/landing-page/realtime-blocks.png';
import { MarketingContainer } from '@/components/marketing-container';
import {
  CheckBadgeIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PaintBrushIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  CpuChipIcon,
  ServerIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@trylinky/ui';
import Image, { StaticImageData } from 'next/image';

interface FeatureItemProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  imageBgClass?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  imageSrc,
  title,
  description,
  imageBgClass,
}) => {
  return (
    <div className={cn('flex flex-col text-left')}>
      <div
        className={cn(
          'bg-[#F5F5F5] rounded-xl mb-6 w-full h-64 flex items-center justify-center relative overflow-hidden',
          imageBgClass
        )}
      >
        <Image
          src={imageSrc}
          alt=""
          width={852}
          height={590}
          className="object-center max-h-full w-auto"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

const icons = {
  globe: GlobeAltIcon,
  lock: LockClosedIcon,
  document: DocumentTextIcon,
  paint: PaintBrushIcon,
  check: CheckBadgeIcon,
  user: UserGroupIcon,
  shop: ShoppingCartIcon,
  ai: CpuChipIcon,
  server: ServerIcon,
  database: CircleStackIcon,
  phone: DevicePhoneMobileIcon,
  seo: ChartBarIcon,
};

const SmallFeatureItem: React.FC<{
  title: string;
  description: string;
  icon: keyof typeof icons;
  iconClassName?: string;
}> = ({ icon, title, description, iconClassName }) => {
  const Icon = icons[icon];
  return (
    <div className={cn('flex flex-col text-left')}>
      <Icon className={cn('size-10 mb-2', iconClassName)} />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <MarketingContainer>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl   font-bold tracking-tight text-gray-900">
            Of the shelf Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <FeatureItem
            imageSrc={analyticsImg}
            title="Softwares"
            description="from CRMs to analytics tools, we have you covered."
          />
          <FeatureItem
            imageSrc={dropDragImg}
            title="Applications"
            description="from websites to mobile apps, we have you covered."
          />
        </div>
      </MarketingContainer>
    </section>
  );
};

export const ExpandedFeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <MarketingContainer>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl   font-bold tracking-tight text-gray-900">
            And so much more
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <SmallFeatureItem
            icon="ai"
            iconClassName="text-blue-500"
            title="Artificial Intelligence"
            description="Do not get left behind, we help you integrate AI into your business."
          />
          <SmallFeatureItem
            icon="shop"
            iconClassName="text-green-500"
            title="Webshops"
            description="Want to sell products online? Thynk Tech has got you covered."
          />
          <SmallFeatureItem
            icon="server"
            iconClassName="text-yellow-500"
            title="Hosting"
            description="In need of a reliable hosting provider? We got you covered."
          />
          <SmallFeatureItem
            icon="database"
            iconClassName="text-purple-500"
            title="Enterprise Databases"
            description="Need to store and manage large amounts of data? We can help."
          />
          <SmallFeatureItem
            icon="phone"
            iconClassName="text-red-500"
            title="Custom mobile apps"
            description="Mobile apps to reach your customers on the go."
          />
          <SmallFeatureItem
            icon="seo"
            iconClassName="text-gray-500"
            title="SEO & Analytics"
            description="Get found online and track your performance."
          />
        </div>
      </MarketingContainer>
    </section>
  );
};
