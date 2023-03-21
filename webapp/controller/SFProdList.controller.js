sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("AnandPortals.controller.SFProdList", {
	// onPrevious: function(){
	// 	this.getOwnerComponent().getTargets().display("SFDashboard");
	// },
	onPrevious: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("SFDashboard");
		},
	onInit: function()
	{
	
		var url = "/sap/opu/odata/sap/Z_ARR_ODATA_SF_SRV/";
		var list;
		var res1 = new sap.ui.model.odata.ODataModel(url,true);
		res1.read("ZODATA_ARR_SF_PRODORDERSet?$filter=Plant eq '0001' &$format=json",{
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
		this.getView().byId("ProductionList").setModel(result);
		
	}

	});

});