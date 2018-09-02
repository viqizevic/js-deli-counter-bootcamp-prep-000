
function takeANumber (deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(deli) {
  name = deli.pop()
  return name
}