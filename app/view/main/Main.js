Ext.define('CryptoApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'CryptoApp.view.CryptoGrid'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'crypto-grid',
            flex: 1
        }
    ]
});
