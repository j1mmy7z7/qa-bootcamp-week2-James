type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let person: Employee = {
  id: 2,
  name: "muchiri",
  retire: (data: Date) => {
    console.log(data)
  }
}

console.log(person)
