import React from "react";
import Primeiro from "./components/primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalcomIf";
import "./App.css";

export default props => (
  <div className="App">
    <Card titulo="Primeiro Componente">
      <Primeiro></Primeiro>
    </Card>
    <Card titulo="#05- condicional v1">
      <Condicional numero={10}></Condicional>
    </Card>
    <Card titulo="#05- condicional v2">
      <CondicionalComIf numero={11}></CondicionalComIf>
    </Card>
    <Card titulo="#04-Repeticao">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="Primeiro Componente">
      <ComParametro titulo="Esse e o titulo" subtitulo="Esse e o subtitulo" />
    </Card>

    <Card titulo="Componente Com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
        </ul>
      </ComFilhos>
    </Card>
  </div>
);
