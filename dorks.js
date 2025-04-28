const dorkDatabase = {
    google: [
        {
            name: "🔒 Exposed Passwords",
            query: "filetype:log password",
            category: "Critical",
            risk: 5
        },
        {
            name: "📷 Unsecured Cameras",
            query: "inurl:/view.shtml",
            category: "Devices",
            risk: 4
        },
        // Add 98+ more Google dorks
    ],
    shodan: [
        {
            name: "🛡️ Open Firewalls",
            query: "product:cisco firewall",
            category: "Network",
            ports: [80, 443]
        },
        // Add 98+ more Shodan dorks
    ]
};