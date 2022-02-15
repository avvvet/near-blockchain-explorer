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

    await queryInterface.bulkInsert('Transactions', 
    [
      {
        transactionHash: '1VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzq',
        receiptId: 'a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near',
        stackId: '779da4b0-79e1-4089-a124-0568b31f54cc',
        sliceId: 'uu9da4b0-79e1-4089-a124-0568b31f54jh',
        walletId: 'yzyz.near',
        tagsJson: JSON.stringify(tagsJson),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionHash: '2VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzb',
        receiptId: 'a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near',
        stackId: '809da4b0-79e1-4089-a124-0568b31f549j',
        sliceId: '559da4b0-79e1-4089-a124-0568b31f54cc',
        walletId: 'bmw.near',
        tagsJson: JSON.stringify(tagsJson),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionHash: '3VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzc',
        receiptId: 'a09da4b0-79e1-4089-a124-0568b31f549b.yellow.near',
        stackId: '809da4b0-79e1-4089-a124-0568b31f549j',
        sliceId: 'uu9da4b0-79e1-4089-a124-0568b31f54jh',
        walletId: 'yzyz.near',
        tagsJson: JSON.stringify(tagsJson),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionHash: '4VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzd',
        receiptId: 'a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near',
        stackId: '809da4b0-79e1-4089-a124-0568b31f549j',
        sliceId: '559da4b0-79e1-4089-a124-0568b31f54cc',
        walletId: 'yzyz.near',
        tagsJson: JSON.stringify(tagsJson),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionHash: '5VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzze',
        receiptId: 'a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near',
        stackId: 'b09da4b0-79e1-4089-a124-0568b31f549b',
        sliceId: '559da4b0-79e1-4089-a124-0568b31f54cc',
        walletId: 'bmw.near',
        tagsJson: JSON.stringify(tagsJson),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionHash: 'DqozjvmrhrZ1Gnn9WMToRswNmadGU5SHoK13ug1LoEQF',
        receiptId: 'a09da4b0-79e1-4089-a124-0568b31f549b.yellow.near',
        stackId: '779da4b0-79e1-4089-a124-0568b31f54cc',
        sliceId: 'uu9da4b0-79e1-4089-a124-0568b31f54jh',
        walletId: 'yzyz.near',
        tagsJson: JSON.stringify(tagsJson),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};