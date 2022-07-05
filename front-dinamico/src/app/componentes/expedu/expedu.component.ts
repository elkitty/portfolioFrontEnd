import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-expedu',
  templateUrl: './expedu.component.html',
  styleUrls: ['./expedu.component.css']
})
export class ExpeduComponent implements OnInit {
  expList: any;
  eduList: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.expList=data.experience;
      this.eduList=data.education;
    });
  }

}
