const col = document.getElementById('color')

function random (number) {
  return Math.floor(Math.random() * (number + 1))
}

function randomColor () {
  const rdmcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
  document.body.style.background = rdmcolor
  }