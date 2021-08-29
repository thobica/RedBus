import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible: boolean = false;

  Sources = ['Adambakkam','Adayar', 'Alandur','Ambatthur',  'Anna Nagar', 'Ashok Nagar', 'Avadi', 'BroadWay', 'Chromepet', 'Egmore', 'Guindy', 'Injampakkam',
    'K.K. Nagar', 'Kodampakkam', 'Korukupet', 'Mathavaram', 'Mambalam', 'Medavakkam', 'Mylapore', 'Nungampakkam', 'Pallavaram', 'Perambur',
    'Perungudi', 'Royapettah', 'Saidapet', 'Sholinganallur','Tambaram', 'T.Nagar', 'Teynampet', 'Triplicane', 'Vadapalani', 'Vandalur','Velachery'
    , 'Vyasarpadi', 'Washermanpet'
  ];

  Destinations = ['Adambakkam','Adayar', 'Alandur','Ambatthur',  'Anna Nagar', 'Ashok Nagar', 'Avadi', 'BroadWay', 'Chromepet', 'Egmore', 'Guindy', 'Injampakkam',
    'K.K. Nagar', 'Kodampakkam', 'Korukupet', 'Mathavaram', 'Mambalam', 'Medavakkam', 'Mylapore', 'Nungampakkam', 'Pallavaram', 'Perambur',
    'Perungudi', 'Royapettah', 'Saidapet', 'Sholinganallur','Tambaram', 'T.Nagar', 'Teynampet', 'Triplicane', 'Vadapalani', 'Vandalur','Velachery'
    , 'Vyasarpadi', 'Washermanpet'
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.visible = true
    }, 3000);
  }
}
