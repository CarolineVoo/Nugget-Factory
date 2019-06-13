function selectNug(){
    var img = document.getElementById("showNugget");
    img.src = this.value;
}
document.getElementById("nuggetType").onchange = selectNug;


