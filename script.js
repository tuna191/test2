//  code xử lý nút next và prev
const modal = document.querySelector(".modal");
const images = document.querySelectorAll("#content img");
const imgShow = document.querySelector(".modal img");

const prev = document.querySelector(".right");
const next = document.querySelector(".next");

const close = document.querySelector(".close");

let currentIndex = 0;

// lặp từng ảnh với addEventListener
images.forEach((img , index) =>{ // truyền vào 1 arrow function, đối số đầu là giá trị hiện tại , đối 2 là index 
img.addEventListener("click",() =>{ // lắng nghe event click vô  ảnh
    currentIndex = index; 
    showModal();// call function
})
} );

function showModal(){
    currentIndex == images.length - 1 // xử lý ẩn nút next
    ? next.classList.add("hide")
    : next.classList.remove("hide");

    currentIndex == 0 // xử lý ẩn nút prev
    ? prev.classList.add("hide")
    : prev.classList.remove("hide");

    modal.classList.remove("show"); // khi bấm vào ảnh thì sẽ remove cái display none
    imgShow.src = images[currentIndex].src;//hiện ảnh hiện tại
}

close.addEventListener("click",()=>{ //sử lý cho nút close
    modal.classList.add("show");
});

prev.addEventListener("click",()=>{ //xử lý nút prev
    currentIndex != 0 ? currentIndex-- : undefined;
    showModal();
})
next.addEventListener("click",()=>{
    currentIndex != images.length - 1 ? currentIndex++ : undefined;
    showModal();
})


