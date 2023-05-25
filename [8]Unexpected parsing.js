function getStatus(isBusy) {
    let msg = (isBusy ? "busy" : "available");
    return {status: msg}
}
getStatus()
//let getStatus = isBusy => ({ status: isBusy ? 'busy' : 'available' });