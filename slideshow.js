var slideIndex = 0;  // Zeiger auf die aktuelle Folie
carousel();

function carousel() {
  var index;  // zählvariable - Scheleife!

  // Wir holen unsere Elemente ab, die die Klasse "mySlides" haben
  var slides = document.getElementsByClassName("mySlides");

  // Zählschleife: Wir durchlaufen alle Slides
  // Grundstellung: Alle Slides verstecken
  for (index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }

  // Zähler um 1 erhöhen
  slideIndex++;

  // Zählerstand prüfen: Wenn wir am Ende sind, wieder bei 1 anfangen
  if (slideIndex > slides.length) {
      slideIndex = 1
  }

  // Element sichtbar machen, das zu aktuellem Zähler gehört
  slides[slideIndex-1].style.display = "block";

  // Rufe diese Funktion in 2 Sekunden wieder auf!
  setTimeout(carousel, 2000); // Change image every 2 seconds
}