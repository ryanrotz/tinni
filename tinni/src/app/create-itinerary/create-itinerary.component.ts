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
  // itineraryDays: FormArray;
  // itineraryItems: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.itineraryForm = this.fb.group({
      itineraryTitle: [''],
      itineraryDescription: [''],
      itineraryDays: this.fb.array([])
    })
  }

  get itineraryDays() { return this.itineraryForm.get('itineraryDays') as FormArray; }

  addDay(): void {
    this.itineraryDays.push(this.day);
  }

  get itineraryItems() { return this.day.get('itineraryItems') as FormArray; }

  addNewActivity(): void {
    // console.log(this.activity);
    // console.log('hey', this.newActivity);
    this.activity.setValue(this.newActivity);
    // console.log('there', this.activity);
    this.itineraryItems.push(this.activity);
  }


  // Itinerary Days --> added dynamically into itineraryDays FormArray
  day = this.fb.group({
    title: [''],
    date: [''],
    dayNumber: [''],
    itineraryItems: this.fb.array([])
  })

  // Itinerary Items --> added dynamically into itineraryItems FormArray
  activity = this.fb.group({
    title: [''],
    description: ['']
  })
  newActivity = {
    title: [''],
    description: ['']
  }

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
