
export function parent() {

  var message = "child";

  function child() {

    console.log(message);

  }

  return child;

}
