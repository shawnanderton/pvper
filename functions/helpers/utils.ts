async function isExpired(expiresIn) {
    const now = new Date();
    const expiryDate = new Date(now.getTime() + expiresIn*1000);
    
    console.log(expiryDate.toDateString());
}


export {isExpired};