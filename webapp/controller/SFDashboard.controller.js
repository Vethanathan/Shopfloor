sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],function(Controller, History, UIComponent, MessageToast) {
	"use strict";
	return Controller.extend("AnandPortals.controller.SFDashboard", {
		
		onInit: function() {
		
			},
			
	// 	onPrevious: function(){
	// 	this.getOwnerComponent().getTargets().display("SFLogin");
	// },
	
		onPrevious: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("SFLogin");
		},
	
		onNext: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("SFProdList");
		},
		onNew: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("SFTest");
		},
		press : function(evt) {
			MessageToast.show("The GenericTile is pressed.");
		}

		// onnotiflist: function() {
		// 	var surl = "/sap/opu/odata/sap/ZMAINTENANCEPORTAL_ODATAHARI_SRV/";
		// 	var oModel = new sap.ui.model.odata.ODataModel(surl, true);
		// 	var TableModel = new sap.ui.model.json.JSONModel();
		// 	var TableId = this.getView().byId("Notify");
		// 	oModel.read("NotifyDetailSet", {
		// 		context: null,
		// 		urlParameters: null,
		// 		async: false,
		// 		success: function(oData, oResponse) {
		// 			window.console.log(oData.results);
		// 			TableModel.setData(oData.results);
		// 			TableId.setModel(TableModel);
		// 			window.console.log(TableModel);
					
		// 		}
		// 	});
		// }
		// onPressNavToDetail: function() {
		// 	this.getSplitAppObj().to(this.createId("detailDetail"));
		// },
		// onPressDetailBack: function() {
		// 	this.getSplitAppObj().backDetail();
		// },
		// onPressMasterBack: function() {
		// 	this.getSplitAppObj().backMaster();
		// },
		// onPressGoToMaster: function() {
		// 	this.getSplitAppObj().toMaster(this.createId("master2"));
		// },
		// onListItemPress: function(oEvent) {
		// 	var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
		// 	this.getSplitAppObj().toDetail(this.createId(sToPageId));
		// }

	});
});