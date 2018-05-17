function getConesProperties(r, height) {
    let volume = Math.PI * Math.pow(r, 2) * height / 3
    let slantHeight = Math.sqrt(Math.pow(r, 2) + Math.pow(height, 2))
    let area = Math.PI * r * slantHeight + Math.PI * Math.pow(r , 2)

    console.log(`volume = ${volume}`)
    console.log(`area = ${area}`)
}

getConesProperties(3, 5)
getConesProperties(3.3, 7.8)