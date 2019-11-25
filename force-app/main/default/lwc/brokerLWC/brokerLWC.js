import { LightningElement, wire, api } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, fireEvent } from "c/pubsub";

export default class brokerLWC extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    @api
    refresh() {
        fireEvent(this.pageRef, 'refresh', this.name);
    }

    connectedCallback() {
        registerListener("refreshfromlwc", this.forceRefreshView, this);
    }

    forceRefreshView() {
        this.dispatchEvent(new CustomEvent("forceRefreshView", { detail: null }));
    }
}