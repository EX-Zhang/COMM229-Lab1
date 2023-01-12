
export function add(x, y = 0) {

  return x + y;

}

export function userFriends(user, ...friends) {

  console.log(user + " has friends " + friends.length + ": " + friends);

}

export function userTopFriends(user, first, second, third) {

  console.log("Top 3 freinds of " + user + " are " + first + ", " + second + ", " + third);

}
