const dragArea = document.querySelector(".drag-area");
const dragText = document.getElementById("drag-text");
const inputBtn = document.getElementById("input-btn");
let myfile;
function browse() {
  inputBtn.click();
}

inputBtn.addEventListener("change", function () {
  myfile = this.files[0];
  dragArea.classList.add("active");
  showMe();
});

dragArea.addEventListener("dragover", function (event) {
  event.preventDefault();
  dragArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});
dragArea.addEventListener("dragleave", function (event) {
  event.preventDefault();
  dragArea.classList.remove("active");
  dragText.textContent = "Drag and drop";
});
dragArea.addEventListener("drop", function (event) {
  event.preventDefault();
  myfile = event.dataTransfer.files[0];
  showMe();
});

function showMe() {
  let filetype = myfile.type;
  let VaildEx = ["image/jpeg", "image/jpg", "image/png"];

  if (VaildEx.includes(filetype)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let imgUrl = fileReader.result;
      let img = `<img src="${imgUrl}" alt="">`;

      dragArea.innerHTML = img;
    };
    fileReader.readAsDataURL(myfile);
  } else {
    alert("Please best photo insert a drag and drop");
    dragArea.classList.remove("active");
    dragText.textContent = "Drag & Drop";
  }
}
