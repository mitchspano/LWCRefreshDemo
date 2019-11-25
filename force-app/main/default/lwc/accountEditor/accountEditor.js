import { LightningElement, api, wire, track } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { registerListener, fireEvent } from 'c/pubsub';
import { refreshApex } from '@salesforce/apex';
import { CurrentPageReference } from 'lightning/navigation';

import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class accountEditor extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track editMode = false;
    @wire(CurrentPageReference) pageRef;
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD ] })
    myAccount;


    connectedCallback() {
		registerListener('refresh', this.handleRefresh, this);
	}

    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
        this.clearEditMode();
        this.forceRefreshView();
    }

    get accountName() {
        return getFieldValue(this.myAccount.data, NAME_FIELD);
    }

    forceRefreshView() {
        // eslint-disable-next-line no-console
        console.log('Calling Refresh from LWC');
		fireEvent(this.pageRef, 'refreshfromlwc', this.name);
    }

	handleRefresh() {
        // eslint-disable-next-line no-console
        console.log('Listening to Refresh for LWC');
		refreshApex(this.myAccount);
    }

    setEditMode() {
		this.editMode = true;
	}

	clearEditMode() {
		this.editMode = false;
	}
}