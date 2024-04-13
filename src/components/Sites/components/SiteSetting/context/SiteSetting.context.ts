import {Dispatch, SetStateAction, createContext} from 'react';
import {SiteSettingTabs} from '../../../../../@constant/site';

export const SiteSettingContext = createContext<{
  activeTab: SiteSettingTabs;
  setActiveTab: Dispatch<SetStateAction<SiteSettingTabs>>;
}>({
  activeTab: SiteSettingTabs.GENERAL,
  setActiveTab: () => {},
});
