import { Service } from '../../types';

export const borcServices: Service[] = [
  {
    id: 'mtv-odeme',
    title: 'MTV Ödeme',
    description: 'MTV ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/MTVTPCOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'tapu-harci',
    title: 'Tapu Harcı Ödeme',
    description: 'Tapu harcı ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/tapuHarciOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'cep-telefonu',
    title: 'Cep Telefonu Harcı',
    description: 'Cep telefonu harç ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/cepTelefonuHarciOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'pasaport-harci',
    title: 'Pasaport Harcı',
    description: 'Pasaport harcı ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/pasaportHarciOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'surucu-harci',
    title: 'Sürücü Belgesi Harcı',
    description: 'Sürücü belgesi harç ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/surucuBelgesiHarciOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'cikis-harci',
    title: 'Yurtdışı Çıkış Harcı',
    description: 'Yurtdışı çıkış harcı ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/yurtDisinaCikisHarciOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'pasaport-degerli',
    title: 'Pasaport Kağıt Bedeli',
    description: 'Pasaport kağıt bedeli ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/pasaportDegerliKagitBedeliOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'surucu-degerli',
    title: 'Sürücü Kağıt Bedeli',
    description: 'Sürücü belgesi kağıt bedeli ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/surucuBelgesiDegerliKagitBedeliOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'tc-kimlik',
    title: 'TC Kimlik Bedeli',
    description: 'TC kimlik kartı bedeli ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/tcKimlikKartiBedeliOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'ikamet-harci',
    title: 'İkamet Harcı',
    description: 'İkamet harcı ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/gocIdaresiIkametTezkeresiHarciOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'yapilandirma',
    title: 'Yapılandırma Öde',
    description: 'Ödeme planı numarası ile ödeme',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/odemePlanNumarasiYapilandirmaOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'belge-numarasi',
    title: 'Belge Numarası Öde',
    description: 'Belge numarası ile ödeme',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/belgeNumarasiIleOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'mavi-kart',
    title: 'Mavi Kart Bedeli',
    description: 'Mavi kart kağıt bedeli ödeme',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/maviKartDegerliKagitBedeliOdeme',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'yabanci-arac',
    title: 'Yabancı Araç Öde',
    description: 'Yabancı araç ödemeleri',
    category: 'borc',
    url: 'https://dijital.gib.gov.tr/hizliOdemeler/yabanciAracOdemeleri',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'kyk',
    title: 'KYK Borcu Öde',
    description: 'KYK borcunu ödeme',
    category: 'borc',
    url: 'https://kyk.ziraatbank.com.tr',
    buttonText: 'Ödeme Yap'
  },
  {
    id: 'vergi-borc',
    title: 'Vergi Borcu Öde',
    description: 'Vergi borcunu ödeme',
    category: 'borc',
    url: 'https://www.turkiye.gov.tr/gib-vergi-borcu-sorgu',
    buttonText: 'Ödeme Yap'
  }
];