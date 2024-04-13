import {GenericResponseKey} from './generic';
import {SiteStyle} from './site';

export interface Variant extends GenericResponseKey {
  client: string;
  content: string;
  isPublic: boolean;
  md5_content: string;
  page: string;
  screenshot: string;
  sortorder: string;
  traffic_percentage: number;
  views: number;
  conversion: number;
  setting?: string;
  styles?: SiteStyle[];
}
