var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Designer"], 
    typeSpeed: 100,     
    backSpeed: 100,       
    backDelay: 1000,     
    loop: true          
});
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', function() {
        const imageSrc = this.getAttribute('data-image');
        document.getElementById('skill-image').src = imageSrc;
    });

    skill.addEventListener('mouseout', function() {
        document.getElementById('skill-image').src = 'images/default.jpg';
    });
});
