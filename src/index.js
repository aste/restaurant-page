import homePage from "./home"
import menuPage from "./menu"
import bookingPage from "./booking"

const content = document.querySelector("#content");

const basePage = function () {
    content.style.backgroundImage = "url('asset/image/background.png')"
    // content.style.backgroundRepeat = "repeat-y"

    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'headerDiv')
    content.appendChild(headerDiv)

    const headerImage = document.createElement('img')
    headerImage.setAttribute('src', 'asset/image/header.jpg')
    headerImage.setAttribute('class', 'headerImage')
    headerDiv.appendChild(headerImage)

    const pageHeadline = document.createElement('h1')
    pageHeadline.classList.add('pageHeadline')
    pageHeadline.innerHTML = 'Hafnia'
    headerDiv.appendChild(pageHeadline)

    const headerBar = document.createElement('div')
    headerBar.classList.add('headerBar')
    content.appendChild(headerBar)

    const headerItem1 = document.createElement('h2')
    headerItem1.classList.add('headerItem')
    headerItem1.innerHTML = 'Home'
    headerBar.appendChild(headerItem1)

    const headerItem2 = document.createElement('h2')
    headerItem2.classList.add('headerItem')
    headerItem2.innerHTML = 'Menu'
    headerBar.appendChild(headerItem2)

    const headerItem3 = document.createElement('h2')
    headerItem3.classList.add('headerItem')
    headerItem3.innerHTML = 'Booking'
    headerBar.appendChild(headerItem3)

    const removeLastChild = function () { content.removeChild(content.lastChild) }

    headerItem1.addEventListener('click', () => {
        removeLastChild()
        homePage()
    })

    headerItem2.addEventListener('click', () => {
        removeLastChild()
        menuPage()
    })

    headerItem3.addEventListener('click', () => {
        removeLastChild()
        bookingPage()
    })

    return
}

basePage()
homePage()