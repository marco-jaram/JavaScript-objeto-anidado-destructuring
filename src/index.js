import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>JavaScript</h1>
<div>
  <h3>Anidaciones en objetos y acceso con destructuring</h3>
</div>
`;

//OBJETOS

const web = {
  nombre: "web local",
  linkks: {
    enlace: "www.weblocalmx.com"
  },

  redesSocailes: {
    youtube: {
      enlace: "youtube.com/weblocal",
      nombre: "weblocal youtube"
    }
  }
};
//accediendo a enlace de redessociales yuotube
//simplemente es ir desde el padre a los hijos
console.log(web.redesSocailes.youtube.enlace);

//tambien se puede asi si queremos
const enlaceYT = web.redesSocailes.youtube.enlace;
console.log(enlaceYT);

//objeto que quermos destruir
const { enlace, nombre } = web.redesSocailes.youtube;
console.log(enlace);
console.log(nombre);
