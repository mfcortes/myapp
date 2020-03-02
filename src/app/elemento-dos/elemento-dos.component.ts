import { Component, OnInit } from '@angular/core';
import { getGitUserServices } from '../getGitUserService';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-elemento-dos',
  templateUrl: './elemento-dos.component.html',
  styleUrls: ['./elemento-dos.component.scss']
})
export class ElementoDosComponent implements OnInit {

  public respuestaGit: any;

  constructor(public srvGit: getGitUserServices) {

   }

  ngOnInit() {
    const strUrl = 'https://api.github.com/users/mfcortes';

    this.srvGit
          .getData(strUrl)
          .subscribe( ( res: any) => {
             this.respuestaGit = res;
          }
      );
  }

}
