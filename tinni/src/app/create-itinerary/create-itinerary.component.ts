import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { createNgModuleFactory } from '@angular/core/src/view';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.css']
})
export class CreateItineraryComponent implements OnInit {
  
  itineraryForm: FormGroup;
  itineraryDays: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.itineraryForm = this.fb.group({
      itineraryTitle: [''],
      itineraryDescription: [''],
      itineraryDays: this.fb.array([])
    })
  }

  createDay(): FormGroup {
    return this.fb.group({
      title: [''],
      date: [''],
      dayNumber: [''],
      // itineraryItems: this.fb.array([])
    })
  }

  addDay(): void {
    this.itineraryDays = this.itineraryForm.get('itineraryDays') as FormArray; 
    this.itineraryDays.push(this.createDay());
  }


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



  onSubmit(){
    // TODO: Use EventEmitter with form value
  console.warn(this.itineraryForm.value);
  }

}
