window.onload = function(){
  let myForm = document.querySelector("#my-form")
  let section = document.querySelector("section")

  myForm.addEventListener("submit", function(event){
    event.preventDefault()
    let picURL = event.target[0].value
    let wordsT = event.target[1].value
    let wordsB = event.target[2].value

    let div = document.createElement("div")

    let textDiv1 = document.createElement("div")
    textDiv1.innerText = wordsT
    textDiv1.className = ("text1")
    div.append(textDiv1)

    let pic = document.createElement("img")
    pic.src = picURL

    div.append(pic)

    if(wordsB){
      let textDiv2 = document.createElement("div")
      textDiv2.innerText = wordsB
      textDiv2.className = ("text2")
      div.append(textDiv2)
    }

    section.append(div)

    myForm.reset()
  })

  section.addEventListener("click",function(event){
    event.target.parentNode.remove()
  })
}