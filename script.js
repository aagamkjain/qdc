
document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.className = "cursor-star";
  star.style.left = e.pageX + "px";
  star.style.top = e.pageY + "px";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
});

const style = document.createElement('style');
style.innerHTML = `
.cursor-star {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffe81f;
  pointer-events: none;
  box-shadow: 0 0 10px #ffe81f, 0 0 20px #ffe81f;
  animation: starFade 1s forwards;
}
@keyframes starFade {
  from { opacity:1; transform: scale(1); }
  to { opacity:0; transform: scale(2); }
}`;
document.head.appendChild(style);
