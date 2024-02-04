const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItens = items.length;

controls.forEach(control => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains('arrow-left')

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItens) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItens - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    })

    items[currentItem].classList.add("current-item");

  })
})