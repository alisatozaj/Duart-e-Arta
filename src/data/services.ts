import type { IconName } from './icons';

export interface Service {
  icon: IconName;
  title: string;
  text: string; // short, used on the home page
  detail: string; // longer, used on the services page
}

// TODO: check that the descriptions match what the center really offers.
export const serviceGroups: {
  title: string;
  intro: string;
  alt: string;
  image: string;
  services: Service[];
}[] = [
  {
    title: 'Komoditet dhe kujdes',
    intro: 'Bazat e një dite të mirë: një vend ku pushon, ushqim i mirë dhe ndihmë kur nevojitet.',
    alt: 'Banorë gjatë ditës në Duart e Arta',
    image: '/img6.jpg', // TODO: '/sherbimet-banim.jpg'
    services: [
      {
        icon: 'bed',
        title: 'Banim dhe fjetje',
        text: 'Dhoma të rehatshme, të qeta dhe të mbushura me dritë.',
        detail: 'Dhoma të rehatshme dhe të qeta, të mbushura me dritë, ku banori mund të pushojë dhe të ndihet si në shtëpinë e tij.',
      },
      {
        icon: 'utensils',
        title: 'Ushqim i shëndetshëm',
        text: 'Menu të freskëta e të balancuara, përgatitur çdo ditë.',
        detail: 'Menu të freskëta dhe të balancuara, të përgatitura çdo ditë, që mbështesin shëndetin dhe oreksin e banorëve.',
      },
      {
        icon: 'user',
        title: 'Kujdes personal',
        text: 'Ndihmë e kujdesshme për rutinën dhe nevojat e përditshme.',
        detail: 'Ndihmë e kujdesshme me rutinën e përditshme, si higjiena, veshja dhe lëvizja, duke ruajtur dinjitetin e çdo banori.',
      },
    ],
  },
  {
    title: 'Kujdes shëndetësor',
    intro: 'Mbështetja shëndetësore që banorët kanë nevojë, e dhënë me durim dhe vëmendje.',
    alt: 'Kujdestare me një banor',
    image: '/img4.jpg', // TODO: '/sherbimet-kujdes.jpg'
    services: [
      {
        icon: 'stethoscope',
        title: 'Kujdes mjekësor',
        text: 'Monitorim i vazhdueshëm shëndetësor nga profesionistë.',
        detail: 'Monitorim i vazhdueshëm i gjendjes shëndetësore nga profesionistë, me vëmendje ndaj çdo ndryshimi.',
      },
      {
        icon: 'activity',
        title: 'Terapi dhe fizioterapi',
        text: 'Lëvizje dhe terapi të përshtatura për çdo banor.',
        detail: 'Ushtrime dhe terapi të përshtatura për çdo banor, për të ruajtur lëvizshmërinë dhe pavarësinë sa më gjatë.',
      },
      {
        icon: 'heart',
        title: 'Kujdes për demencën',
        text: 'Kujdes i specializuar në një mjedis të qetë e të sigurt.',
        detail: 'Kujdes i specializuar në një mjedis të qetë dhe të sigurt, me rutinë të qartë dhe shumë durim.',
      },
    ],
  },
  {
    title: 'Mirëqenia dhe shoqëria',
    intro: 'Shëndeti nuk është vetëm fizik. Kujdesemi edhe për gjendjen shpirtërore dhe kohën e lirë të banorëve.',
    alt: 'Banorë gjatë një aktiviteti',
    image: '/img.jpg', // TODO: '/sherbimet-mireqenia.jpg'
    services: [
      {
        icon: 'message-circle',
        title: 'Mbështetje psikologjike',
        text: 'Biseda, mirëkuptim dhe mbështetje emocionale.',
        detail: 'Biseda, mirëkuptim dhe mbështetje emocionale për banorët që e kanë më të vështirë t’i përshtaten ndryshimit.',
      },
      {
        icon: 'music',
        title: 'Aktivitete dhe argëtim',
        text: 'Ditë aktive me muzikë, lojëra, art dhe shoqëri.',
        detail: 'Muzikë, lojëra, art dhe kohë së bashku, që i mbajnë banorët aktivë dhe në shoqëri.',
      },
    ],
  },
];

export const services: Service[] = serviceGroups.flatMap((group) => group.services);