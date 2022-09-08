let btn = document.querySelector("button");
const returnName = document.querySelector("#name");

const btnClick = (event) => {
  axios.get("https://swapi.dev/api/planets/2/?residents").then((response) => {
    let alderaan = response.data.residents;
    residents = [];
    for (let i = 0; i < alderaan.length; i++) {
      residents.push(alderaan[i]);
    }
    return setRes(residents);
  });
  console.log("button clicked");
};
let names = [];
const setRes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    axios.get(arr[i]).then((response) => {
      let name = response.data.name;
      names.push(name);
      console.log(names);
      if (names.length === arr.length) {
        return update(names);
      }
    });
  }

  //   return update(names);
  //   returnName.textContent = ` ${names}`;
  //   console.log("test");
};
console.log(names);
const update = (namesArr) => {
  returnName.textContent = ` ${namesArr}`;
};

btn.addEventListener("click", btnClick);
