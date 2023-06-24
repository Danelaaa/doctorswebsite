import { Component } from '@angular/core';
import { doctors } from 'src/app/models/doctors';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  doctors: doctors[] = [];
  constructor( private doctorsService : DoctorsService) {}

  ngOnInit() :void{
    this.doctorsService.getDoctors().subscribe((result: doctors[]) => (this.doctors = result));
  }

}
