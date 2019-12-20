import { Component } from '@angular/core';
import { faPen, faTv, faPiggyBank, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faReddit, faQq } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title';

  links = [
    {name: 'Notion', icon: faPen},
    {name: 'Plex', icon: faTv},
    {name: 'Firefly', icon: faPiggyBank},
    {name: 'Reddit', icon: faReddit},
    {name: 'NextCloud', icon: faCloud},
    {name: 'qBittorrent', icon: faQq},
    {name: 'BOQ', icon: faPiggyBank},
    {name: 'NAB', icon: faPiggyBank},
    {name: 'Namecheap', icon: faPiggyBank},
    {name: 'Glances', icon: faPiggyBank},
    {name: 'Funkwhale', icon: faPiggyBank},
    {name: 'Bookstack', icon: faPiggyBank},
    {name: 'pihole', icon: faPiggyBank},
    {name: 'Piwigo', icon: faPiggyBank},
    {name: 'Jellyfin', icon: faPiggyBank},
    {name: 'Traefik', icon: faPiggyBank},
    {name: 'Youtube', icon: faPiggyBank},
    {name: 'twitch', icon: faPiggyBank},
    {name: 'Kayo', icon: faPiggyBank}
  ];

}
