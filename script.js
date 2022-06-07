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
     var file = document.getElementById("myFile").files[0];
     var reader = new FileReader();
     reader.onload = function (e) {
         var textArea = document.getElementById("myTextArea");
         textArea.value = e.target.result;
     };
     reader.readAsText(file);
}

