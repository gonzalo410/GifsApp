import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  constructor(private gifsService :GifsService){}

  public searchTag(tag: string):void {
    this.gifsService.searchTag(tag);
  }

  public listTag(): string[] {
    return [...this.gifsService.tagsHistory];
  }


}
