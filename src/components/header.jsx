import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
  
    const handleLanguageChange = (e) => {
      i18n.changeLanguage(e);
    };
  
    return (
      <p className="language-switcher">
        <span
          className={i18n.language === "ua" ? "bold" : ""}
          onClick={() => handleLanguageChange("ua")}
        >
          UA
        </span>{" "}
        |{" "}
        <span
          className={i18n.language === "en" ? "bold" : ""}
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </span>
      </p>
    );
  };

const Header = ({ phone }) => {
  return (
    <header>
      <p className="title">
        Best<sup>Bank</sup>
      </p>
      <div className="phone-container">
        <LuPhoneCall className="icon" />
        <p className="phone-number">{phone}</p>
      </div>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
