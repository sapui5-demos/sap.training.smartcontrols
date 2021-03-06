sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/ui/fl/FakeLrepConnector"
], function(MockServer, FakeLrepConnector) {
	"use strict";

	return {

		init: function() {

			// enable 'mock' variant management
			FakeLrepConnector.enableFakeConnector("./localService/component-test-changes.json");

			// create
			var oMockServer = new MockServer({
				rootUri: "/sap/opu/odata/sap/ZBC_DUMMY_SRV/"
			});

			// configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: 1000
			});

			// simulate
			var sPath = jQuery.sap.getModulePath("sap.training.smartcontrols.localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

			// start
			oMockServer.start();
		}
	};

});