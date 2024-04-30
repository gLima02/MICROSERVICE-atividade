import { Component } from '@angular/core';
import { EstadoService } from '../../services/estado.service';
import { Estado } from '../../interfaces/Estado';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {

estados:Estado[] = [];
estadoForm: FormGroup = new FormGroup({});

  constructor(private estadoService:EstadoService, private formBuilder: FormBuilder){
    
  }
  
  listar():void{
    //acionada assim que é feita a requisicao
    this.estadoService.listar().subscribe((listaEstado) => (this.estados = listaEstado));
  }


  ngOnInit():void{
    this.listar();
  }
}
