sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], (Controller, MessageToast) => {
    "use strict";

	return Controller.extend("ui5.walkthrough.controller.HelloPanel",{
        onShowHello(){
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },

        onOpenDialog(){
            this.pDialog ??= this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });

            this.pDialog.then((oDialog) => oDialog.open());
        },

        onCloseDialog() {
            this.byId("helloDialog").close();
        }
    });
});