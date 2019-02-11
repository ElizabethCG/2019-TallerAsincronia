doge.lifes = 300;
doge.turns = 0;

doge.updateLifes = (lifeLost) => {
  // Velar porque doge tenga vidas
  doge.lifes = doge.lifes - lifeLost;
  if(doge.lifes <= 0){
    doge.gameOver();
  }

  lifes.innerHTML = doge.lifes;
}

doge.updateTurns = () => {
  doge.turns = doge.turns+1;
  turns.innerHTML = doge.turns;
}

doge.gameOver = (cateMessage) => {
  // Para cuando perdemos
  alert("He muerto, no me olvides...");
  alert("Cate ha dicho : "+cateMessage);
}

cate1.cateUpdatePosition = () => {
  return new Promise((resolve, reject) => {
    const cateTop = parseInt(cate1.style.top);
    const cateLeft = parseInt(cate1.style.left);
    const dogeTop = parseInt(doge.style.top);
    const dogeLeft = parseInt(doge.style.left);

    if(cateTop + 100 > dogeTop && cateTop < dogeTop + 100 &&
      cateLeft + 100 > dogeLeft && cateLeft < dogeLeft + 100){
        resolve(1);
      }else{
        resolve(0);
      }
    
    if(Math.random() >= 0.5){
      const sign = (cateTop - dogeTop)/Math.abs(cateTop - dogeTop);
      cate1.style.top = parseInt(cate1.style.top) - 20*sign;
    }else{
      const sign = (cateLeft - dogeLeft)/Math.abs(cateLeft - dogeLeft);
      cate1.style.left = parseInt(cate1.style.left) - 20*sign;
    }
  });
}

cate2.cateUpdatePosition = () => {
  return new Promise((resolve, reject) => {
    const cateTop = parseInt(cate2.style.top);
    const cateLeft = parseInt(cate2.style.left);
    const dogeTop = parseInt(doge.style.top);
    const dogeLeft = parseInt(doge.style.left);

    if(cateTop + 100 > dogeTop && cateTop < dogeTop + 100 &&
      cateLeft + 100 > dogeLeft && cateLeft < dogeLeft + 100){
        resolve(3);
      }else{
        resolve(0)
      }

    const signTop = (cateTop - dogeTop)/Math.abs(cateTop - dogeTop);
    cate2.style.top = parseInt(cate2.style.top) - 10*signTop;
    const signLeft = (cateLeft - dogeLeft)/Math.abs(cateLeft - dogeLeft);
    cate2.style.left = parseInt(cate2.style.left) - 10*signLeft;
  });
}

document.onkeydown = (event) => {
  switch(event.keyCode){
    case 38: doge.style.top = -25 + parseInt(doge.style.top);break;//UP
    case 37: doge.style.left = -25 + parseInt(doge.style.left);break;//LEFT
    case 39: doge.style.left = 25 + parseInt(doge.style.left);break;//RIGHT
    case 40: doge.style.top = 25 + parseInt(doge.style.top);break;//DOWN
  }

  const laPromesa = cate1.cateUpdatePosition();
  const laOtraPromesa = cate2.cateUpdatePosition();
  Promise.all([laPromesa, laOtraPromesa])
    .then(([lifeLost1, lifeLost2])=>{
      doge.updateLifes(lifeLost1);
      doge.updateLifes(lifeLost2);
    })
    .catch((error)=>{
      console.error("Error > "+error);
    })
    .finally(()=>{
      doge.updateTurns();
    });
  cate2.cateUpdatePosition(doge.gameOver);
}