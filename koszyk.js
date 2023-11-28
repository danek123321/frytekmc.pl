
// Tablica przechowująca produkty w koszyku
let cartItems = [];

// Funkcja do dodawania produktu do koszyka
function addToCart(button) {
  const productDiv = button.parentElement;
  const productName = productDiv.dataset.product;
  const productPrice = parseFloat(productDiv.dataset.price);
  
  // Dodaj produkt do tablicy koszyka
  cartItems.push({ name: productName, price: productPrice });
  
  // Odśwież wyświetlanie zawartości koszyka
  displayCartItems();
}

// Funkcja do wyświetlania zawartości koszyka
function displayCartItems() {
  const cartElement = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");
  
  // Wyczyść zawartość koszyka przed odświeżeniem
  cartElement.innerHTML = "";
  
  // Dodaj każdy produkt do listy koszyka
  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.price.toFixed(2)} PLN`;
    cartElement.appendChild(listItem);
  });
  
  // Oblicz i wyświetl sumę zamówienia
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = `Suma: ${totalPrice.toFixed(2)} PLN`;
}

// Funkcja obsługi płatności
function submitPayment(event) {
  event.preventDefault();

  // Pobierz dane płatności
  const cardNumber = document.getElementById("cardNumber").value;
  const expirationDate = document.getElementById("expirationDate").value;
  const cvv = document.getElementById("cvv").value;

  // Tutaj możesz użyć odpowiednich API płatności lub backendu do przetwarzania płatności.
  // W tym przykładzie, wyświetlamy jedynie potwierdzenie płatności w konsoli.
  console.log("Dane płatności:");
  console.log("Numer karty: " + cardNumber);
  console.log("Data ważności: " + expirationDate);
  console.log("CVV: " + cvv);

  // Wyczyść koszyk po wykonaniu płatności
  cartItems = [];
  displayCartItems();
  alert("Dziękujemy za zakupy! Zamówienie zostało przetworzone.");
}

// Funkcja do animacji przycisków "Dodaj do koszyka" i "Zapłać"
function animateButton(button) {
  gsap.to(button, {
    scale: 1.1, // Powiększenie przycisku do 1.1x
    duration: 0.3, // Czas trwania animacji (0.3 sekundy)
    ease: "power2.out", // Wygładzenie animacji
    yoyo: true, // Powtórzenie animacji w drugą stronę
    repeat: 1 // Liczba powtórzeń (1 raz)
  });
}

// Funkcja do obsługi kliknięcia na przycisk "Dodaj do koszyka"
function handleAddToCartClick() {
  // Dodajmy tutaj logikę dodawania przedmiotu do koszyka
  console.log("Przedmiot dodany do koszyka!");

  // Wywołujemy animację dla przycisku "Dodaj do koszyka"
  animateButton(document.querySelector(".add-to-cart-btn"));
}

// Funkcja do obsługi kliknięcia na przycisk "Zapłać"
function handlePayClick() {
  // Dodajmy tutaj logikę płatności
  console.log("Zapłacono!");

  // Wywołujemy animację dla przycisku "Zapłać"
  animateButton(document.querySelector(".pay-btn"));
}
