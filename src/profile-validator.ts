type UserProfile = {
  id: number,
  username: string,
  settings?: { notifications?: boolean}
}

let user_one: UserProfile = {
  id: 1,
  username: "user_one",
  settings: {notifications: true}
}


let user_two: UserProfile = {
  id: 2,
  username: "user_two"
}


let user_three: UserProfile = {
  id: 3,
  username: "user_three",
  settings: {notifications: false}
}

function isNotified(user: UserProfile): boolean {
  return user.settings?.notifications ?? false
}

console.log(isNotified(user_one))
console.log(isNotified(user_two))
console.log(isNotified(user_three))
