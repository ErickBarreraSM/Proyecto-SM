import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombosService } from 'src/app/api/combos.service';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit{

  products: any[] = [];
  

  constructor(private combosservice: CombosService, private route: Router){ }

  ngOnInit(): void {
 

    this.combosservice.getProducts().subscribe((data) => {
      this.products = data.body; // data.body contiene la lista de productos
    });

  }

}
