const dorks = {
    google: [
        {
            name: "Exposed Backups",
            query: "filetype:bak",
            category: "Data Leaks",
            risk: "High"
        },
        // Add 100+ entries
    ],
    shodan: [
        {
            name: "Open Databases",
            query: "product:MySQL",
            category: "Databases",
            ports: [3306]
        }
    ]
};