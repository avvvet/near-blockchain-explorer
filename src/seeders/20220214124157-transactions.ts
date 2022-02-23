export = {
    up: async (queryInterface: any, Sequelize: any) => {
        const tagsJson = {
            gas: 30000000000000,
            deposit: '0',
            args_json: {
                memo: '',
                amount: 10000000000000000000,
                account_id: 'a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near'
            },
            args_base64: 'eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=',
            method_name: 'send_tokens'
        }

        await queryInterface.bulkInsert('transactions',
            [
                {
                    transactionId: '1VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzq',
                    receiptId: '21KEhNErCLrFDWWCJ4JfdkbutqVaG18NoFJtTSSMGuFc',
                    stackId: 'app.xayz',
                    sliceId: 'near',
                    walletId: 'xyxy.near',
                    tagsJson: JSON.stringify(tagsJson),
                    status: 'UNKNOWN',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {});
    },

    down: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkDelete('Transactions',
            null,
            {});
    }
};