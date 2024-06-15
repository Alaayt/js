Ext.define('CryptoApp.view.CryptoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'crypto-grid',

    requires: [
        'CryptoApp.store.CryptoStore'
    ],

    title: 'Top 5 Cryptocurrencies',

    store: {
        type: 'crypto'
    },

    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Symbol', dataIndex: 'symbol', flex: 1 },
        { text: 'Current Price', dataIndex: 'current_price', flex: 1 },
        { text: 'Market Cap', dataIndex: 'market_cap', flex: 1 },
        { text: 'Total Volume', dataIndex: 'total_volume', flex: 1 }
    ]
});
