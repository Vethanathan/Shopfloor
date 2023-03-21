sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("AnandPortals.controller.SFTest", {
	// 	onPrevious: function(){
	// 	this.getOwnerComponent().getTargets().display("SFDashboard");
	// },
		onPrevious: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("SFDashboard");
		},
		onInit: function () {
			
				var url = "/sap/opu/odata/sap/Z_ARR_ODATA_SF_SRV/";
		var list;
		var res1 = new sap.ui.model.odata.ODataModel(url,true);
		res1.read("ZODATA_ARR_SF_PLANORDERSet?$filter=PlantNo eq '0001' &$format=json",{
			context:null,
			urlParameter:null,
			async:false,
			success:function(oData,oResponse)
			{
				list = oData.results;
				window.console.log(list);
				
			}
		}
		);
		var result = new sap.ui.model.json.JSONModel();
		result.setData({
			"results":list
		});
		this.getView().byId("PlanList").setModel(result);
		
		},
		onBeforeExport: function (oEvt) {
			var mExcelSettings = oEvt.getParameter("exportSettings");
			// GW export
			if (mExcelSettings.url) {
				return;
			}
			// For UI5 Client Export --> The settings contains sap.ui.export.SpreadSheet relevant settings that be used to modify the output of excel

			// Disable Worker as Mockserver is used in Demokit sample --> Do not use this for real applications!
			mExcelSettings.worker = false;
		},
		onExit: function () {
		}
	});
});