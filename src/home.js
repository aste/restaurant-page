// const dynamicPage = document.querySelector(".dynamicPage");

const homePage = function () {
    const home = document.createElement("div")
    home.setAttribute('class', 'homeDiv')

    const homeItem = document.createElement('div')
    homeItem.setAttribute('class', 'homeItem')

    const homeImage = document.createElement('img')
    homeImage.src = "../src/asset/image/hafnia.jpeg"
    homeImage.setAttribute('class', 'homeImage')
    homeItem.append(homeImage)

    const homeHeader = document.createElement('h3')
    homeHeader.setAttribute('class', 'homeHeader')
    homeHeader.innerHTML = 'Hafnia'
    homeItem.append(homeHeader)

    const homeText = document.createElement('text')
    homeText.setAttribute('class', 'homeText')
    homeText.innerHTML = "At Hafnia, we give traditional Danish dishes a modern and tasteful overhaul. Respect for good taste and the chef's craft is a driving force in everything we do. This means that we make things from scratch and from proper raw materials. We prioritize that fruit and vegetables are in season, and have selected our suppliers based on clear positions in areas such as sustainability and animal welfare. It is important to us that the meat comes from animals that have lived a decent life in the wild, just as grains and dairy products are organic."
    homeItem.append(homeText)


    home.append(homeItem)
    content.appendChild(home)
}

export default homePage