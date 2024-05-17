var colors = ["black", "white", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"]

var boxes = document.getElementsByClassName('items');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function () {
        var num = colors[Math.floor(Math.random() * 16)];
        this.style.backgroundColor = num;
        this.style.boxShadow="10px 20px 30px";
    })
}