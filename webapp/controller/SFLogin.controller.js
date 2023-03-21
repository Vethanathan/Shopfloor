sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller,UIComponent, History, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("AnandPortals.controller.SFLogin", {
		
		OnInit: function()
		{
		},
		
	   onNext: function(evt){
	   	  
	   	 
			var username = this.getView().byId("username").getValue();
			var passwd = this.getView().byId("passwd").getValue();
			window.console.log(username);
			window.console.log(passwd);
			if (username !== "" && passwd !== "") {
				var surl = "/sap/opu/odata/sap/Z_ARR_ODATA_SF_SRV/";
				var oModel = new sap.ui.model.odata.ODataModel(surl, true);
				var uri = "Username='" + username + "'" + ',' + "Password='" + passwd + "'";
				var status;
				window.console.log(uri);
				var UName;
				var UPass;
				oModel.read("/ZODATA_ARR_SF_LOGINSet(" + uri + ")", {
					context: null,
					urlParameters: null,
					async: false,
					success: function(oData, oResponse) {
						UName = oData["Username"];
						UPass = oData["Password"];
						window.console.log(UName);
						window.console.log(UPass);
						status = oData["LoginResult"];
					}
				});
				if (status === "LOGIN_SUCCESS") {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("SFDashboard");
					window.console.log("login");

				} else if (status === "LOGIN_FAILED") {
					MessageBox.alert("Invalid User ID & Password");
				}
			} else {
				MessageToast.show("Enter User Id and Password");
			}
	
			
		}

	});
	
});