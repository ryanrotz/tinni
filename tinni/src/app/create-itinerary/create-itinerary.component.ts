import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.css']
})
export class CreateItineraryComponent implements OnInit {

  itineraryForm = this.fb.group({
    itineraryTitle: [''],
    itineraryDescription: [''],
    itineraryDays: this.fb.array([
      // Each day will get added dynamically but here's an example of adding it statically:
      // this.fb.group({
      //   title: [''],
      //   date: [''],
      //   dayNumber: ['1'],
      //   itineraryItems: this.fb.array([])
      // })
    ])
  })

  // Itinerary Days --> added dynamically into itineraryDays FormArray
  day = this.fb.group({
    title: [''],
    date: [''],
    dayNumber: ['1'],
    itineraryItems: this.fb.array([])
  })

  // Itinerary Items --> added dynamically into itineraryItems FormArray
  activity = this.fb.group({
    title: [''],
    description: ['']
  })
  flight = this.fb.group({
    title: [''],
    description: [''],
    departureLocation: [''],
    arrivalLocation: [''],
    departureTime: [''],
    arrivalTime: [''],
    flightNumber: [''],
    confirmationNumber: ['']
  })
  auto = this.fb.group({
    title: [''],
    description: [''],
    pickUpLocation: [''],
    dropOffLocation: [''],
    pickUpTime: [''],
    dropOffTime: [''],
    confirmationNumber: ['']
  })
  rail = this.fb.group({
    title: [''],
    description: [''],
    departureLocation: [''],
    arrivalLocation: [''],
    departureTime: [''],
    arrivalTime: ['']
  })
  lodging = this.fb.group({
    title: [''],
    description: [''],
    location: [''],
    checkInDate: [''],
    checkOutDate: [''],
    confirmationNumber: ['']
  })
  restaurant = this.fb.group({
    title: [''],
    description: [''],
    location: [''],
    website: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    // TODO: Use EventEmitter with form value
  console.warn(this.itineraryForm.value);
  }

}
