export const merkleAirdrop = {
    address: '0x3c882355aaAd0f9644546B93dc3BaC03005d6c5b',
    // jsonInterface: require('@/assets/contracts/AirdropLander.json')
    jsonInterface: require('@/assets/contracts/MerkleDistributor.json')
}

import results from './allocation_merkle_output.json'

const GasLimit = 800000;
export const getAirdropContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        merkleAirdrop.jsonInterface.abi,
        merkleAirdrop.address,
        {
            gas: GasLimit,
            from: accounts[0]
        }
    );
}


export const claimAirdrop = async (web3Client,address,amount) => {
    const info=  results.claims[address];
    const contract = await getAirdropContract(web3Client);

    // const value = (Math.floor(Math.random() * Math.floor(12)) + 5) / 1000;
    let _gasLimit = GasLimit;
    try {
        // _gasLimit = contract.methods.claim(info?.index,address,'900004425800983540284','0x5c5f00474e84b4057c918dde5a5f4499c126c9c3906deef7866328b73514cbbb').estimateGas({gas: GasLimit*10});
    } catch(er){

        // eslint-disable-next-line no-console
        console.error(er);

    }
    if (_gasLimit < GasLimit ){
        _gasLimit = GasLimit;
    }

    await contract.methods.claim(info?.index,address,amount,info?.proof).send(({
        from: address
    }));
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
