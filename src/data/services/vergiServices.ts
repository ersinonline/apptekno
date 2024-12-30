import { Service } from '../../types';

export const vergiServices: Service[] = [
  {
    id: 'arac-vergisi',
    title: 'Araç Vergisi Öde',
    description: 'Araç verginizi hızlıca ödeyin.',
    category: 'vergi',
    url: 'https://ersinonline.net/yonlendirme.html?target=https://dijital.gib.gov.tr/hizliOdemeler/MTVTPCOdeme',
    buttonText: 'Ödeme Yap',
  },
  {
    id: 'konut-vergisi',
    title: 'Konut Vergisi Öde',
    description: 'Konut verginizi kolayca halledin.',
    category: 'vergi',
    url: 'https://ersinonline.net/yonlendirme.html?target=https://ybs.kucukcekmece.bel.tr/ebelediye',
    buttonText: 'Ödeme Yap',
  },
  {
    id: 'kira-vergisi',
    title: 'Kira Vergisi Öde',
    description: 'Kira vergisini hızlıca ödeyin.',
    category: 'vergi',
    url: 'https://ersinonline.net/yonlendirme.html?target=https://intvrg.gib.gov.tr/index_gmsi.jsp',
    buttonText: 'Ödeme Yap',
  },
];
