function addFile(targetId, fileUrl) {
    fetch(fileUrl)
    .then(response => response.text())
    .then(data => {
        document.getElementById(targetId).innerHTML = data;
        addToggleThemeListener();
    })
    .catch(error => {
        console.error('Error loading ' + fileUrl);
    });
}