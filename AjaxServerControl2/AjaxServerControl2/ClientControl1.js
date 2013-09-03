/// <reference name="MicrosoftAjax.js"/>


Type.registerNamespace("AjaxServerControl2");

AjaxServerControl2.ClientControl1 = function(element) {
    AjaxServerControl2.ClientControl1.initializeBase(this, [element]);
}

AjaxServerControl2.ClientControl1.prototype = {
    initialize: function() {
        AjaxServerControl2.ClientControl1.callBaseMethod(this, 'initialize');
        
        // Add custom initialization here
    },
    dispose: function() {        
        //Add custom dispose actions here
        AjaxServerControl2.ClientControl1.callBaseMethod(this, 'dispose');
    }
}
AjaxServerControl2.ClientControl1.registerClass('AjaxServerControl2.ClientControl1', Sys.UI.Control);

if (typeof(Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();