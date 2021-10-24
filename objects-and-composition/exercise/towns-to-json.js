function townsToJson(arr) {
    const result = [];

    for (let data of arr) {
        if (data != arr[0]) {
            let [rawTown, latitude, rawLongitude] = data.split(' | ')
            let town = rawTown.slice(2);
            let longitude = rawLongitude.slice(0, rawLongitude.length - 2);
            latitude = Number(latitude).toFixed(2);
            longitude = Number(longitude).toFixed(2);


            result.push({'Town': town, 'Latitude': Number(latitude), 'Longitude': Number(longitude)})
        }      
    }
    console.log(JSON.stringify(result))
}