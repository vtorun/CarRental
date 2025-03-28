import { Car } from "../types";

export default function calcPrice(arac: Car): number {
  let price = 500;
  const aracYili = parseInt(arac.year);
  const simdikiYil = new Date().getFullYear();
  const yas = simdikiYil - aracYili;
  const yasIndirimi = Math.min(yas * 0.02, 0.2);
  price *= 1 - yasIndirimi;

  const cc = arac.displ * 1000;
  let motorUcreti = 0;
  if (cc > 1000) {
    motorUcreti = (cc - 1000) * 0.2; 
  }
  price += motorUcreti;
  return Math.round(price * 100) / 100;
}
