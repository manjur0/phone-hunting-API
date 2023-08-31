const loadPhon = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
}

function displayPhone(phones) {
  const phonesContainer = document.getElementById('phones-container');

  phonesContainer.textContent = '';
  phones = phones.slice(0, 12);

  phones.forEach(phone => {
    console.log(phone);
    const phoneSingleDiv = document.createElement('div');
    phoneSingleDiv.classList = `card card-compact bg-base-100 shadow-xl `
    phoneSingleDiv.innerHTML = `
        <figure><img src="${phone.image}" alt="Phone" /></figure>
        <div class="card-body ">
            <h2 class="card-title">${phone.brand}</h2>
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>${phone.slug}</p>
            <div class="card-actions justify-center mt-4">
              <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
    phonesContainer.appendChild(phoneSingleDiv);

  })
}

// search handle 
function searchHandle() {
  const searchField = document.getElementById('search-input')
  const searchText = searchField.value;
  loadPhon(searchText);

}
loadPhon()