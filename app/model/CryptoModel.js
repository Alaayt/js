Ext.define('CryptoApp.model.CryptoModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'symbol', type: 'string' },
        { name: 'current_price', type: 'float' },
        { name: 'market_cap', type: 'float' },
        { name: 'total_volume', type: 'float' }
    ]
});
