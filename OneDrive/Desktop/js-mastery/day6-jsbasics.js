const containerElement = document.getElementById('root');
console.log(containerElement);

const HeadElement = document.createElement('h1');

HeadElement.textContent = "Hello welcome Vijay Perumalla";
HeadElement.style.color = "Blue"
console.log(HeadElement);

const textButtonEl = document.createElement('button')
textButtonEl.textContent = "Hey Yay!"
textButtonEl.style.color ="#EDDD53"

textButtonEl.addEventListener("click", function() {
  HeadElement.textContent = "Button was clicked! 🎉";
  HeadElement.style.color = "blue";
});
console.log(textButtonEl)

containerElement.appendChild(HeadElement);

containerElement.appendChild(textButtonEl);
