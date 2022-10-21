const input = document.querySelector(".search-input")
const ongName = document.querySelectorAll(".name")

input.addEventListener("input", event => {
  const inputValue = event.target.value.trim()
  
  Array.from(ongName).filter(name => {
    return !name.textContent.toLowerCase().includes(inputValue.toLowerCase())
  }).forEach((name) => {
    const parentElement = name.parentElement
    parentElement.parentElement.classList.add("d-none")
  })

  Array.from(ongName).filter(name => {
    return name.textContent.toLowerCase().includes(inputValue.toLowerCase())
  }).forEach((name) => {
    const parentElement = name.parentElement
    parentElement.parentElement.classList.remove("d-none")
  })


})
