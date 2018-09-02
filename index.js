
function takeANumber (deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(deli) {
  if (deli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = deli.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(deli) {
  if (deli.length === 0) {
    return "The line is currently empty."
  } else {
    var lines = ""
    for (var i = 0; i < deli.length; i++) {
      lines = `${lines} ${i+1} ${deli[i]}`
    }
    return lines;
  }
}