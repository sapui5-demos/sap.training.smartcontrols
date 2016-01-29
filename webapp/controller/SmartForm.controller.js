sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.smartcontrols.controller.SmartForm", {

		onInit: function() {
			this.getView().byId("idSmartFormPage").bindElement("/Products('4711')");
		}

	});

});