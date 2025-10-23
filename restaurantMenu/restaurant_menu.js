const breakfastMenu = ['Pancakes - $5', 'Eggs and Bacon - $10', 'Cereal - $3', 'Yougurt - $11'];
const mainCourseMenu = ['Steak - $32.99', 'Pasta - $27.99', 'Grilled Chicken - $22.99', 'Salmon - $41.99'];
const dessertMenu = ['Cake - $6', 'Ice Cream - $2', 'Pudding - $3', 'Fruit Salad - $9.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for(let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem