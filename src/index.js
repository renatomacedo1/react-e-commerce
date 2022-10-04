import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_ACCESS_KEY;

ReactDOM.render(
  <Auth0Provider
    domain="dev-u5uhn850.us.auth0.com"
    clientId="qdIKRRBV0kkAVDBtBjEt2p6bsjg3B3q5"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <UserProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </UserProvider>
    </ProductsProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
