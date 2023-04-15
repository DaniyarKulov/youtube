import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addVideo } from '../../store/get-videos.actions';

interface CreateCard {
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  img: FormControl<string | null>;
  link: FormControl<string | null>;
  creationDate: FormControl<string | null>;
}

@Component({
  selector: 'app-creat-card',
  templateUrl: './creat-card.component.html',
  styleUrls: ['./creat-card.component.scss'],
})
export class CreatCardComponent implements OnInit {
  public isFormSubmitted = true;
  public videoForm!: FormGroup<CreateCard>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.videoForm = new FormGroup({
      title: new FormControl<string | null>('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl<string | null>('', [Validators.maxLength(255)]),
      img: new FormControl<string | null>('', [Validators.required, Validators.pattern(/^https?:\/\/\S+$/)]),
      link: new FormControl<string | null>('', [Validators.required, Validators.pattern(/^https?:\/\/\S+$/)]),
      creationDate: new FormControl<string | null>('', [Validators.required, this.dateValidator()]),
    });
  }

  public get imgControl(): FormControl<string | null> {
    return this.videoForm.controls.img;
  }

  public get linkControl(): FormControl<string | null> {
    return this.videoForm.controls.link;
  }

  public get titleControl(): FormControl<string | null> {
    return this.videoForm.controls.title;
  }

  public get desciptionControl(): FormControl<string | null> {
    return this.videoForm.controls.description;
  }

  public dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const date = new Date();
      return date < new Date(control.value) ? { dateValid: true } : null;
    };
  }

  public get dateControl(): FormControl<string | null> {
    return this.videoForm.controls.creationDate;
  }

  public onSubmit(): void {
    this.isFormSubmitted = this.videoForm.invalid;
    console.log(this.videoForm.value);

    if (this.videoForm.valid) {
      const video = {
        title: this.titleControl.value ?? '',
        img: this.imgControl.value ?? '',
        link: this.linkControl.value ?? '',
        creationDate: this.dateControl.value ?? '',
        description: this.desciptionControl.value ?? '',
      };
      this.store.dispatch(addVideo({ video }));
      this.videoForm.reset();
    }
  }
}
