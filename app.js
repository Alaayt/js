Ext.application({
    name: 'CryptoApp',

    extend: 'CryptoApp.Application',

    requires: [
        'CryptoApp.*'
    ],

    mainView: 'CryptoApp.view.main.Main'
});
