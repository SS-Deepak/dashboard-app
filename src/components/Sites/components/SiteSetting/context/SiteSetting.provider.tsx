import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {SiteSettingContext} from './SiteSetting.context';
import {SiteSettingTabs} from '../../../../../@constant/site';

const SiteSettingProvider: FC<PropsWithChildren> = ({children}) => {
  const [activeTab, setActiveTab] = useState<SiteSettingTabs>(
    SiteSettingTabs.GENERAL,
  );

  const value = useMemo(() => {
    return {
      activeTab,
      setActiveTab,
    };
  }, [activeTab]);

  return (
    <SiteSettingContext.Provider value={value}>
      {children}
    </SiteSettingContext.Provider>
  );
};

export default SiteSettingProvider;
