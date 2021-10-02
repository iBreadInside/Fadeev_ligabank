export const AppRoute = {
  MAIN: '/',
  SERVICES: '/services',
  CREDIT_CALCULATOR: '/credit_calculator',
  CONVERTER: '/',
  CONTACTS: '/contacts',
  QNA: '/qna',
  LOGIN: '/login'
};

export const NavLinks = [
  {
    text: 'Услуги',
    route: AppRoute.SERVICES,
  },
  {
    text: 'Рассчитать кредит',
    route: AppRoute.CREDIT_CALCULATOR,
  },
  {
    text: 'Конвертер валют',
    route: AppRoute.CONVERTER,
  },
  {
    text: 'Контакты',
    route: AppRoute.CONTACTS,
  },
  {
    text: 'Задать вопрос',
    route: AppRoute.QNA,
  },
];

export const Social = {
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
  TWITTER: 'twitter',
  YOUTUBE: 'youtube',
};

export const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  CNY: 'CNY',
};
