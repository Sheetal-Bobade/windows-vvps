    //   accordian
    const panelItems = document.querySelectorAll(".panel-item");

    panelItems.forEach(item => {
       
        const title = item.querySelector(".panel-title");
        const content = item.querySelector(".accordian-content");

        title.addEventListener('click' , () => {
            for(var i = 0 ; i < panelItems.length ; i++){
                if(panelItems[i] != item){
                    panelItems[i].classList.remove('active');
                }
                else {
                    item.classList.toggle('active');
                }
            }
        });
    });


    // typing-Text


    const texts =  [ "Deploy your Windows VPS in USA or Canada", "Reinstall a Linux VPS from the client area", "Shared Hosting with WHM Cpanel user login"]
  
  const typingContainer = document.getElementById("typing-container");

  let textIndex = 0; // Index of the current string
  let charIndex = 0; // Index of the current character
  let isErasing = false; // Track whether the effect is erasing

  function typeEffect() {
    // Get the current text
    const currentText = texts[textIndex];

    // Update the text in the container
    if (isErasing) {
      typingContainer.innerHTML = currentText.slice(0 , charIndex--); // Erase character
    } else {
      typingContainer.innerHTML = currentText.slice(0 , charIndex++); // Type character
    }

    // Control typing/erasing speed
    const speed = isErasing ? 50 : 100; // Typing is slower, erasing is faster

    // Determine what to do next
    if (!isErasing && charIndex === currentText.length) {
      // Pause before starting to erase
      isErasing = true;
      setTimeout(typeEffect, 1000); // 1-second pause after typing
    } else if (isErasing && charIndex === 0) {
      // Move to the next text after erasing
      isErasing = false;
      textIndex = (textIndex + 1) % texts.length; // Loop back to the first text
      setTimeout(typeEffect, 500); // Short pause before typing the next text
    } else {
      setTimeout(typeEffect, speed); // Continue typing/erasing
    }
  }

  // Start the typing effect
  typeEffect();



// toggle


  const toggleSwitch = document.getElementById('toggleSwitch');
  const onLabel = document.getElementById('on-label');
  const offLabel = document.getElementById('off-label');
  
  toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
      // Change the colors when the switch is ON
      onLabel.style.color = '#ccc'; // ON label color
      offLabel.style.color = '#f5633e'; // OFF label color
    } else {
      // Change the colors when the switch is OFF
      onLabel.style.color = '#f5633e'; // ON label color
      offLabel.style.color = '#ccc'; // OFF label color
    }
  });




    //  toggle2

document.addEventListener("change" , function PriceUpdation() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const monthlyLabel = document.getElementById('on-label');
    const YearlyLabel = document.getElementById('off-label');
    const MonthlyPlans = document.querySelector('.monthly');
    const YearlyPlans = document.querySelector('.yearly');
    const PriceChange = document.querySelectorAll('.price2');

  if(toggleSwitch.checked){
    MonthlyPlans.style.display = 'none';
    YearlyPlans.style.display = 'block';

    monthlyLabel.classList.remove('active');
    YearlyLabel.classList.add('active');
    
   PriceChange.forEach(el => el.style.color = "#f5633e");
  } else {
            
    MonthlyPlans.style.display = 'flex';
    YearlyPlans.style.display = 'none';
 
    monthlyLabel.classList.remove('active');
    YearlyLabel.classList.add('active');

    PriceChange.forEach(el => el.style.color = "#f5633e");
  }


});


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".attr-nav .side-menu");
  const navbarCollapse = document.querySelector("#navbar-menu");

  if (toggleButton && navbarCollapse) {
      toggleButton.addEventListener("click", function () {
          navbarCollapse.classList.toggle("show");
      });
  }
});


window.onscroll = function() { stickyNavbar() };

var navbar = document.querySelector(".wrap-sticky");
var stickyPoint = navbar.offsetTop;

function stickyNavbar() {
if (window.pageYOffset > stickyPoint) {
navbar.classList.add("sticky");
} else {
navbar.classList.remove("sticky");
}
}






