const dom = () => {
    console.log(document.querySelector(".profile-menu-container"))
const x = document.querySelector(".profile-menu-container");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
  };


export default dom;