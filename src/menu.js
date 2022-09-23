const menuPage = function () {
    const menu = document.createElement("div")
    menu.setAttribute('class', 'menuDiv')

    const menuItem = document.createElement('div')
    menuItem.setAttribute('class', 'menuItem')

    const menuImage = document.createElement('img')
    menuImage.src = "asset/image/smorrebrod2.webp"
    menuImage.setAttribute('class', 'menuImage')
    const menuHeader = document.createElement('h3')
    menuHeader.innerHTML = 'Butter-fried Plaice on Rye Bread'
    menuHeader.setAttribute('class', 'menuHeader')
    const menuText = document.createElement('text')
    menuText.setAttribute('class', 'menuText')
    menuText.innerHTML = 'w. shrimp Salad, pickled onions and herbs - 149 dkk'
    menuItem.append(menuImage, menuHeader, menuText)

    const menuImage1 = document.createElement('img')
    menuImage1.src = "asset/image/smorrebrod1.webp"
    menuImage1.setAttribute('class', 'menuImage')
    const menuHeader1 = document.createElement('h3')
    menuHeader1.innerHTML = 'Grilled Beef Tenderloin on Rye Bread'
    menuHeader1.setAttribute('class', 'menuHeader')
    const menuText1 = document.createElement('text')
    menuText1.setAttribute('class', 'menuText')
    menuText1.innerHTML = 'w. béarnaise cream, pickled cucumbers, pickled mushrooms, crispy potato - 79 dkk'
    menuItem.append(menuImage1, menuHeader1, menuText1)

    const menuImage2 = document.createElement('img')
    menuImage2.src = "asset/image/smorrebrod3.webp"
    menuImage2.setAttribute('class', 'menuImage')
    const menuHeader2 = document.createElement('h3')
    menuHeader2.innerHTML = 'Potato on Rye Bread'
    menuHeader2.setAttribute('class', 'menuHeader')
    const menuText2 = document.createElement('text')
    menuText2.setAttribute('class', 'menuText')
    menuText2.innerHTML = 'w. smoked mayonnaise, pickled onions, radishes, crispy chips and herbs - 69 dkk'
    menuItem.append(menuImage2, menuHeader2, menuText2)

    const menuImage3 = document.createElement('img')
    menuImage3.src = "asset/image/smorrebrod4.webp"
    menuImage3.setAttribute('class', 'menuImage')
    const menuHeader3 = document.createElement('h3')
    menuHeader3.innerHTML = 'Avocado on Rye Bread'
    menuHeader3.setAttribute('class', 'menuHeader')
    const menuText3 = document.createElement('text')
    menuText3.setAttribute('class', 'menuText')
    menuText3.innerHTML = 'w. chive mayonnaise, pickled onions, cabbage, crispy rye chips and pea shoots - 69 dkk'
    menuItem.append(menuImage3, menuHeader3, menuText3)


    menu.append(menuItem)
    content.appendChild(menu)
}

export default menuPage
