import type { EventItem } from '../types/event';

export const mockEvents: EventItem[] = [
  {
    id: 'sp-1255367',
    title: 'Baile da Loba - Homenagem a Alcione',
    location: 'Teste Osasco',
    url: '#/event/sp-1255367',
    imageUrl: 'https://www.testesp.org.br/wp-content/uploads/2026/08/800_400_Baile-da-Loba.png',
    date: '23 de set.',
    time: '14h00',
    priceLabel: 'Grátis',
    isFree: true,
    category: {
      label: 'Música',
      bgColor: 'var(--color-prog-cultura)',
      textColor: 'var(--color-prog-cultura-texto)',
    },
  },
  {
    id: 'sp-1237869',
    title: 'Vem Dançar: Ritmos Latinos',
    location: 'Teste Consolação',
    url: '#/event/sp-1237869',
    imageUrl: 'https://www.testesp.org.br/wp-content/uploads/2026/07/Vem-Dancar-Ritmos-Latinos-1.jpg',
    date: '23 de set.',
    time: '15h00',
    priceLabel: 'Grátis',
    isFree: true,
    category: {
      label: 'Ações para a Cidadania',
      bgColor: 'var(--color-prog-assistencia)',
      textColor: 'var(--color-prog-assistencia-texto)',
    },
  },
  {
    id: 'sp-1260381',
    title: 'Fortalecimento e mobilidade pélvica para 60+',
    location: 'Teste Ipiranga',
    url: '#/event/sp-1260381',
    imageUrl: 'https://www.testesp.org.br/wp-content/uploads/2026/09/imagem-3.png',
    date: '23 de set.',
    time: '13h30',
    priceLabel: 'Grátis',
    isFree: true,
    category: {
      label: 'Cursos e Oficinas',
      bgColor: 'var(--color-prog-educacao)',
      textColor: 'var(--color-prog-educacao-texto)',
    },
  },
];