const loadPhone = async (searchValue, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, datalimit);
}
const displayPhone = (phones, datalimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // display 20 phone only
    const showAll = document.getElementById('show-all');
    if (datalimit && phones.length > 5) {
        phones = phones.slice(0, 5);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }
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
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    // stop loader
    togglerLoader(false);
    // console.log(phone);
};

// document.getElementById('btn-search').addEventListener('click', function () {
//     //start loading
//     togglerLoader(true);
//     const searchName = document.getElementById('search-value');
//     const searchValue = searchName.value;
//     loadPhone(searchValue);
//     console.log(searchName);
// });
// loadPhone('iphone');

const processSearch = (datalimit) => {
    togglerLoader(true);
    const searchName = document.getElementById('search-value');
    const searchValue = searchName.value;
    loadPhone(searchValue, datalimit);
}

document.getElementById('btn-search').addEventListener('click', function () {
    // start loading
    processSearch(10);
    // console.log('setst');
});


const togglerLoader = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }

}
// not the best way to load show all
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();


})



