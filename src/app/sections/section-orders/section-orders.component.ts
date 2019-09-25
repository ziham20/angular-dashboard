import { Component, OnInit } from '@angular/core';
import { Order} from '../../../Models/Order'

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[]=
  [
    {id:1, customer: 
      {id:1, name: 'ziham',state:'Col', email:'ziham@gmail.com'},
      total: 230, placed: new Date(2019,8,23),fulfilled: new Date(2019,8,28) },
      {id:2, customer: 
        {id:2, name: 'ziham',state:'Col', email:'ziham@gmail.com'},
        total: 230, placed: new Date(2019,8,23),fulfilled: new Date(2019,8,28) },
        {id:3, customer: 
          {id:3, name: 'ziham',state:'Col', email:'ziham@gmail.com'},
          total: 230, placed: new Date(2019,8,23),fulfilled: new Date(2019,8,28) },
          {id:4, customer: 
            {id:4, name: 'ziham',state:'Col', email:'ziham@gmail.com'},
            total: 230, placed: new Date(2019,8,23),fulfilled: new Date(2019,8,28) },
            {id:5, customer: 
              {id:5, name: 'ziham',state:'Col', email:'ziham@gmail.com'},
              total: 230, placed: new Date(2019,8,23),fulfilled: new Date(2019,8,28) },
    ]

  ngOnInit() {
  }

}
