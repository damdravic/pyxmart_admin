import { Component } from '@angular/core';
import { Header} from './components/header/header';
import { AnnouncementBar } from './components/announcement-bar/announcement-bar';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [Header, AnnouncementBar, Footer, RouterOutlet],
  selector: 'app-admin-layout',
  styleUrl: './admin-layout.css',
  templateUrl: './admin-layout.html',
})
export class AdminLayout {}
