const result = document.getElementById("result");

const getData = () => {
  return fetch("http://localhost:3000/").then((res) => res.json());
};

getData().then((data) => {
  data.map((item) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.textContent = `${item.rule}`;
    span.textContent = `${item.status}`;
    ul.classList.add("ul");
    li.classList.add("li");
    span.classList.add("span");
    li.appendChild(span);
    ul.appendChild(li);
    result.appendChild(ul);
  });
});
