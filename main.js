const bookName = document.getElementById("bookname");
const bookPrice = document.getElementById("bookprice");
const bookDescrip = document.getElementById("bookdescp");
const bookRate = document.getElementById("rate");
const bookImage = document.getElementById("image");
const bookReadable = document.getElementById("readable");
const addBtn = document.getElementById("add-btn");
const updateBtn = document.getElementById("update-btn");
const tableBody = document.getElementById("table-body");


let bookscontainer = [];

function addBook() {
    let data = getInputdata();
    bookscontainer.push(data);
    updateView();
    resetData();

}

function getInputdata() {
    let imagePath = bookImage.value;
    let arr = imagePath.split('\\');
    let imageName = arr[arr.length - 1];

    let book = {

        name: bookName.value,
        price: bookPrice.value,
        description: bookDescrip.value,
        rate: bookRate.value,
        image: imageName,
        readable: bookReadable.checked

    }

    return book;
}

function updateView() {
    let content = ``;
    let id = 0;
    for (book of bookscontainer) {
        let rate = book.rate;
        if (+rate > 5) {
            rate = 5;
        }
        else if (+rate < 1) {
            rate = 1;
        }
        let fullStars = "";
        for (let i = 0; i < rate; i++) {
            fullStars += `<img src="./image/star.png"  alt="stars">`
        }
        let emptystars = "";
        for (let i = 0; i < 5 - rate; i++) {
            emptystars += `<img src="./image/star1.png"  alt="stars">`
        }

        content += `
        <tr class=${book.readable ? "read" : ""}>
          <td>${id}</td>
          <td>${book.name}</td>
          <td>${book.price}</td>
          <td>${book.description}</td>
          <td >
           <div class="rate"> ${fullStars + emptystars}</div>
          </td>
          <td>
            <img src="./image/${book.image}" class="image" alt="booooook">
          </td>
         
          <td><button  onclick = "deleteBook(${id})">Delete</button></td>
        <tr>
        `;

        id++;
    }
    tableBody.innerHTML = content;
}

function resetData() {
    bookName.value = "";
    bookPrice.value = "";
    bookDescrip.value = "";
    bookRate.value = "";
    bookReadable.checked = false;
    bookImage.value = "";
}

function deleteBook(id) {
    bookscontainer.splice(id, 1);
    updateView();
}

