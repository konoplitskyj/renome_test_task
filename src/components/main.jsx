import React from "react";
import { US, EU, CH } from "country-flag-icons/react/3x2";

function CurrencyValues({ data, isLoading }) {
  const coef = 0.3;

  return (
    <div>
      <p className="currency-value">
        <strong>{isLoading ? "..." : (data[1].rate + coef).toFixed(2)}</strong>
        <span>
          <US />
          <strong>USD</strong> / UAH
        </span>
        <strong>{isLoading ? "..." : (data[1].rate - coef).toFixed(2)}</strong>
      </p>
      <p className="currency-value">
        <strong>{isLoading ? "..." : (data[2].rate + coef).toFixed(2)}</strong>
        <span>
          <EU />
          <strong>EUR</strong> / UAH
        </span>
        <strong>{isLoading ? "..." : (data[2].rate - coef).toFixed(2)}</strong>
      </p>
      <p className="currency-value">
        <strong>{isLoading ? "..." : (data[0].rate + 0.3).toFixed(2)}</strong>
        <span>
          <CH />
          <strong>CHF</strong> / UAH
        </span>
        <strong>{isLoading ? "..." : (data[0].rate - 0.3).toFixed(2)}</strong>
      </p>
    </div>
  );
}

const Main = ({ t, data, isLoading }) => {
  return (
    <div className="main">
      <h1>{t("select_an_operation")}</h1>
      <div className="block-of-operations">
        <div className="left-block">
          <div>
            <p className="title">{t("withdraw_funds")}</p>
            <p className="subtitle">{t("up_to") + " 50 000 UAH"}</p>
          </div>
          <div className="grid-container">
            <button className="button">100 UAH</button>
            <button className="button">200 UAH</button>
            <button className="button">500 UAH</button>
            <button className="button">1000 UAH</button>
            <button className="button">{t("other_amount")}</button>
          </div>
        </div>
        <div className="middle-block">
          <div className="deposit-funds">
            <div>
              <p className="title">{t("deposit_funds")}</p>
              <p className="subtitle">{t("up_to") + " 150 000 UAH"}</p>
            </div>
            <div className="button-group">
              <button className="button">{t("to_the_card")}</button>
              <button className="button">{t("account")}</button>
            </div>
          </div>
          <div className="all-operations">
            <div>
              <p className="title">{t("all_operations")}</p>
              <p className="subtitle">{t("loan_repayment")}</p>
            </div>
            <button className="button">{t("open_list_services")}</button>
          </div>
        </div>
        <div className="right-block">
          <div>
            <p className="title">{t("currency_exchange")}</p>
            <p className="subtitle">usd, eur, chf</p>
          </div>
          <CurrencyValues data={data} isLoading={isLoading} />
          <div className="button-group">
            <button className="button">{t("buy")}</button>
            <button className="button">{t("sell")}</button>
          </div>
        </div>
      </div>
      <div className="info">
        <span>{t("bank_info")}</span>
      </div>
    </div>
  );
};

export default Main;
