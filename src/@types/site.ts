import {SiteCategory, SiteType} from '../@constant/site';
import {GenericResponseKey, User} from './generic';
import {Page} from './page';

interface ColorVariable {
  key: string;
  value: string;
  _id: string;
}

export interface SiteStyle {
  data: {
    children: [];
    name: string;
    selector: string;
    styles: string;
    type: string;
  };
}

export interface Site extends GenericResponseKey {
  client: User | string;
  themeId: string;
  title: string;
  domainname: string;
  views: number;
  conversion: number;
  type: SiteType | string;
  custom_component: unknown[];
  md5_css?: string;
  status?: string;
  color_variables?: ColorVariable[];
  site_type?: SiteCategory | string;
  color?: string[];
  page?: Page[];
  settings?: unknown;
  styles?: SiteStyle[];
  updates_count?: number;
}
