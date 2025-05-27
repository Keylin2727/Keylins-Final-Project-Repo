function openLightbox(imgSrc) {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="close" onclick="document.body.removeChild(lightbox)">&times;</span>
      <img src="${imgSrc}" alt="Project Image" />
    </div>
  `;
  document.body.appendChild(lightbox);
}
