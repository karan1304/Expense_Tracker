let expenses=[];


function AddExpense()
{
    const expenseInput=document.getElementById("expense");
    const amountInput=document.getElementById("amount");

    const expenseName=expenseInput.value.trim();
    const amount=parseFloat(amountInput.value);

    if(expenseName===''||isNaN(amount)||amount<=0)
    {
        alert("please enter a valid and expense amount");
        return;
    }

    const expense=
    {
        name:expenseName,
        amount:amount
    };

    expenses.push(expense);
    updateExpenseList();
    updateTotalExpense();
    expenseInput.value='';
    amountInput.value='';
}

function updateExpenseList()
{

const expenseList=document.getElementById('list');
expenseList.innerHTML='';
expenseList.style.border="2px solid rgb(3,46,3)";
expenseList.style.padding="20px";

expenses.forEach(expense=>
    {
        const listItem=document.createElement('li');
        const innerItem=document.createElement('span');
       
        listItem.textContent=`${expense.name}`;
        innerItem.textContent=`$${expense.amount.toFixed(2)}`;
        
        listItem.appendChild(innerItem);
        listItem.style.borderBottom="1px solid rgb(3,46,3)";
        expenseList.appendChild(listItem);
    }
    );

}

function updateTotalExpense()
{
    const totalExpenseElement=document.getElementById("totalExpense");
    const totalAmount=expenses.reduce((total,expense) => total + expense.amount,0);
    // totalAmount.style.color="red";
    totalExpenseElement.style.border="2px solid rgb(3,46,3)";
    totalExpenseElement.textContent=`Total Expense : $${totalAmount.toFixed(2)}`

}

document.getElementById("expense").addEventListener('keypress',function(e)
{
    if(e.key === 'Enter')
    {
        AddExpense();
    }
});

document.getElementById("amount").addEventListener('keypress',function(e)
{
    if(e.key === 'Enter')
    {
        AddExpense();
    }
});
