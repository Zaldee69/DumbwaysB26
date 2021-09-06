const dumbWaysJos = 21.1;
const dumbWaysMantap = 30;

const bigDiscount = (discountName, money) => {
  let hargaBarang;
  let diskon;
  if (discountName === dumbWaysJos) {
    if (money <= 80000 && money >= 50000) {
      diskon = (21.1 / 100) * money;
      if (diskon < 20000) {
        hargaBarang = money - diskon;
      } else if (diskon > 20000) {
        hargaBarang = money - 20000;
      }
      return `Uang yang harus dibayar = Rp.${hargaBarang}
              Diskon = Rp.${Math.round(diskon)}
              Kembalian = Rp.${Math.round(diskon)}`;
    } else {
      return "Yuk belanja lebih banyak lagi agar mendapatkan diskon";
    }
  } else if (discountName === dumbWaysMantap) {
    if (money > 80000) {
      diskon = (30 / 100) * money;
      if (diskon < 40000) {
        hargaBarang = money - diskon;
      } else {
        hargaBarang = money - 40000;
      }
      return `Uang yang harus dibayar = Rp.${hargaBarang}
              Diskon = Rp.${Math.round(diskon)}
              Kembalian = Rp.${Math.round(diskon)}`;
    }
  } else {
    return `Voucher yang anda masukkan salah`;
  }
};

console.log(bigDiscount(dumbWaysJos, 50000));
