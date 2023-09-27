(async function () {
  let resp = await fetch("https://65123e1eb8c6ce52b3957319.mockapi.io/produk");
  let data = await resp.json();
  console.log(data);
  let str = ``;
  for await (let items of data) {
    str += `<div class="column">
        <div class="card">
          <img src="${items.imagesrc}" width="55%" alt="produk">
          <h3>${items.name}</h3>
          <p>${items.price}<p/>
          <p>${items.description}</p>
          <a href="#">Lihat Produk</a>
        </div>
        </div>`;
  }
  console.log(str);
  document.getElementById("rowuse").innerHTML = str;
})();
