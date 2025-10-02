export async function MenuDespegable(){
  // Cargar la fuente desde Google Fonts
 const link = document.createElement('link');
   link.rel = 'stylesheet';
   link.href = 'https://fonts.googleapis.com/css2?family=Amarante&family=Staatliches&display=swap'; // URL de Google Fonts 
   document.head.appendChild(link);
  
  const res = await fetch('/Public/assets/js/modulos/menu/JSON_menu/menu.json'); // Ruta al archivo JSON
  const links = await res.json(); // Obtener los enlaces del menú desde el archivo JSON, await es para esperar la respuesta de la promesa

  const header = document.querySelector("header");
  header.classList.add("d-flex","justify-content-between","align-items-center");
  const div1 = document.createElement("div");
   div1.classList.add("menu-despegable"); // Clase CSS para el menú despegable
   header.append(div1);
  
  const buttonmenu = document.createElement("button");
   buttonmenu.classList.add("button-menu"); // Clase CSS para el botón del menú
   buttonmenu.textContent = "☰"; // Icono de menú 
   div1.append(buttonmenu);

  const span = document.createElement("span");
   span.className = "text-center"; //
   span.textContent = "MAPTV";
   span.style.fontFamily = "amarante"; // Aplicar la fuente importada
   span.style.fontWeight = 400; // Grosor de la fuente
   span.style.fontSize = "24px";
   span.style.color = "#ffff";
   header.append(span);
  
  const btnRegistro = document.createElement("button");
   btnRegistro.classList.add("btn-registro");
   btnRegistro.textContent ="Registro";
   btnRegistro.href = "/Public/pages/usuarios/sesion/Registro.html";
   header.append(btnRegistro);

  const nav = document.createElement("nav");
   nav.classList.add("menu-ul"); // Clase CSS para la navegación del menú
   nav.style.display = "none"; // Ocultar el menú inicialmente

  for(let i=0; i < links.menu.length; i++){
    const li = document.createElement("li"); 
     li.textContent = links.menu[i].nombre;
     li.href = links.menu[i].enlace ; // Asignar la URL del enlace
     li.classList.add("menu-item"); // Clase CSS para los ítems del menú
     nav.append(li);
  }
 buttonmenu.append(nav);  

  function toggleMenu() {
    buttonmenu.classList.toggle("open"); 

    if (nav.style.display === "none") {
      nav.style.display = "flex"; // Mostrar el menú
    } else {
      nav.style.display = "none"; // Ocultar el menú
     } 
  }
  buttonmenu.addEventListener("click", toggleMenu);

  function Registro(){
    window.location.href = "/Public/pages/usuarios/sesion/Registro.html"; 
    //windos.location.href sirve para redireccionar a otra página
  }
  btnRegistro.addEventListener("click", Registro);

}