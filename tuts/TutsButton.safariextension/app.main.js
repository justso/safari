C.log('main', D.title);

/// scope is the extension
//const gui = safari.extension.popovers[0].contentWindow // Create the popover instance

// Function to perform when event is received
function performCommand(event) {
    // Make sure event comes from the button
    if (event.command == 'open-nettuts') {
        var newTab = S.application.activeBrowserWindow.openTab(); // Open a new tab
        newTab.url = 'http://net.tutsplus.com/'; // Set tab URL to nettuts
    }
}

function handleMessage(msg){
    if (msg.name == 'link'){
        // execute addLink() inside popover
        gui.addLink(msg.message);
    }
}

// Set up the Listeners
S.application.addEventListener('message', handleMessage, false);
S.application.addEventListener('command', performCommand, false);
