import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import French from "./Lang/fr.json";
import Arabic from "./Lang/sp.json";
import English from "./Lang/en.json";

// const locale = navigator.language;

const locale = "en";
let lang;
if (locale === "en") {
  lang = English;
} else {
  if (locale === "fr") {
    lang = French;
  } else {
    lang = Arabic;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={lang}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
