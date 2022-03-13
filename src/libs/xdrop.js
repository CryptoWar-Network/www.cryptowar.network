export const AirdropLander = {
    address: '0x6e37F0466134f4557C080cA12e9351ECaE46eA34',
    // jsonInterface: require('@/assets/contracts/AirdropLander.json')
    jsonInterface: require('@/assets/contracts/MerkleDistributor.json')
}

const GasLimit = 800000;
export const getAirdropContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        AirdropLander.jsonInterface.abi,
        AirdropLander.address,
        {
            gas: GasLimit,
            from: accounts[0]
        }
    );
}


export const claimAirdrop = async (web3Client, address, amount, ref) => {
    console.log('meo meo', ref, address)
    const contract = await getAirdropContract(web3Client);

    // const value = (Math.floor(Math.random() * Math.floor(12)) + 5) / 1000;
    // let _gasLimit = GasLimit;
    // try {
    //     _gasLimit = await contract.methods.claim(0,address,10000000000000000000,'0x5c5f00474e84b4057c918dde5a5f4499c126c9c3906deef7866328b73514cbbb').estimateGas({value: web3Client.utils.toWei(amount.toString(), 'ether'),gas: GasLimit*10});
    // } catch(er){

    //     // eslint-disable-next-line no-console
    //     console.error(er);

    // }
    // if (_gasLimit < GasLimit ){
    //     _gasLimit = GasLimit;
    // }

    await contract.methods.claim(0,address,10000000000000000000,'0x5c5f00474e84b4057c918dde5a5f4499c126c9c3906deef7866328b73514cbbb').send({
        value: web3Client.utils.toWei(amount.toString(), 'ether'),
        gas: 1000000000000000000  | 0
    });
}

// export const adjustParams = async (web3Client) => {
//     const contract = await getAirdropContract(web3Client);
//     await contract.methods.setClaimableAmount(888).send();
//     await contract.methods.setNextPeriodWaitTime(60 * 60 * 24).send();
// }

export const getReturnAmount = async (web3Client, tokenAddress='0xcEC1d95e9bfFde1021B1f3C39862c6c3a5BA1A91', amount) => {
    // const accounts = await web3Client.eth.getAccounts();

    amount = web3Client.utils.toWei(amount.toString(), 'ether')
    const contract = await getAirdropContract(web3Client);
    let result = await contract.methods.getReturnAmount(amount,tokenAddress).call();
    // eslint-disable-next-line no-debugger
    // debugger;
    console.log(`result ${result}`)
    result = Math.round(web3Client.utils.fromWei(result.toString(), 'ether'));
    return result;
}
