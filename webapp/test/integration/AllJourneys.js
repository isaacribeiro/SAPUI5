jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Customers in the list
// * All 3 Customers have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"appl/sapui5/isaac/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"appl/sapui5/isaac/test/integration/pages/App",
	"appl/sapui5/isaac/test/integration/pages/Browser",
	"appl/sapui5/isaac/test/integration/pages/Master",
	"appl/sapui5/isaac/test/integration/pages/Detail",
	"appl/sapui5/isaac/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "appl.sapui5.isaac.view."
	});

	sap.ui.require([
		"appl/sapui5/isaac/test/integration/MasterJourney",
		"appl/sapui5/isaac/test/integration/NavigationJourney",
		"appl/sapui5/isaac/test/integration/NotFoundJourney",
		"appl/sapui5/isaac/test/integration/BusyJourney",
		"appl/sapui5/isaac/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});