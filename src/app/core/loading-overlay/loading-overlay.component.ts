import {Component, OnInit, Input} from '@angular/core';

/**
 * Component som visar loader när man refreshar cards.
 *
 * @export
 * @class LoadingOverlayComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'sf-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

  @Input('isLoading') isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
