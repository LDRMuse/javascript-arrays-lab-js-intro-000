var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
 kittens.push(name)
 return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}
