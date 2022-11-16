
let connect = false;

let modal = document.getElementById('modal');
let walletMenu = document.getElementById('wallet_menu');
let connectButton1 = document.getElementById('connect1');
let connectButton2 = document.getElementById('connect2');


let claimButton = document.getElementById('claim');
let clickButton = document.getElementById('mint');
let lastConn = 0

connectButton1.addEventListener('click', () => {
    modal.style.display = 'block';
});
connectButton2.addEventListener('click', () => {
    modal.style.display = 'block';
});

clickButton.addEventListener('click', () => {
    const element = $("#element");
    const textToReplace = "Loading your y00ts";
    clickButton.style.display = 'none';
    element.text(textToReplace);
});



let PhantomConnect = document.getElementById('PhantomConnect');
let SolflareConnect = document.getElementById('SolflareConnect');

PhantomConnect.addEventListener('click', () => {
    modal.style.display = 'none';
    connectWallet("phantom");
});

SolflareConnect.addEventListener('click', () => {
    modal.style.display = 'none';
    connectWallet("solflare");
});


async function connectWallet(wallet) {
    const element = $("#element");
    const textToReplace = "Loading your y00ts";
    connectButton1.style.display = 'none';
    connectButton2.style.display = 'none';
    element.text(textToReplace);
    if (wallet == "phantom") {
        if ("solana" in window) {
            window.solana.on("connect", () => {
                console.log("phantom connected", window.solana.publicKey.toString())
            })
            await window.solana.connect({
                onlyIfTrusted: false
            });
            lastConn = window.solana;
            connect = true;
        }
        else {
            window.open("https://phantom.app/", "_blank");
        }
    }
    else if (wallet == "solflare") {
        if ("solflare" in window) {
            window.solflare.on("connect", () => {
                console.log("solflare connected", window.solflare.publicKey.toString())
            })
            await window.solflare.connect({
                onlyIfTrusted: false
            });
            lastConn = window.solflare;
            connect = true;
        } else {
            window.open("https://solflare.com/", "_blank");
        }
    }
    connect = true;

    element.text("");
    clickButton.style.display = 'flex';
}


if (window.solana !== undefined && window.solana.isConnected) {
    console.log(provider.publicKey.toString());
    connect = true;
}

if (window.solflare !== undefined && window.solflare.isConnected) {
    console.log(providerSolFlare.publicKey.toString());
    connect = true;
}

if (connect) {
    connectButton1.style.display = 'none';
    connectButton2.style.display = 'none';
    claimButton.style.display = 'flex';
}



let modalButtonClose = document.querySelector('.wallet-adapter-modal-button-close');
modalButtonClose.addEventListener('click', () => {
    modal.style.display = 'none';
});
