import SiteSettingGeneral from './pages/General';
import SiteSettingPublishing from './pages/Publishing';
import SiteSettingSEO from './pages/SEO';
import SiteSettingFonts from './pages/Fonts';
import SiteSettingIntegration from './pages/Integration';
import SiteSettingCustomCode from './pages/CustomCode';
import SiteSettingMember from './pages/Members';
import SiteSettingScreenshot from './pages/Screenshots';
import SiteSettingBusinessDetails from './pages/BusinessDetail';
import SiteSettingSocialLink from './pages/SocialLinks';

export const SiteSettingTabs = [
  {
    label: 'General',
    icon: 'information',
    component: SiteSettingGeneral,
  },
  {
    label: 'Publishing',
    icon: 'globe-outline',
    component: SiteSettingPublishing,
  },
  {
    label: 'SEO',
    icon: 'cog-outline',
    component: SiteSettingSEO,
  },
  {
    label: 'Fonts',
    icon: 'text',
    component: SiteSettingFonts,
  },
  {
    label: 'Integrations',
    icon: 'share-social',
    component: SiteSettingIntegration,
  },
  {
    label: 'Custom code',
    icon: 'code-working',
    component: SiteSettingCustomCode,
  },
  {
    label: 'Members',
    icon: 'people-outline',
    component: SiteSettingMember,
  },
  {
    label: 'Pages screenshot',
    icon: 'camera-outline',
    component: SiteSettingScreenshot,
  },
  {
    label: 'Business details',
    icon: 'business-outline',
    component: SiteSettingBusinessDetails,
  },
  {
    label: 'Social links',
    icon: 'link-outline',
    component: SiteSettingSocialLink,
  },
];
