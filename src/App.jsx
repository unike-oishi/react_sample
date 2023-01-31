import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("最初");
  //ステート：変数と関数
  const [num, setNum] = useState(0);
  const [showFlg, setShowFlg] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFlg = () => {
    setShowFlg(!showFlg);
  };

  //関心の分離
  //第二引数の配列が空だと最初の一回だけ通る⇒無駄がなくなる
  //numを入れるとnumが変化したときだけ通る
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFlg || setShowFlg(true);
      } else {
        showFlg && setShowFlg(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>カウンター</h1>
      <ColorfulMessage color="blue">ゼロから始まる</ColorfulMessage>
      <ColorfulMessage color="pink">ボタン押下してください</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントUP</button>
      <p>{num}</p>
      <button onClick={onClickShowFlg}>on/off</button>
      {showFlg && <p>（＾＾）</p>}
    </>
  );
};

export default App;
