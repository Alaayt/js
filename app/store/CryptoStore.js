Ext.define('CryptoApp.store.CryptoStore', {
    extend: 'Ext.data.Store',
    alias: 'store.crypto',

    model: 'CryptoApp.model.CryptoModel',

    proxy: {
        type: 'ajax',
        url: 'https://api.coingecko.com/api/v3/coins/markets',
        extraParams: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 5,
            page: 1,
            sparkline: false
        },
        reader: {
            type: 'json'
        }
    },

    autoLoad: true
});
