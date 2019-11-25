({
    handleForceRefreshViewForLWC: function(component, event, helper) {
        component.find("refreshBroker").refresh();
    },

    forceRefreshView: function(component, event, helper) {
        let refresh = $A.get('e.force:refreshView');
        if (refresh) refresh.fire();
    }

})