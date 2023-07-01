interface TotalPrice {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

const totalPrice: Function = ({ price, discount, isInstallment, months }: TotalPrice): number => {
  if (discount > 0) {
    return isInstallment ?
    (price - (price / 100 * discount)) / months :
    price - (price / 100 * discount)
  }
  return isInstallment ? price / months : price
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }))