function selectNug(){
    var img = document.getElementById("showNugget");
    img.src = this.value;
    return false;
}
document.getElementById("nuggetType").onchange = selectNug;


