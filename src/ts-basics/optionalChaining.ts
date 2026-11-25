type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()}
}

let Customer = getCustomer(0)
console.log(Customer?.birthday?.getFullYear())
