function coronaMarker() {
    //fetching data from json feed
    fetch("/data.json")
        //javascript promises
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                //storing lat and long
                lat = element.latitude;
                long = element.longitude;

                // Map Marker
                new mapboxgl.Marker({
                    draggable: false,
                    color: "black"
                }).setLngLat([long, lat])
                .addTo(map);
            });
        })
}

coronaMarker();
