const list = document.querySelectorAll('.list');
function activeLink(){
list.forEach((item) =>
item.classList.remove('active'));
this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

//nav click
function showSection(id) {
    const sections = document.querySelectorAll('.section');
  
    sections.forEach(section => {
      section.classList.remove('visible');
    });
  
    const target = document.getElementById(id);
    target.classList.add('visible');
  
    const loader = target.querySelector('.loader');
    const content = target.querySelector('.content');
  
    if (target.dataset.loaded === "false") {
      loader.style.display = 'block';
      content.style.display = 'none';
  
      setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
        target.dataset.loaded = "true";
      }, 1000); // simulate loading
    } else {
      loader.style.display = 'none';
      content.style.display = 'block';
    }
  }
  
  function goBack() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('visible');
    });
  }

  //Copy button
  function copyToClipboard(button) {
    const input = button.previousElementSibling;
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(input.value)
  }
  
  