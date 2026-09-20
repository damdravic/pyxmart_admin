import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  imports: [RouterOutlet],
  selector: 'app-error-layout',
  styleUrl: './error-layout.css',
  templateUrl: './error-layout.html',
})
export class ErrorLayout {}
