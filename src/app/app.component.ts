import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstadoComponent } from './componentes/estado/estado.component';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './componentes/pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EstadoComponent, PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj-services';
}
