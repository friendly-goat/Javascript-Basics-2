///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1//////////////////// done
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc,cv) => {
    return acc + cv.price}, 0)

// console.log(summedPrice)
// 26.97

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

let calcFinalPrice = (cartTotal, couponValue, tax) => {
    cartTotal = cartTotal * (1 + tax)
    cartTotal = cartTotal - couponValue    
}




//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    I would have my customer have 5 important info
    name - string, full name of customer
    usrId - string, not int so that usrId may include letters/chars if needed
    member - bool, yes or no does this customer have a membership
    number of items in cart - int, simply number of items
    total price - int

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Alex Baranoff',
    usrId: '123ABC',
    memberStatus: true,
    numItems: 5,
    totPrice: 135
}
// console.log(customer)
/*
{
  name: 'Alex Baranoff',
  usrId: '123ABC',
  memberStatus: true,
  numItems: 5,
  totPrice: 135
}
*/

// done