sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.smartcontrols.controller.Main", {
		
		onSelectionChange: function(oEvent) {
			var oItem = oEvent.getParameter("selectedItem");
			var sKey = oItem.getKey();
			
			var oView = sap.ui.view({
				id: "id" + sKey + "View",
				type: sap.ui.core.mvc.ViewType.XML,
				viewName: "sap.training.smartcontrols.view." + sKey
			});
			
			var oPanel = this.getView().byId("idViewPanel");
			oPanel.destroyContent();
			oPanel.addContent(oView);
			
			
		}

	});

});