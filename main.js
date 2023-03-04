// var element = document.getElementById("example");
// element.innerHTML = "Hello, World!";
// element.style.fontSize = "123px"
// element.style.color = "blue"
// let element1 = document.getElementById("h1");
// let value = element1.innerHTML;
// let text = element1.value;
// console.log(value);
// // console.log(value);
// let a = "thanh quá là đẹp trai"
// if (a === value) {
//     console.log("đúng");

// } else {
//     console.log("sai");
// }

// let a = [1, 2, 3, 4, 5]
// let b = [6, 7, 8, 9]
// console.log(a.every());


// let writeLog = (message,) => {
//     console.log(message);
//     console.log(thanh);
// }

// // writeLog("thanh", 1)
// writeLog(456)

// fetch('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums')
//     .then(response => response.json())
//     .then(data => {
//         console.log((data));

//         // Lặp qua các bài đăng và hiển thị nội dung của chúng
//         data.forEach(post => {

//             const postTitle = document.createElement('h2');
//             const postBody = document.createElement('p');
//             const postUrl = document.createElement('img')
//             postBody.innerText = post.id;
//             postTitle.innerText = post.title;
//             postUrl.src = post.url


//             postUrl.style.width = "200px"
//             postTitle.style.backgroundColor = "lightblue"

//             document.body.appendChild(postUrl)
//             document.body.appendChild(postBody);
//             document.body.appendChild(postTitle);
//         });
//     })
//     .catch(error => console.error("lỗi rồi ", error));
// let a = []
// document.addEventListener('keydown', (event) => {
//     a.push(event.key)
//     // console.log("kdl " + typeof (even.key));

//     // console.log('Phím vừa được nhấn xuống là: ' + event.key);
//     console.log(a.join(""));
// });
// const emailInput = document.getElementById("email");
// const error = document.getElementById("error");

// emailInput.addEventListener("blur", function () {
//     if (!emailInput.validity.valid) {
//         error.textContent = "Please enter a valid email address";
//     } else {
//         error.textContent = "đúng ";
//     }
// });
// console.log("thanh")

// const usernameInput = document.getElementById("username");
// const message = document.getElementById("message");

// usernameInput.addEventListener("focus", function () {
//     message.textContent = "Please enter your username.";
// });

// usernameInput.addEventListener("blur", function () {
//     message.textContent = "";
// });



// let person = {
//     name: 'John',
//     age: 30,
//     address: '123 Main St, Anytown USA',

// };
// person.entries();
// console.log(person);
// var date = new Date();
// var year = date.getFullYear();
// var Date = date.getDate();


// console.log(Date);



// console.log(year);

// let dateout = document.getElementById("top")
// dateout.innerHTML = Date;
// // document.getElementById.appendChild(dateout)

// let yearout = document.getElementById('thanh');
// // yearout.t
// document.getElementById.appendChild()
// console.log("abc" + 16);
// let element = document.getElementById('top');
// element.textContent = '<strong>Hello world!</strong>';
// element.innerText = '<strong>Hello world!</strong>';
// const myDiv = document.getElementById('myDiv');

// Sử dụng innerText
// console.log(myDiv.innerText); // Kết quả: "Hello world!"

// Sử dụng textContent
// console.log(myDiv.textContent); // Kết quả: "Hello world!"

// const a = prompt("Nhap gia tri : ");
// console.log(a);0


console.log("2");
console.log("1");
// cập nhật đồng hồ số trên trang web sau mỗi giây
// lấy đối tượng hiện tại của ngày giờ
let now = new Date();

// lấy ngày, tháng, năm và giờ, phút, giây
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

// hiển thị ngày tháng năm và đồng hồ đếm giây
document.getElementById("clock").innerHTML = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;

// cập nhật đồng hồ sau mỗi giây
// let interval = setInterval(() => {
//     // lấy đối tượng hiện tại của ngày giờ
//     let now = new Date();

//     // lấy giờ, phút, giây
//     let hour = now.getHours();
//     let minute = now.getMinutes();
//     let second = now.getSeconds();

//     // hiển thị đồng hồ đếm giây
//     document.getElementById("clock").innerHTML = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
// }, 1000);



// Lấy phần tử input và hai nút cộng và trừ
const numberInput = document.getElementById("number");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// Thiết lập giá trị ban đầu cho số
let number = 0;

// Cập nhật giá trị của số trên trang web
function updateNumber() {
    if (number >= 0) {
        numberInput.value = number;
        console.log(number * 220);
        let tong = number * 220
        document.getElementById("tien").innerHTML = tong;
        return tong;
    }
}


// Thêm sự kiện click cho nút cộng
incrementButton.addEventListener("click", () => {
    number++;
    updateNumber();
});

// Thêm sự kiện click cho nút trừ
decrementButton.addEventListener("click", () => {
    number--;
    updateNumber();
});

// Cập nhật giá trị ban đầu cho số
// updateNumber();
const myCheckbox = document.getElementById("myCheckbox");
myCheckbox.addEventListener("change", function () {
    setInterval(() => {
        if (this.checked) {
            // let u = updateNumber();
            // console.log(u);
            document.getElementById("total").innerHTML = updateNumber();
            // updateNumber()
        } else {
            document.getElementById("total").innerHTML = 0

        }
    }, [2000]);
});



function waitUntilEvent(eventType, target) {
    return new Promise(function (resolve, reject) {
        function eventHandler(event) {
            target.removeEventListener(eventType, eventHandler);
            resolve(event);
        }
        target.addEventListener(eventType, eventHandler);
    });
}

waitUntilEvent('load', window)
    .then(function (event) {
        console.log('Page loaded');
    })
    .catch(function (error) {
        console.error('Error occurred:', error);
    });

let cart = [];
function addToCart(productName, price) {
    let product = {
        name: productName,
        price: price
    };
    cart.push(product);
}
function showCart() {
    let cartCount = cart.length;
    alert(`Bạn có ${cartCount} sản phẩm trong giỏ hàng.`);

}
let i = null;
do {
    i = prompt("nhap i ")
} while (i < 10) {
    console.log("ket qua nhap la : ", i);
}