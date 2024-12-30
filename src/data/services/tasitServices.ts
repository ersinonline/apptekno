import { Service } from '../../types';

export const tasitServices: Service[] = [
  {
    id: 'ispark',
    title: 'İSPARK Borcu Öde',
    description: 'İSPARK borcunuzu kolayca kapatın.',
    category: 'tasit',
    url: 'https://online.ispark.istanbul/',
    buttonText: 'Borç Öde'
  },
  {
    id: 'trafik-cezasi',
    title: 'Trafik Cezası Öde',
    description: 'Trafik cezanızı hızlıca ödeyin.',
    category: 'tasit',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/MTVTPCOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'hgs',
    title: 'HGS Bakiye Yükle',
    description: 'HGS bakiyenizi yükleyin.',
    category: 'tasit',
    url: 'https://hgs.pttavm.com/',
    buttonText: 'Bakiye Yükle'
  }
];