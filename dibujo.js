var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    lienzo.lineWidth=(3);
}
dibujarLinea("black", 100, 50, 400, 50);
dibujarLinea("black", 100, 50, 400, 50);
dibujarLinea("#000000", 400, 50, 450, 150);
dibujarLinea("#000000", 100, 50, 50, 150);
dibujarLinea("#000000", 50, 200, 450, 200);
dibujarLinea("#000000", 50, 150, 50, 200);
dibujarLinea("#000000", 450, 150, 450, 200);

dibujarLinea("#000000", 450, 200, 250, 500);
dibujarLinea("#000000", 50, 200, 250, 500);
dibujarLinea("#000000", 250, 50, 250, 500);

dibujarLinea("#000000", 100, 50, 150, 200);
dibujarLinea("#000000", 100, 50, 100, 200);
dibujarLinea("#000000", 100, 50, 250, 200);

dibujarLinea("#000000", 100, 50, 350, 200);
dibujarLinea("#000000", 400, 50, 400, 200);
dibujarLinea("#000000", 400, 50, 350, 200);

dibujarLinea("#000000", 400, 50, 250, 200);
dibujarLinea("#000000", 400, 50, 150, 200);


/* Parte superior */

dibujarLinea("#000000", 250, 50, 50, 200);
dibujarLinea("#000000", 250, 50, 150, 200);
dibujarLinea("#000000", 250, 50, 100, 200);
dibujarLinea("#000000", 250, 50, 350, 200);
dibujarLinea("#000000", 250, 50, 400, 200);
dibujarLinea("#000000", 250, 50, 450, 200);
/* parte inferior */
dibujarLinea("#000000", 100, 200, 250, 500);
dibujarLinea("#000000", 150, 200, 250, 500);
dibujarLinea("#000000", 350, 200, 250, 500);
dibujarLinea("#000000", 400, 200, 250, 500);

dibujarLinea("#000000", 250, 300, 400, 200);
dibujarLinea("#000000", 250, 300, 100, 200);
dibujarLinea("#000000", 250, 300, 150, 200);
dibujarLinea("#000000", 250, 300, 350, 200);

dibujarLinea("#000000", 250, 300, 300, 350);
dibujarLinea("#000000", 250, 300, 200, 350);
dibujarLinea("#000000", 200, 350, 50, 200);
dibujarLinea("#000000", 200, 350, 100, 200);

dibujarLinea("#000000", 200, 350, 250, 200);
dibujarLinea("#000000", 300, 350, 450, 200);
dibujarLinea("#000000", 300, 350, 250, 200);

dibujarLinea("#000000", 300, 350, 338, 370);

dibujarLinea("#000000", 200, 350, 162, 370);
dibujarLinea("#000000", 162, 370, 100, 200);
dibujarLinea("#000000", 338, 370, 400, 200);

dibujarLinea("#000000", 300, 350, 400, 200);

dibujarLinea("#000000", 250, 400, 350, 300);
dibujarLinea("#000000", 250, 400, 150, 300);

dibujarLinea("#000000", 200, 350, 200, 426);
dibujarLinea("#000000", 300, 350, 300, 426);

dibujarLinea("#000000", 450, 150, 400, 200);
dibujarLinea("#000000", 50, 150, 100, 200);





