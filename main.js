
document.addEventListener('dblclick', function (e) {
  console.log(e.target)
  let elem = e.target

  if (elem.classList.contains("item__img") || elem.classList.contains("like")) {
    let parent = elem.closest(".item");
    let like = parent.querySelector(".like")
    like.classList.toggle('active')
  }
})

document.addEventListener('click', function (e) {
  console.log(e.target)
  let elem = e.target

  if (elem.classList.contains("like")) {
    elem.classList.toggle('active')
  }
})



