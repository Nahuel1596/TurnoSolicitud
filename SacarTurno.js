var destinatario;
var especialidad;
var hora;
var dia;
var mes;
var laboratorio;

var select;

function Solicitar_Turno()
{
  select=document.getElementById("Destinatario");
  destinatario=select.options[select.selectedIndex].text;

  select=document.getElementById("Hora");
  hora=select.options[select.selectedIndex].text;

  dia=document.getElementById("Dia").value;

  select=document.getElementById("Mes");
  mes=select.options[select.selectedIndex].text;

  select=document.getElementById("Laboratorio");
  laboratorio=select.options[select.selectedIndex].text;

  select=document.getElementById("Especialidad");
  especialidad=select.options[select.selectedIndex].text;

  if(VerificarDia(dia)==true) 
  { 
    if(especialidad=="Psiquiatría")
    {
      if(hora=="05:00" || hora=="05:30" || hora=="06:00" || hora=="06:30" || hora=="07:00" || hora=="07:30" || hora=="08:00" || hora=="08:30" || hora=="09:00" || hora=="09:30" || hora=="10:00" || hora=="10:30" || hora=="11:00" || hora=="11:30" || hora=="12:00" || hora=="12:30")
        if(dia=="4")
          if(mes=="Junio" || mes=="Enero" || mes=="septiembre")
            if(laboratorio=="B36")
                alert("El turno no esta disponible, ingrese a la opcion solicitar sobreturno")    ;
            else
            alert("Turno solicitado, en brebe se recibira una alerta avisando con que medico sera atendido");
          else
          alert("Turno solicitado, en brebe se recibira una alerta avisando con que medico sera atendido");
        else
        alert("Turno solicitado, en brebe se recibira una alerta avisando con que medico sera atendido");
      else
      alert("Turno solicitado, en brebe se recibira una alerta avisando con que medico sera atendido");
    }
    else
    alert("Turno solicitado, en brebe se recibira una alerta avisando con que medico sera atendido"); 
  }
  else
    alert("Dia ingresado no valido");
}

function VerificarDia(texto)
{

    if(texto<=31 && texto>0)
        return true;
    else
        return false;
}