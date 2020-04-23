import React from "react";
import If from "./if";

export default props => {
  return (
    <div>
      <h2>o numero e {props.numero}</h2>
      <If test={props.numero % 2 === 0}>
        <span>Par</span>
      </If>
      <If test={props.numero % 2 === 0}>
        <span>Impar</span>
      </If>
    </div>
  );
};
