function printCurrentSongAndArtist(input) {
    let song = input[0]
    let artist = input[1]
    let duration = input[2]

    console.log(`Now Playing: ${artist} - ${song} [${duration}]`)
}

printCurrentSongAndArtist(['Number One', 'Nelly', '4:09'])