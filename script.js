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
     var file = new Promise(resolve => {
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = false;
        input.accept = "text/plain";

        input.onchange = () => {
            let files = Array.from(input.files);
            if (false)
                resolve(files);
            else
                resolve(files[0]);
        };

        input.click();
    });
}
