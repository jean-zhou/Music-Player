var clearClass = function(classItems, className) {
    // clearClass('.owen-item', 'hignlight')
    var items = document.querySelectorAll(classItems)
    for (var i = 0; i < items.length; i++) {
        if(items[i].classList.contains(className)) {
            items[i].classList.remove(className)
        }
    }
}
