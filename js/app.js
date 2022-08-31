const loadPhone = async (searchValue) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
}
const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ' ';
    // display 20 phone only
    phones = phones.slice(0, 5);
    // no phone found check
    const noPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }
    phones.forEach((phone) => {
        const { image, phone_name, brand } = phone;
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card ">
        <img class="p-5" src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Phone Name: ${phone_name}</h5>
                <p class="card-text">Brand Name: ${brand}</p>
            </div>
    </div>
        `
        phoneContainer.appendChild(phoneDiv);
        // stop loader
        togglerLoader(false);
    })
    // console.log(phone);
}

document.getElementById('btn-search').addEventListener('click', () => {
    //start loading
    togglerLoader(true);
    const searchName = document.getElementById('search-value');
    const searchValue = searchName.value;
    // console.log(searchValue);
    loadPhone(searchValue);
})
// loadPhone();

const togglerLoader = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }

}



