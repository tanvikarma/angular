import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { count, interval } from 'rxjs';
import { ServiceDataService } from 'src/app/service-data.service';

@Component({
  selector: 'app-observable-eg',
  templateUrl: './observable-eg.component.html',
  styleUrls: ['./observable-eg.component.scss']
})
export class ObservableEgComponent implements OnInit{
posts: any[] = [];


  constructor(private ServiceDataService: ServiceDataService) {
  // console.log('count',count);
  
  }

  ngOnInit(): void {
  this.ServiceDataService.getPosts().subscribe({
    next:(data:any) => {
      console.log('data recived', data);
      this.posts = data;
    },
    error: (err) => {
      console.log('Error', err);
      
    },
    complete : () => {
      console.log('request complete');
      
    }
  });

    // this.route.data.subscribe((data:Data) => {
    //   // interval(1000).subscribe(count => {
    //   //   console.log(count);
        
    //   // })
      
    // })
  }
}


// .................
// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   posts: any[] = [];

//   constructor(private dataService: DataService) {}

//   ngOnInit(): void {
//     // Subscribe to the Observable from the service
//     this.dataService.getPosts().subscribe({
//       next: (data) => {
//         console.log('Data received:', data);
//         this.posts = data;
//       },
//       error: (err) => {
//         console.error('Error:', err);
//       },
//       complete: () => {
//         console.log('Request complete');
//       }
//     });
//   }
// }
