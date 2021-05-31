import React, { useState, useEffect } from "react"

import Button from "../ButtonOffer"

import "./index.css"

export default (props) => {
  const [auction, setAuction] = useState([]);
  const [amount, setAmount] = useState([]);

  const timeRes = props.timeRes;
  const valueOffer = props.valueOffer;
  const modelCar = props.modelCard;
  const anoCar = props.anoCard;
  const kmCar = props.kmCar;

  const uriImg = props.imgUri;

  return (
    <div className="CardAuction">
      <img src={uriImg} className="ImgCar" />
      <div className="footerCard">
        <div className="Padding">
          <div className="ContenteCard">
            <div className="ContentValues">
              <p className="Title">tempo Restante</p>
              <h2 className="Time" id="sessao">
                {timeRes}
              </h2>
            </div>

            <div className="ContentValueAmount">
              <p className="Title">ultima oferta</p>
              <h2 className="Value">R$ {valueOffer}</h2>
            </div>
          </div>

          <div className="CarModel">
            <h2 className="NameCar">{modelCar}</h2>
          </div>
          <div className="InfoCar">
            <div className="AnoCar">
              <p className="TitleInfoCar">{anoCar}</p>
            </div>
            <div className="KmCar">
              <p className="TitleInfoCar">{kmCar} KM</p>
            </div>
          </div>
        </div>

        <div className="FooterButton">
          <Button
            onClick={props.onClick}
          />
        </div>
      </div>
    </div>
  );
};
