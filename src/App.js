import { useState, useEffect } from "react";
import "./app.scss";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationUA from "./locales/ua/translation.json";
import Header from "./components/header";
import Main from "./components/main";
import { useTranslation } from "react-i18next";

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ua",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();
  const phone = "800 002 03 14";
  const [currencyValues, setCurrencyValues] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) =>
          ["USD", "EUR", "CHF"].includes(item.cc)
        );

        setCurrencyValues(filteredData);
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при зчитування курсу валют");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header phone={phone} />
      <Main t={t} data={currencyValues} isLoading={isLoading} />
    </div>
  );
}

export default App;
