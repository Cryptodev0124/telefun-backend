require('dotenv').config()

module.exports = {
    netId: Number(process.env.NET_ID) || 1,
    httpRpcUrl: process.env.HTTP_RPC_URL,
    wsRpcUrl: process.env.WS_RPC_URL,
    oracleRpcUrl: process.env.ORACLE_RPC_URL,
    privateKey: process.env.PRIVATE_KEY,
    contractAddr: process.env.CONTRACT_ADDRESS,
    gasLimits: {
        ['withdraw']: 500000,
    },
    minimumBalance: '1000000',
}