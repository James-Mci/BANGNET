//Contact Form in PHP
const form = document.querySelector("form");

form.onsubmit = (e)=>{
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "forms/contact.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        
      }else{
        form.reset();
        setTimeout(()=>{
          
        }, 3000);
      }
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}