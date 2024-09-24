// card number 1

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
  event.preventDefault();


  const addMoney = getInputFliedById('btn-add-money');
  const donateMoney = getInputFliedById('Donation-money');
  
  if(donateMoney > 0){
        const balance = getTextFliedById('account-balance');

        const myBalance = getTextFliedById('main-balance');

        const newBalance = balance + donateMoney;

        const myNewBalance = myBalance - donateMoney;

        document.getElementById('account-balance').innerText = newBalance;

        document.getElementById('main-balance').innerText = myNewBalance;

        alert('Congratulation !! Succesfully money was Donate.')
         

        // history
        const div = document.createElement('div');
        div.classList.add('bg-slate-50');
        div.innerHTML=`
        <h4 class="text-xl font-bold p-5 rounded-lg border border-inherit">${donateMoney} Taka is Donated for famine-2024 at Nowakhali, Bangladesh</h4>
        <p></p>
        `
        document.getElementById('history-part').appendChild(div);

  }
  
  else{
    alert('falied to donate money')
  }




})


// card number 2

document.getElementById('btn-add-money-2')
.addEventListener('click', function(event){
  event.preventDefault();


  const addMoney = getInputFliedById('btn-add-money-2');
  const donateMoney = getInputFliedById('Donation-money-2');
  
  if(donateMoney > 0){
        const balance = getTextFliedById('account-balance-2');

        const myBalance = getTextFliedById('main-balance');

        const newBalance = balance + donateMoney;

        const myNewBalance = myBalance - donateMoney;

        document.getElementById('account-balance-2').innerText = newBalance;

        document.getElementById('main-balance').innerText = myNewBalance;

        alert('Congratulation !! Succesfully money was Donate.')

       // history
       const div = document.createElement('div');
       div.classList.add('bg-slate-50');
       div.innerHTML=`
       <h4 class="text-xl font-bold p-5 rounded-lg border border-inherit mt-6 mb-6">${donateMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
       <p></p>
       `
       document.getElementById('history-part').appendChild(div);


        
  }
  
  else{
    alert('falied to donate money')
  }




})


// card number 3

document.getElementById('btn-add-money-3')
.addEventListener('click', function(event){
  event.preventDefault();


  const addMoney = getInputFliedById('btn-add-money-3');
  const donateMoney = getInputFliedById('Donation-money-3');
  
  if(donateMoney > 0){
        const balance = getTextFliedById('account-balance-3');

        const myBalance = getTextFliedById('main-balance');

        const newBalance = balance + donateMoney;

        const myNewBalance = myBalance - donateMoney;

        document.getElementById('account-balance-3').innerText = newBalance;

        document.getElementById('main-balance').innerText = myNewBalance;

        alert('Congratulation !! Succesfully money was Donate.')


       // history
       const div = document.createElement('div');
       div.classList.add('bg-slate-50');
       div.innerHTML=`
       <h4 class="text-xl font-bold p-5 rounded-lg border border-inherit mt-6">${donateMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
       <p></p>
       `
       document.getElementById('history-part').appendChild(div);


  }
  
  else{
    alert('Invalied Donate Money.Please try again!')
  }




})




document.getElementById('blog-page')
.addEventListener('click',function(){
  
    window.location.href = './Blog.html';
  
})


