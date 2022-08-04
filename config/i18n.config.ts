import type {I18nConfig} from '@docusaurus/types';

const i18n: I18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'zh-Hans'],
  localeConfigs: {
    en: {
      label: 'English',
    },
    'zh-Hans': {
      label: '中文',
    },
  },
  path: '',
};

export = i18n;
