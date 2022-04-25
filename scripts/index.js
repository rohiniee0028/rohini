// Store the wallet amount to your local storage with key "amount"

document.getElementById("add_to_wallet").addEventListener("click",storemoney);

function storemoney() {
  let Value = document.getElementById("amount").value;
  
  document.getElementById("wallet").innerText=Value;
  localStorage.setItem("amount",JSON.stringify(Value));
}