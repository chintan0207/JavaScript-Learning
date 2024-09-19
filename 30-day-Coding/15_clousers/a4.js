const itemManager = (function () {
    let items = [];

    return {
        addItem: function (item) {
            items.push(item);
        },
        removeItem: function (item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function () {
            return items.slice();
        }
    };
})();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
console.log(itemManager.listItems()); // Logs: ['Apple', 'Banana']
itemManager.removeItem('Apple');
console.log(itemManager.listItems()); // Logs: ['Banana']