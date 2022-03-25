var inputUser = document.querySelector("#input-user");
var inputEmail = document.querySelector("#input-email");
var inputPass = document.querySelector("#input-pass");
var inputComfirm = document.querySelector("#input-comfirm");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}
function showSucces(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInupt) {
  let isEmptyError = false;
  listInupt.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "Không được để trống trường này!");
    } else {
      showSucces(input);
    }
  });
  return isEmptyError;
}

function checkEmail(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
  let isEmail = !regexEmail.test(input.value)
  if (regexEmail.test(input.value)) {
    showSucces(input);
  } else {
    showError(input, "Hãy điền địa chỉ Email");
  }
  return isEmail
}

function checkLeng(input, min,max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input, `Phải có ít nhất ${min} kí tự`)
        return true
    }
    if(input.value.length > max){
        showError(input, `Không vượt quá ${max} kí tự`)
        return true
    }
    return false
}

function checkpassYN(pas,cfpas){
    if(pas.value !== cfpas.value){
        showError(cfpas, 'Mật khẩu chưa trùng khớp')
        return true
    }
    return false
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([
    inputUser,
    inputEmail,
    inputPass,
    inputComfirm,
  ]);

  let isEmail = checkEmail(inputEmail)
  let checkName = checkLeng(inputUser,4,10)
  let checkPass = checkLeng(inputPass,4,10) 
  let checkpasscf = checkpassYN(inputPass, inputComfirm)
  if(isEmptyError || isEmail || checkpasscf || checkPass || checkName){
      
  }else{
      
  }
});
