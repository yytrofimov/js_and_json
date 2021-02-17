function getJSONData(pathToData) {
    fetch(pathToData)
        .then((response) => response.json())
        .then((data) => {
            for (i of data["shortcuts"]) {
                console.log(i);
            }
        });
}

getJSONData("json/shortcuts.json");
