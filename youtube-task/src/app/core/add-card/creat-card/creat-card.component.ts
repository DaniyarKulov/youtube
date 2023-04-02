import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface CreateCard {
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  img: FormControl<string | null>;
  link: FormControl<string | null>;
  // creationDate: FormControl<string | null>;
}

@Component({
  selector: 'app-creat-card',
  templateUrl: './creat-card.component.html',
  styleUrls: ['./creat-card.component.scss'],
})
export class CreatCardComponent implements OnInit {
  public isFormSubmitted = true;
  public videoForm!: FormGroup<CreateCard>;

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
      // creationDate: new FormControl<string | null>([Validators.required, this.dateValidator()]),
    });
  }
  // public dateValidator(): null {}

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

  public onSubmit(): void {
    this.isFormSubmitted = this.videoForm.invalid;
  }
}
