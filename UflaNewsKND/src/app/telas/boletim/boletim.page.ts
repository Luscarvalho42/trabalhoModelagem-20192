import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { BoletimService } from 'src/app/servicos/boletim.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})

export class BoletimPage implements OnInit {

  boletimAtual: ModeloBoletim;

  constructor(public activatedRoute: ActivatedRoute, public servicoBoletim: BoletimService) { 
    const boletimId: number = 
      parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    
      this.boletimAtual = this.servicoBoletim.getPeloId(boletimId);
  }

  ngOnInit() {
  }

}
