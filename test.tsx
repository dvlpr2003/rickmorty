interface Gadgets {
  readonly id: string;
  name: string;
  price: number;
  isWaterproof?: boolean;
  applyDiscount: (discount: number) => number;
}

interface SmartWatch extends Gadgets {
  strapMaterial: string;
  HeartRateMonitor: boolean;
  hasHeartRateMonitor(): string;
}

const myWatch: SmartWatch = {
  id: "sw3-1",
  name: "rolex",
  price: 29.9,
  isWaterproof: true,
  strapMaterial: "wood",
  HeartRateMonitor: false,
  hasHeartRateMonitor() {
    return this.HeartRateMonitor ? "yes" : "no";
  },
  applyDiscount(discount: number) {
    const discountAmount = this.price * (discount / 100);
    return this.price - discountAmount;
  },
};
console.log(myWatch.applyDiscount(4));
