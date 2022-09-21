const bookingPage = function () {
    const booking = document.createElement("div")
    booking.setAttribute('class', 'bookingDiv')

    const bookingItem = document.createElement('div')
    bookingItem.setAttribute('class', 'bookingItem')

    const bookingImage = document.createElement('img')
    bookingImage.src = "../src/asset/image/map.png"
    bookingImage.setAttribute('class', 'bookingImage')
    bookingItem.append(bookingImage)

    const bookingHeader = document.createElement('h3')
    bookingHeader.setAttribute('class', 'bookingHeader')
    bookingHeader.innerHTML = 'Contact'
    bookingItem.append(bookingHeader)

    const bookingText = document.createElement('text')
    bookingText.setAttribute('class', 'bookingText')
    bookingText.innerHTML = 'Hafnia <br> Sankt Annæ Plads 36 <br>1250 Copenhagen K<br> Tel. +45 12 34 56 78 <br> hafnia@hafnia.com <br> Opening Hours: <br> Mon-Sat 11:00–23:00'
    bookingItem.append(bookingText)


    booking.append(bookingItem)
    content.appendChild(booking)
}

export default bookingPage