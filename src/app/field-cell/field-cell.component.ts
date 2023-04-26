import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-field-cell',
  templateUrl: './field-cell.component.html',
  styleUrls: ['./field-cell.component.css']
})
export class FieldCellComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
