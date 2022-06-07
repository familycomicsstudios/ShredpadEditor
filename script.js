function save() {
    var textcontent = document.getElementById('mytextarea').value;
    var downloadableLink = document.createElement('a');
    downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
    downloadableLink.download = "myFile" + ".txt";
    document.body.appendChild(downloadableLink);
    downloadableLink.click();
    document.body.removeChild(downloadableLink);
}
function load() {
    var file = document.getElementById('file-input').click();
    console.log(file);
}
