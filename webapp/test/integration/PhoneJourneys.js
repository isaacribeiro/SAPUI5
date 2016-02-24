jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"appl/sapui5/isaac/test/integration/NavigationJourneyPhone",
		"appl/sapui5/isaac/test/integration/NotFoundJourneyPhone",
		"appl/sapui5/isaac/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

