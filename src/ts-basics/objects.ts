let employee: {
  readonly id: number,
  name?: string,
  retire: (data: Date) => void
} = {
  id: 2,
  name: "muchiri",
  retire: (data: Date) => {
    console.log(data)
  }
}

console.log(employee)
