/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

 var nftCollection = [];

  mintNFT = (Name,id, description) =>{
    const nftObject = {
       name: Name,
       Nftid : id,
       detail : description
    }

    nftCollection.push(nftObject);
 }

listNFTs = () =>{
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name : ${nft.name}`);
        console.log(`Ntfid: ${nft.Nftid}`);
        console.log(`Details : ${nft.detail}`);
    });
}

getTotalSupply = ()=>{
   count =  nftCollection.length;
   console.log(`Total no. of Nft's are ${count}`);
}