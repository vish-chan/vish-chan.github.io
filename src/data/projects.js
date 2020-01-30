const ASSETS_BASE = "assets";

export const PROJECTS = [

    {
        id: 7,
        title: "Performance Modelling and Scheduling of MapReduce Jobs in Cloud Environment",
        subtitle: "Masters Thesis",
        img: ASSETS_BASE + "/mapreduce.jpg",
        desc: "Proposed a novel deadline aware scheduling algorithm for MapReduce jobs running on Amazon EC2 based cloud infrastructure. Also, minimised the cost of operation by intelligently deploying Spot instances. The implementation used Cloudsim framework for MapReduce environment simulation. Prices of spot instances were predicted via time series analysis using R. Evaluation of scheduling algorithm was done using traces of two sets of Facebook Hadoop jobs workloads.",
        github: "https://github.com/vish-chan/Thesis-Implementation",
    },

    {
        id: 6,
        title: "Roshambo Town",
        subtitle: "Independent",
        img: ASSETS_BASE + "/roshambo.PNG",
        desc: "A role playing game based on rock paper & scissosrs. Contains 8 different maps, and gameboy pokemon style roshambo matches. Developed using react-redux. Available to play at 'http://vishalchand.com/Roshambo-Town'",
    },

    {
        id: 5,
        title: "Suspend to Disk on Qualcomm Snapdragon SOC",
        subtitle: "Qualcomm",
        img: ASSETS_BASE + "/hibernate.png",
        desc: "Prototyped Suspend to Disk feature on Qualcomm Snapdragon 210 SOC using Linux swsusp framework.",
    },

    {
        id: 4,
        title: "CPU Workload Classification",
        subtitle: "Qualcomm",
        img: ASSETS_BASE + "/classification.jpg",
        desc: "A two-class boosted decision tree based CPU workload classification system for classifying workloads into game and non-game classes. The classifier used several user level and system level parameters as features from many Snapdragon SOC modules for classification. Implementation was done using sci-kit python library.",
    },
    
    {
        id: 3,
        title: "SeQurify",
        subtitle: "Qualcomm",
        img: ASSETS_BASE + "/securify.png",
        desc: "A geolocation based MAC Randomisation system for Android devices. The system enabled the use of random MAC IDs for 'Active' WiFi scanning ensuring user privacy in public places. Whitelisting of geolocations enabled connections with Hidden SSIDs. The project was inspired by Blackphone.",
        github: "https://github.com/vish-chan/Securify",
    },

    {
        id:2,
        title: "Secured File Transaction System",
        subtitle: "IIT Roorkee",
        img: ASSETS_BASE + "/file_transfer.jpg",
        desc: "A one-to-many secured file transaction system using Python's crypto libraries. The system allowed multiple clients to access, transfer and manage files on a remote server, securely. The system includes client authentication on the server side, the establishment of a secure channel between server and client, and secure data transfer.",
        github: "https://github.com/vish-chan/Secured-File-Transaction-System"
    },

    {
        id: 1,
        title: "AirHawks",
        subtitle: "IronCode Gaming PVT. LTD",
        img: ASSETS_BASE + "/airhawks.png",
        desc: "A single/two-player air hockey game developed in Python using Pygame and C++ using DirectX-9. Highlights of the game are - a highly competitive bot player, 4 arenas with different visual effects, and a robust physics implementation.",
        github: "https://github.com/vish-chan/AirHawks-CPP"
    },

    {
        id: 0,
        title: "SmashOut",
        subtitle: "Independent",
        img: ASSETS_BASE + "/smashout.png",
        desc: "A breakout style game set-up in space, developed in C++ using DirectX-9. Highlights of the game are - 30 different levels,\
         a robust collision detection system,\
         multiscreen game design with transitions between different screens, and sound effects.",
        github: "https://github.com/vish-chan/SmashOut",
    },
]