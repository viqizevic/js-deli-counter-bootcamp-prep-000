
function takeANumber (deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(deli) {
  if (deli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = deli.shift()
    return 
  }
}