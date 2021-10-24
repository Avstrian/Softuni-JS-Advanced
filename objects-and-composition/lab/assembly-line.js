function createAssemblyLine() {

    return {
        hasClima: (vehicle) => {
            vehicle.temp = 21;
            vehicle.tempSettings = 22;
            vehicle.adjustTemp = () => {
                if (vehicle.temp < vehicle.tempSettings) {
                    vehicle.temp++;
                } 
                else if (vehicle.tempSettings < vehicle.temp) {
                    vehicle.temp--;
                }
                return vehicle.temp
            }
        },

        hasAudio: (vehicle) => {
            vehicle.currentTrack = {
                name: null,
                artist: null
            };
            vehicle.nowPlaying = () => {
                if (vehicle.currentTrack['name'] !== null){
                    console.log(`Now playing '${vehicle.currentTrack['name']}' by ${vehicle.currentTrack['artist']}`)
                }
            }
        },

        hasParktronic: (vehicle) => {
            vehicle.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!')
                }
                else if (0.1 <= distance && distance < 0.25) {
                    console.log('Beep! Beep!')
                }
                else if (0.25 <= distance && distance < 0.5) {
                    console.log('Beep!')
                }
                else {
                    console.log('')
                }
            }
        }
    }
}