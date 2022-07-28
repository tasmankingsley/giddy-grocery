// Funtion to change placeholder image source dependant on id
function showPic(area) {
  const subCat = area.getAttribute('id');
  const placeholder = document.getElementById('placeholder');
  const catImg = document.getElementById('img0');

  if (subCat === 'FrozenFood') {
    placeholder.src = 'images/image1.png';
    catImg.src = 'images/image0_1.png';
    document.getElementById('placeholder').useMap = '#map1';
  } else if (subCat === 'FreshFood') {
    placeholder.src = 'images/image2.png';
    catImg.src = 'images/image0_2.png';
    document.getElementById('placeholder').useMap = '#map2';
  } else if (subCat === 'Beverages') {
    placeholder.src = 'images/image3.png';
    catImg.src = 'images/image0_3.png';
    document.getElementById('placeholder').useMap = '#map3';
  } else if (subCat === 'HomeHealth') {
    placeholder.src = 'images/image4.png';
    catImg.src = 'images/image0_4.png';
    document.getElementById('placeholder').useMap = '#map4';
  } else if (subCat === 'PetFood') {
    placeholder.src = 'images/image5.png';
    catImg.src = 'images/image0_5.png';
    document.getElementById('placeholder').useMap = '#map5';
  }
}

// Passes through correct id with mouseover event for the categories
const frozenFood = document.getElementById('FrozenFood');
frozenFood.addEventListener('mouseover', () => {
  showPic(frozenFood);
});

const freshFood = document.getElementById('FreshFood');
freshFood.addEventListener('mouseover', () => {
  showPic(freshFood);
});

const beverages = document.getElementById('Beverages');
beverages.addEventListener('mouseover', () => {
  showPic(beverages);
});

const homeHealth = document.getElementById('HomeHealth');
homeHealth.addEventListener('mouseover', () => {
  showPic(homeHealth);
});

const petFood = document.getElementById('PetFood');
petFood.addEventListener('mouseover', () => {
  showPic(petFood);
});

function loadIcon(str) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function iconRequest() {
    if (this.readyState === 4 && this.status === 200) {
      const icon = document.getElementById('itemIcon');
      icon.src = this.responseText;
    }
  };

  xhttp.open('GET', `http://localhost/server/loadIcon.php?q=${str}`, true);
  xhttp.send();
}

// Loads content from database to top table via php script using AJAX
function loadTopFrame(str) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function tableRequest() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('TopFrame').innerHTML = this.responseText;
    }
  };

  xhttp.open('GET', `http://localhost/server/loadDetails.php?q=${str}`, true);
  xhttp.send();
  // Make the add to cart button have the items id as its value
  document.getElementById('AddItem').value = str;
  loadIcon(str);
}

// JQuery calculate total in shopping cart
function calculateTotal() {
  $(document).ready(() => {
    let num = 0;
    $('.CartPrice').each(function getFloat() {
      num += parseFloat($(this).text());
    });
    const totalValue = num.toFixed(2);
    document.getElementById('Total').innerHTML = `$${totalValue}`;
    document.getElementById('TotalCheck').innerHTML = `$${totalValue}`;
  });
}

// Gets the number of rows in the item tables and displays No. of items
function numberItems() {
  let amount = 0;
  $('.CartAmount').each(function sumAmount() {
    amount += parseFloat($(this).text()); // Or this.innerHTML, this.innerText
  });
  $('#ItemsCart').html(amount);
  $('#ItemsCheck').html(amount);
}

