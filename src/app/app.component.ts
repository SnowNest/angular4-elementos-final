import { Component, OnInit } from '@angular/core';
import { Mensaje } from './mensaje';
import { Estatus } from './estatus'
import { MensajeService } from './mensaje.service';

@Component({
  selector: 'principal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MensajeService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  favoriteSeason: string;
  nombre: string = 'Nestor Martinez';
  mensa: Mensaje;
  mensajes: Mensaje[];
  estatus: Estatus;
  id: string = "dos";

  //Para probar radios
  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
  constructor(private servicio: MensajeService) {
    this.mensa = new Mensaje("uno", 'titulo', 'Mensajito');
    this.estatus = new Estatus(false);

  }

  ngOnInit(): void {
    this.obtenerTodosMensajes();

  }
  obtenerTodosMensajes() {
    return this.servicio.getMensajes().subscribe(mensajes => this.mensajes = mensajes);
  }
  guardarElMensaje() {
    return this.servicio.guardarMensaje(this.mensa).subscribe(estatus => this.estatus = estatus)
  }

  actualizarElMensaje() {
    return this.servicio.actualizarMensaje(this.mensa).subscribe(estatus => this.estatus = estatus);
  }
  borrarElMensaje() {
    return this.servicio.borrarMensaje(this.id).subscribe(estatus => this.estatus = estatus);
  }

  buscarPorId() {
    return this.servicio.getMensaje(this.id).subscribe(mensaje => this.mensa = mensaje);
  }

}