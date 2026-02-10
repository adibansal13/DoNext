let inp = document.querySelector("#inp");
let btn = document.querySelector("button");

btn.onclick = function () {
  let pattern = /^[^\s@]+@[^\s@]+\.com$/;
  if (pattern.test(inp.value)) {
    alert(inp.value);
  } else {
    console.log("wrong data");
  }
};
