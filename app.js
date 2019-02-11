doge.updatePosition = () => {
  // Velar porque doge no haga colisionado con cates

}

doge.gameOver = (cateMessage) => {
  // Para cuando perdemos
  alert("He muerto, no me olvides...");
  alert("Cate ha dicho : "+cateMessage);
}

cate1.cateUpdatePosition = (gameOver) => {
  const cateTop = parseInt(cate1.style.top);
  const cateLeft = parseInt(cate1.style.left);
  const dogeTop = parseInt(doge.style.top);
  const dogeLeft = parseInt(doge.style.left);

  if(cateTop + 100 > dogeTop && cateTop < dogeTop + 100 &&
    cateLeft + 100 > dogeLeft && cateLeft < dogeLeft + 100){
      gameOver("Muajajajajaja");
    }
  
  if(Math.random() >= 0.5){
    const sign = (cateTop - dogeTop)/Math.abs(cateTop - dogeTop);
    cate1.style.top = parseInt(cate1.style.top) - 20*sign;
  }else{
    const sign = (cateLeft - dogeLeft)/Math.abs(cateLeft - dogeLeft);
    cate1.style.left = parseInt(cate1.style.left) - 20*sign;
  }
}

cate2.cateUpdatePosition = (gameOver) => {
  const cateTop = parseInt(cate2.style.top);
  const cateLeft = parseInt(cate2.style.left);
  const dogeTop = parseInt(doge.style.top);
  const dogeLeft = parseInt(doge.style.left);

  if(cateTop + 100 > dogeTop && cateTop < dogeTop + 100 &&
    cateLeft + 100 > dogeLeft && cateLeft < dogeLeft + 100){
      gameOver("Ups, perdón doge, pero te maté");
    }

    const signTop = (cateTop - dogeTop)/Math.abs(cateTop - dogeTop);
    cate2.style.top = parseInt(cate2.style.top) - 10*signTop;
    const signLeft = (cateLeft - dogeLeft)/Math.abs(cateLeft - dogeLeft);
    cate2.style.left = parseInt(cate2.style.left) - 10*signLeft;
}

document.onkeydown = (event) => {
  switch(event.keyCode){
    case 38: doge.style.top = -25 + parseInt(doge.style.top);break;//UP
    case 37: doge.style.left = -25 + parseInt(doge.style.left);break;//LEFT
    case 39: doge.style.left = 25 + parseInt(doge.style.left);break;//RIGHT
    case 40: doge.style.top = 25 + parseInt(doge.style.top);break;//DOWN
  }

  cate1.cateUpdatePosition(doge.gameOver);
  cate2.cateUpdatePosition(doge.gameOver);
}