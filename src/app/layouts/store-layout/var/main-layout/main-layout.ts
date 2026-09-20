import { Component } from '@angular/core';
import { AnnouncementBar } from '../../components/announcement-bar/announcement-bar';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [AnnouncementBar, Header, RouterOutlet, Footer],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
