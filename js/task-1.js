const items = document.querySelectorAll('.item')
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
    const name = item.querySelector('h2');
    console.log(`Category: ${name.textContent}`);
    const number = item.querySelectorAll('li');
    console.log(`Elements: ${number.length}`); 
});