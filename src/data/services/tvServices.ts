import { Service } from '../../types';

export const tvServices: Service[] = [
  {
    id: 'tvplus',
    title: 'TV+',
    description: 'TV+ başvurusu yapabilirsiniz.',
    category: 'tv',
    url: 'https://basvuru.teknokapsul.com/apply/turkcell',
    buttonText: 'Başvuru Yap'
  },
  {
    id: 'kablotv',
    title: 'KabloTV',
    description: 'KabloTV başvurusu yapabilirsiniz.',
    category: 'tv',
    url: 'https://basvuru.teknokapsul.com/apply/dsmart',
    buttonText: 'Başvuru Yap'
  },
  {
    id: 'digiturk',
    title: 'Digitürk',
    description: 'Digitürk başvurusu yapabilirsiniz.',
    category: 'tv',
    url: 'https://basvuru.teknokapsul.com/apply/digiturk',
    buttonText: 'Başvuru Yap'
  },
  {
    id: 'dsmarttv',
    title: 'D-Smart',
    description: 'D-Smart başvurusu yapabilirsiniz.',
    category: 'tv',
    url: 'https://basvuru.teknokapsul.com/apply/kablotv',
    buttonText: 'Başvuru Yap'
  },
];