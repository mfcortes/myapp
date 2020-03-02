import { Component, OnInit } from '@angular/core';
import { GetGitUserServices } from '../servicios/GetGitUserService';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-elemento-dos',
  templateUrl: './elemento-dos.component.html',
  styleUrls: ['./elemento-dos.component.scss']
})
export class ElementoDosComponent implements OnInit {

  public respuestaGit: any;

  constructor(public getGitUserServices: GetGitUserServices) {

   }

  ngOnInit() {
    const strUrl = 'https://api.github.com/users/mfcortes';

    this.getGitUserServices
          .getData(strUrl)
          .subscribe( ( res: any) => {
             this.respuestaGit = res;
          }
      );
  }

}
