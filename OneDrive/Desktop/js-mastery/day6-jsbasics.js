const containerElement = document.getElementById('root');
console.log(containerElement);

const HeadElement = document.createElement('h1');

HeadElement.textContent = "Hello welcome Vijay Perumalla";
console.log(HeadElement);

const textButtonEl = document.createElement('button')
textButtonEl.textContent = "Hey Yay!"
console.log(textButtonEl)

containerElement.appendChild(HeadElement);

containerElement.appendChild(textButtonEl);
