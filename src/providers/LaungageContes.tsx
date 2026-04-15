import { createContext, useState ,use, type PropsWithChildren } from "react";

 const LanguageContext = createContext<{
    language: string;
    changeLanguage: (lang: string) => void;
}>({
    language:'en',
    changeLanguage: () => null
})

export const LanguageProvider = ({children}: PropsWithChildren) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (lang: string) => setLanguage(lang);
    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>

    )
}

export const useLanguage = () => use(LanguageContext);