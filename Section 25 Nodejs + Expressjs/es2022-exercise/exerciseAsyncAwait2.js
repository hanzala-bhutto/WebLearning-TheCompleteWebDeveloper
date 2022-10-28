// Solve the below problems:

// #1) Convert the below async function to remove the async keyword
async function fetchStarship() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

// --------- Answer:
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);


// #2) ADVANCED: Remove the async function from the below wherever possible:
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// --------- Answer:
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);


// #3  ADVANCED: Try to run this piece of code just as a JS file not inside the browser dev tool, instea using this:
//https://glot.io/new/javascript
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);
//!! It will actually give you an error: "await is only valid in async functions and the top level bodies of modules"
//WHY?

