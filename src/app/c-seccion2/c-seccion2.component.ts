import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit {
  formEnviarComentario: FormGroup = new FormGroup({
    nombre: new FormControl('nombre', Validators.required),
    comentario: new FormControl('comentario', [Validators.required, Validators.minLength(10)])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    }


  get f(){return this.formEnviarComentario.value}
}

  // EnviarComentario(){
  //   console.log('Usuario: ' + nombre + 'comentario: ' + comentario);
  // }

