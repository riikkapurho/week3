import "./styles.css";

async function getData() {
  const table = document.getElementById("table");

  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const municipalityPromise = await fetch(url);
  const municipalityJSON = await municipalityPromise.json();
  /*console.log(municipalityJSON);
  console.log(municipalityJSON.dataset.dimension.Alue.category.label);*/
  var index = 0;
  for (var key in municipalityJSON.dataset.dimension.Alue.category.label) {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let tr = document.createElement("tr");
    if (
      municipalityJSON.dataset.dimension.Alue.category.label.hasOwnProperty(key)
    ) {
      td1.innerText =
        municipalityJSON.dataset.dimension.Alue.category.label[key];
    }

    td2.innerText = municipalityJSON.dataset.value[index];
    index = index + 1;
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
  }
}

getData();
