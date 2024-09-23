document.getElementById('btn-add-money')
.addEventListener('click', function(){
  
const donateMoney = document.getElementById('Donation-money').value ;
const addDonateMoney = parseFloat(donateMoney);
console.log(donateMoney)

if(donateMoney > 0 ){

  const balance = document.getElementById('account-balance').innerText;
  const balanceNumber = parseFloat(balance);

  const myBalance = document.getElementById('main-balance').innerText;
  const myBalanceNumber = parseFloat(myBalance);

  const myMainBalance = myBalanceNumber - addDonateMoney;

  const newBalance = addDonateMoney + balanceNumber;


  document.getElementById('account-balance').innerText = newBalance;
  document.getElementById('main-balance').innerText = myMainBalance;

}

else {
  alert('failed to donate money')
}

})