var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten("Ralph") {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}



/*describe('destructivelyAppendKitten(name)', function() {
  it('appends a kitten to the end of the kittens array', function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
    destructivelyAppendKitten('Ralph')
    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
  })*/
