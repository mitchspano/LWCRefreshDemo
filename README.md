# LWC Refresh Demo

This project is meant to illustrate how to broker communications across all Aura and Lightning Web Components within the context of lightning pages. The classic example of this is the 'e.force:refreshView' event, but in theory this could be used to broker all communications between Aura application events and Lightning Web Components.

It is important to note that this solution will allow developers to allow for all components on the page (Aura or LWC) to be refreshed at the same time, no matter if the component initiating the refresh is Aura or LWC.


### Simple Demonstration
Here is a simple demonstration of a Lightning Web Component called accountEditor listening for refreshes from other components, as well as initializing the refresh.

Note the chrome console log statements: 
* The accountEditor will log 'Listening to Refresh for LWC' when another component fires the Aura e.force:refreshView event
* The accountEditor will log 'Calling Refresh from LWC' when it is initialixing the refresh itself

![Lightning Page](demo/refreshDemo.gif)

### Sequence Diagrams
There are two basic flows for brokering in this way:

##### Aura Initiated
![Aura Initiated](demo/LWC%20Refresh%20Demo%20-%20Aura%20Initiated.JPG)

##### LWC Initiated
![LWC Initiated](demo/LWC%20Refresh%20Demo%20-%20LWC%20Initiated.JPG)


### Adding Components to Lightning Page
This approach will only work if the brokerAura component is somewhere (location does not matter and the markup is empty, so nothing will be visible) on the Lightnig page.
In this example, I have placed it above the highlights panel.

![Lightning Page](demo/LightningPageBuilder.gif)
