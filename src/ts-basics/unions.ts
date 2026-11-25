function kgToLbs(weight: number | string): number {
if (typeof weight == 'number')
 return weight * 2.2
else
  return parseInt(weight) * 2.2
}

console.log(`the values are ${kgToLbs(20)}`)
console.log(`the values are ${kgToLbs("20")}`)
