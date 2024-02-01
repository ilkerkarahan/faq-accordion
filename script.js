const plusBtns = document.querySelectorAll('.item .item-head .plus')
const minusBtns = document.querySelectorAll('.item .item-head .minus')
const items = document.querySelectorAll('.item')

plusBtns.forEach((plusBtn, index) => {
    plusBtn.addEventListener('click', () => {
        removeItem()
        items[index].classList.add('active')
    })
})

minusBtns.forEach((minusBtn, index) => {
    minusBtn.addEventListener('click', () => {
        items[index].classList.remove('active')
    })
})

const headBtns = document.querySelectorAll('.item .item-head p')

headBtns.forEach((headBtn, index) => {
    headBtn.addEventListener('click', () => {
        removeItem2()
        items[index].classList.toggle('active')
    })
})

function removeItem() {
    items.forEach((item) => {
        item.classList.remove('active')
    })
}

function removeItem2() {
    items.forEach((item) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        }
    })
}