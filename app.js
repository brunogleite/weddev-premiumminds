
var formHeader = document.querySelectorAll(".dropdown__header")
var dropdown = document.querySelectorAll(".dropdown__form")
var saveBtn = document.querySelector(".btn-primary")
var cancelBtn = document.querySelector(".btn-ghost")


formHeader.forEach((dropdown) => dropdown.addEventListener("click", contentArray))

function contentArray(){

    if(this.classList.contains("active")) return this.classList.remove("active");
    this.classList.add("active")
}


saveBtn.addEventListener("click", () => {
    alert("Saved User Information")
})

cancelBtn.addEventListener("click", () => {
    alert("Canceled User Information Form")
})
