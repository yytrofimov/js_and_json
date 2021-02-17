function axiosGetJSON(pathToFile) {
    let shortcuts = [];
    axios.get(pathToFile).then((response) => {
        for (i of response.data["shortcuts"]) {
            shortcuts.push(i);
            console.log("OUT: ",shortcuts.length)
            console.log(i);
        }
    });
    console.log("OUT_RESULT: ",shortcuts.length)
    return shortcuts;
}

function createShortcutsTable(shortcuts, requiredData) {
    let shortcutsTable = document.createElement("table");
    let labelString = document.createElement("tr");
    for (label of requiredData) {
        let labelCell = document.createElement("th");
        labelCell.innerHTML = label;
        labelString.appendChild(labelCell);
    }
    shortcutsTable.appendChild(labelString);
    for (shortcut of shortcuts) {
        let tableString = document.createElement("tr");
        for (label of requiredData) {
            let stringCell = document.createElement("th");
            stringCell.innerHTML += shortcut[label];
            tableString.appendChild(stringCell);
        }
        shortcutsTable.append(tableString);
    }
    document.body.append(shortcutsTable);
}

axiosGetJSON('json/shortcuts.json')
