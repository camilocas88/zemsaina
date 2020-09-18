import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Item } from 'src/model/item';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss'],
})
export class MantenimientoComponent implements OnInit {
  items: Item[] = [];
  cols: any[];
  elements: MenuItem[];
  displayDilog: boolean = false;
  item: Item = {
    _about: null,
    accessURL: null,
    byteSize: null,
    format: null,
    title: null,
    type: null,
  };

  constructor(private itemService: ItemsService) {}

  getItems() {
    this.itemService.getItems().subscribe(
      (res: any) => {
        let arrayItems = res.result.items;
        let items: Item[] = [];
        for (let i = 0; i < arrayItems.length; i++) {
          let item = arrayItems[i] as Item;
          items.push(item);
        }
        this.items = items;
      },
      (error) => {
        console.log('error al obetener items', error);
      }
    );
  }

  edit(){
    console.log('ok');
    
  }

  showSaveDialog() {
    this.displayDilog = true;
  }

  ngOnInit(): void {
    this.getItems();
    this.cols = [
      { field: '_about', header: '_about' },
      { field: 'accessURL', header: 'accessURL' },
      { field: 'byteSize', header: 'byteSize' },
      { field: 'format', header: 'format' },
      { field: 'title', header: 'title' },
      { field: 'type', header: 'type' },
    ];
    this.elements = [
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
        command: () => this.showSaveDialog(),
      },
    ];
  }
}
