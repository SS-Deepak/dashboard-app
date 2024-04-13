import {Site} from '../../../@types/site';
import {DateFormatter} from '../../../utils/date-formatter';

const SiteListFormatter = (list: Site[]) => {
  const generateThumbnail = (title: string) => {
    const titleChar = title
      ?.split(' ')
      ?.map((i: string) => i?.[0]?.toUpperCase() ?? '');

    const length = (titleChar?.length ?? 1) - 1;

    const firstChar = titleChar?.[0] ?? '';
    const secondChar = length ? titleChar?.[length] : title?.[length + 1];

    return firstChar + secondChar;
  };

  return list.map(site => ({
    thumbnail: generateThumbnail(site.title),
    title: site.title,
    domain: site.domainname,
    updatedAt: DateFormatter(site.updatedAt),
    type: site.type,
    pagesCount: site.page?.length ?? 0,
  }));
};

export default SiteListFormatter;
