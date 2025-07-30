document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('lightbox').style.display = 'flex';
        document.getElementById('lightbox-img').src = img.src;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
