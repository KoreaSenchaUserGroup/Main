Ext.define('Garigori.controller.MainC', {
	extend: 'Ext.app.Controller',
	requires: ["Ext.MessageBox"],
	config: {
		refs: {
		maintabv: 'maintabv',
		},
		control: {
			"tabpanel": {
				activeitemchange: 'onActiveItemChange'
			}
		}
	},
	onActiveItemChange: function (container, value, oldValue, eOpts) {
		if (value != oldValue) {
			if (player) {
				player.destroy();
			}
			if (player2) {
				player2.destroy();
			}
		}
	}
});
