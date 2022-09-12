import header from './asset/image/header.jpg'

const content = document.querySelector("#content");

const basePage = function () {
    content.style.backgroundImage = "url('../src/asset/image/background.png')"

    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'headerDiv')

    const headerImage = document.createElement('img')
    headerImage.setAttribute('src', '../src/asset/image/header.jpg')
    headerImage.setAttribute('class', 'headerImage')

    const pageHeadline = document.createElement('h1')
    pageHeadline.classList.add('pageHeadline')
    pageHeadline.innerHTML = 'Hafnia'

    const headerBar = document.createElement('div')
    headerBar.classList.add('headerBar')

    const headerItem1 = document.createElement('h2')
    headerItem1.classList.add('headerItem')
    headerItem1.innerHTML = 'Home'

    const headerItem2 = document.createElement('h2')
    headerItem2.classList.add('headerItem')
    headerItem2.innerHTML = 'Menu'

    const headerItem3 = document.createElement('h2')
    headerItem3.classList.add('headerItem')
    headerItem3.innerHTML = 'Booking'

    content.appendChild(headerDiv)
    headerDiv.appendChild(headerImage)
    headerDiv.appendChild(pageHeadline)

    content.appendChild(headerBar)
    headerBar.appendChild(headerItem1)
    headerBar.appendChild(headerItem2)
    headerBar.appendChild(headerItem3)
}


basePage()

// export default index