function addToCart(str) {
  const xhttp = new XMLHttpRequest();
  const uniqueRowID = `ID${str}`;
  const amountCellID = `AM${str}`;
  const priceID = `UP${str}`;
  const totalID = `TP${str}`;

  // Get the amount selected from details table
  let amountCellIDSum = parseFloat(document.getElementById('amountVal').value);

  if (amountCellIDSum >= 1 && amountCellIDSum <= 20) {
    // Second request AJAX function
    xhttp.onreadystatechange = function secondRequest() {
      if (this.readyState === 4 && this.status === 200) {
        const added = this.responseText;

        // If ID element (item row in cart) is present, update values
        // Else add a new item row and update values
        if ($(`#${uniqueRowID}`).length > 0) {
          // Gets the number amount already inside the item row
          const amount = parseFloat(document.getElementById(`${amountCellID}`).innerHTML);
          // Adds with the amount selected by user, and updates value
          amountCellIDSum += amount;
          document.getElementById(`${amountCellID}`).innerHTML = amountCellIDSum;

          const price = parseFloat(document.getElementById(`${totalID}`).innerHTML);
          const totalCellPrice = (price / amount) * amountCellIDSum;
          document.getElementById(`${totalID}`).innerHTML = totalCellPrice.toFixed(2);
        } else {
          // Inserts new item row and updates values
          document.getElementById('phpTable').insertAdjacentHTML('afterbegin', added);
          document.getElementById(`${amountCellID}`).innerHTML = amountCellIDSum;

          const price = parseFloat(document.getElementById(`${totalID}`).innerHTML);
          const totalCellPrice = price * amountCellIDSum;
          document.getElementById(`${totalID}`).innerHTML = totalCellPrice.toFixed(2);
        }

        calculateTotal();
        numberItems();

        // Clears the cart empty message
        document.getElementById('CartEmpty').innerHTML = '';
      }
    };
    xhttp.open('GET', `http://localhost/server/loadCart.php?q=${str}`, true);
    xhttp.send();
  } else {
    alert('Please enter a value between 1 and 20');
  }
}

// JQuery to clear the cart rows on Clear Cart button click
$('#ClearCart').click(() => {
  $('.CartRow').remove();
});

// Clear cart price total
function clearTotal() {
  document.getElementById('Total').innerHTML = '';
  document.getElementById('TotalCheck').innerHTML = '';
  $('#ItemsCart').html('');
  $('#ItemsCheck').html('');
}

// Open and close Checkout form
function openForm() {
  document.getElementById('form-div').style.display = 'block';
  $('#phpTable').insertAfter('#CheckoutTableBody');
}
// Close function, no window display by default. Clears error messages on close
function closeForm() {
  document.getElementById('form-div').style.display = 'none';
  document.getElementById('error-text').innerHTML = '';
  $('#phpTable').insertAfter('#CartTable');
}

// Check if there are any items in the cart
function checkCart() {
  const cartRows = document.getElementById('phpTable').rows.length;
  if (cartRows < 1) {
    document.getElementById('CartEmpty').innerHTML = '* Please add items to your cart before checkout.';
  } else {
    openForm();
  }
}

// Close the thank you div
function closeThankYou() {
  document.getElementById('thankyou').style.display = 'none';
  document.getElementById('form-div').style.display = 'none';
  document.getElementById('error-text').innerHTML = '';
  $('#phpTable').insertAfter('#CartTable');
}

// Validates form, returns error message if missing info
function validateForm() {
  if (document.getElementById('name').value === '') {
    document.getElementById('error-text').innerHTML = '* Please enter your Name';
    document.getElementById('thankyou').style.display = 'none';
    return false;
  }
  if (document.getElementById('address').value === '') {
    document.getElementById('error-text').innerHTML = '* Please enter your Address';
    document.getElementById('thankyou').style.display = 'none';
    return false;
  }
  if (document.getElementById('suburb').value === '') {
    document.getElementById('error-text').innerHTML = '* Please enter your Suburb';
    document.getElementById('thankyou').style.display = 'none';
    return false;
  }
  if (document.getElementById('state').value === '') {
    document.getElementById('error-text').innerHTML = '* Please enter your State';
    document.getElementById('thankyou').style.display = 'none';
    return false;
  }
  if (document.getElementById('country').value === '') {
    document.getElementById('error-text').innerHTML = '* Please enter your Country';
    document.getElementById('thankyou').style.display = 'none';
    return false;
  }

  function emailIsValid(emailStr) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  }

  if (emailIsValid(document.getElementById('email').value) === false) {
    document.getElementById('error-text').innerHTML = '* Please enter a valid Email (username@mailserver.domain)';
    document.getElementById('thankyou').style.display = 'none';
    return false;
  }
  document.getElementById('error-text').innerHTML = '';

  // Gets the customers name from the form and displays a thank you message in a new window
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  document.getElementById('thankyou-text').innerHTML = `<b>${name}<b><br>Thank you for your purchase!<br><br>
  Your receipt has been sent to <br><i>${email}<i><br><br>Have a nice day!`;
  document.getElementById('thankyou').style.display = 'block';
  return true;
}
