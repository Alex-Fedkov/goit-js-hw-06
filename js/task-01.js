const categories = document.querySelector('#categories');
console.log('Number of categories:', categories.children.length);

const categoryList = [...categories.children];
categoryList.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);

    const elementItem = element.querySelector(`ul`);
    console.log(`Elements: ${elementItem.children.length}`)
})