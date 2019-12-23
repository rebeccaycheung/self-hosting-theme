import { Component } from '@angular/core';
import { faPen, faTv, faPiggyBank, faCloud, faDollarSign, faRunning, faBook, faTrafficLight, faImage } from '@fortawesome/free-solid-svg-icons';
import { faReddit, faQq, faTwitch, faYoutube } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  finance = 'finance';
  media = 'media';
  admin = 'admin';

  finances = [
    {name: 'BOQ', icon: faDollarSign},
    {name: 'NAB', icon: faDollarSign},
    {name: 'Firefly', icon: faPiggyBank}
  ];

  medias = [
    {name: 'Reddit', icon: faReddit},
    {name: 'Plex', icon: faTv},
    {name: 'Jellyfin', icon: faTv},
    {name: 'Youtube', icon: faYoutube},
    {name: 'twitch', icon: faTwitch},
    {name: 'Kayo', icon: faRunning},
    {name: 'Piwigo', icon: faImage}
  ];

  admins = [
    {name: 'Notion', icon: faPen},
    {name: 'NextCloud', icon: faCloud},
    {name: 'qBittorrent', icon: faQq},
    {name: 'Namecheap', icon: faPiggyBank},
    {name: 'Glances', icon: faPiggyBank},
    {name: 'Funkwhale', icon: faPiggyBank},
    {name: 'Bookstack', icon: faBook},
    {name: 'pihole', icon: faPiggyBank},
    {name: 'Traefik', icon: faTrafficLight}
  ];

}
