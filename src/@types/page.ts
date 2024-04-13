import {PageStatus} from '../@constant/page';
import {GenericResponseKey} from './generic';
import {Variant} from './variant';

export interface Page extends GenericResponseKey {
  client: string;
  site: string;
  title: string;
  description: string;
  isDefault: number;
  seourl: string;
  settings: unknown[];
  status: PageStatus | string;
  isPublic: string;
  sortorder: string;
  tags: string[];
  views: number;
  conversion: number;
  color: string[];
  variants?: Variant[];
}
