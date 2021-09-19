$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


  var enviar = function(){

    var categoria = document.getElementById("combox-categoria" );
    var tipo = document.getElementById("radio-type");
    var compania = document.getElementById("input-company");
    var logo = document.getElementById("input-logo" );
    var url = document.getElementById("input-url");
    var posicion = document.getElementById("input-position");
    var localizacion = document.getElementById("input-location");
    var descripcion  = document.getElementById("area-description");
    var tabla1 = document.getElementById("tabladesing");
    var tabla2 = document.getElementById("tablaProgramacion1");

    alert('sdkansdlkjn');

    if(compania.value != "" && posicion.value != "" && localizacion.value != ""){

      if(categoria.value == "Desing"){

        row = document.createElement('tr');
        data = document.createElement('td');
        data.innerText = Location.value;
        row.appendChild(data);
       
        data = document.createElement('td');
        data.innerText = posicion.value;
        row.appendChild(data);

        data = document.createElement('td');
        data.innerText = compania.value;       
        row.appendChild(data);

        tabla1.appendChild(row);
        alert('todo bien 1');



      } else  {

        row = document.createElement('tr');
        data = document.createElement('td');
        data.innerText = Location.value;
        row.appendChild(data);
       
        data = document.createElement('td');
        data.innerText = posicion.value;
        row.appendChild(data);

        data = document.createElement('td');
        data.innerText = compania.value;       
        row.appendChild(data);

        tabla2.appendChild(row);
        alert('todo bien 2');

      }

    }
  };