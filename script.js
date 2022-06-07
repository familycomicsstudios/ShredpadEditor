function save() {
    var data = $('#mytextarea').val();
    this.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(data);
}
