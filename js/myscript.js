var qS = document.querySelector.bind(document);
var qSA = document.querySelectorAll.bind(document)
let tabs = qSA('.tab-item');
console.log(tabs);

let panes = qSA('.tab-pane');
const tabActive = qS('.tab-item.active');
const line = qS('.tabs .line');
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
for (var i = 0; i < tabs.length; i++) {
    const pane = panes[i];
    tabs[i].onclick = function () {
        var qSTab = qS('.tab-item.active');
        if (qSTab)
            qS('.tab-item.active').classList.remove('active');
        this.classList.add('active');

        var qsPane = qS('.tab-pane.active');
        if (qsPane)
            qsPane.classList.remove('active');
        pane.classList.add('active');
        const line = qS('.tabs .line');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }
}
window.onresize = function(){
    // Tim tab dang active tai thoi diem do
    const tabActive = qS('.tab-item.active');
    const line = qS('.line');
    // Cập nhật lại vị trí và độ rộng mới cho line
    if(tabActive && line){
        line.style.left = tabActive.offsetLeft + 'px';
        line.style.width = tabActive.offsetWidth + 'px';
    }
}