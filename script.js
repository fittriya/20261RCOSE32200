function calculateRaid() {
    let block = parseInt(document.getElementById("blockNumber").value);
    let disks = parseInt(document.getElementById("numDisks").value);

    let disk = block % disks;
    let stripe = Math.floor(block / disks);

    document.getElementById("result").innerHTML =
        `Block ${block} is stored on Disk ${disk}, Stripe ${stripe}`;
}
