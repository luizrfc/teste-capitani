import {useTranslation} from 'react-i18next';
import {getStorage, saveStorage} from '@src/utils/storage';

interface LanguageProps {
  language: string;
  handleChangeLanguage: (language: string) => void;
  getLanguage: () => void;
}

function useLanguage(): LanguageProps {
  const {i18n} = useTranslation();

  const handleChangeLanguage = async (language: string) => {
    await saveStorage('language', language);
    i18n.changeLanguage(language);
  };

  const getLanguage = async () => {
    const language = await getStorage('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  };

  return {
    language: i18n.language,
    handleChangeLanguage,
    getLanguage,
  };
}

export default useLanguage;
