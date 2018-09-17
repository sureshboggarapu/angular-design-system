import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalService } from'../../services/modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class AppModal {
    
    @Input() id: any;
    @Input() modalTitle: any;
    @Input() data: Array<any>;
    @Input() modalComponent: any;
    @Input() firstFocus;
    @Input() content: string;
    @Input() buttonClass: string;
    @Input() abbr;

    constructor(private modalService: ModalService) {
    }

    addToBody(e) {
        //build modal with service
        this.modalService.appendComponentToBody(this.modalComponent, this.id, this.modalTitle, this.data, this.firstFocus);
    }
}