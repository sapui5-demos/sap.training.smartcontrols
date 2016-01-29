sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.smartcontrols.controller.SmartField", {

		onInit: function() {
			this.getView().bindElement("/Products('4711')");
		}

	});

});