let listDiv = document.querySelector(".list");

fetch('data.json')
.then(response => response.json())
.then(data => console.table(data))