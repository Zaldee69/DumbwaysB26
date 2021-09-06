const buyEgg = (date, money) => {
  let hargaTelur = Math.round(money / 2500);
  let pembagi = 0;
  let bonus = 0;
  for (let i = 1; i <= date; i++) {
    if (date % i == 0) {
      pembagi++;
    }
  }

  for (let i = 12; i < money; i++) {
    if (hargaTelur % i == 0) {
      bonus += 2;
    }
  }

  if (pembagi == 2 && hargaTelur >= 12) {
    return (jumlahTelur = hargaTelur + bonus);
  } else if (date % 5 === 0) {
    if (bonus % 2 == 0) {
      jumlahTelur = (hargaTelur + bonus) * 10;
      return `Telur yang anda dapatkan = ${jumlahTelur}`;
    } else {
      jumlahTelur = (hargaTelur + bonus) * 5;
      return `Telur yang anda dapatkan = ${jumlahTelur}`;
    }
  } else if (pembagi !== 2 && date % 5 !== 0) {
    if (bonus % 2 == 0) {
      jumlahTelur = hargaTelur + 10 * 3;
      return `Telur yang anda dapatkan = ${jumlahTelur}`;
    } else {
      jumlahTelur = hargaTelur + 5 * 3;
      return `Telur yang anda dapatkan = ${jumlahTelur}`;
    }
  } else {
    jumlahTelur = hargaTelur;
    return `Telur yang anda dapatkan = ${jumlahTelur}`;
  }
};

console.log(buyEgg(13, 60000));
