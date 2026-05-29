function calculateRaid() {
    let raid = document.getElementById("raidLevel").value;
    let block = parseInt(document.getElementById("blockNumber").value);
    let disks = parseInt(document.getElementById("numDisks").value);

    let result = "";

    if (isNaN(block) || isNaN(disks) || disks < 2) {
        result = "Please enter a valid block number and at least 2 disks.";
    } 
    else if (raid == "0") {
        let disk = block % disks;
        let stripe = Math.floor(block / disks);

        result = `RAID 0: Block ${block} is stored on Disk ${disk}, Stripe ${stripe}.`;
    } 
    else if (raid == "1") {
        result = `RAID 1: Block ${block} is mirrored on all ${disks} disks.`;
    } 
    else if (raid == "4") {
        let dataDisks = disks - 1;
        let disk = block % dataDisks;
        let stripe = Math.floor(block / dataDisks);
        let parityDisk = disks - 1;

        result = `RAID 4: Block ${block} is stored on Disk ${disk}, Stripe ${stripe}. Parity is stored on Disk ${parityDisk}.`;
    } 
    else if (raid == "5") {
        let dataDisks = disks - 1;
        let stripe = Math.floor(block / dataDisks);
        let parityDisk = (disks - 1 - stripe) % disks;
        let dataPosition = block % dataDisks;

        let disk = dataPosition;
        if (disk >= parityDisk) {
            disk++;
        }

        result = `RAID 5: Block ${block} is stored on Disk ${disk}, Stripe ${stripe}. Parity is stored on Disk ${parityDisk}.`;
    }

    document.getElementById("result").innerHTML = result;
}
