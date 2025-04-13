const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
    // Create Bangtan Members
    const bts1 = await prisma.bangtan.create({
        data: {
            name: 'Kim Namjoon',
            stageNames: ['RM', 'Rap Monster'],
            albums: [
                {
                    "albumTitle": "Indigo",
                    "yearReleased": 2022,
                    "songs": [
                        "Yun",
                        "Still Life",
                        "All Day",
                        "Forg_tful",
                        "Closer",
                        "Indigo",
                        "Forget Me Not",
                        "Interlude: Reflection",
                        "Rewind"
                    ]
                },
                {
                    "albumTitle": "Right Place, Wrong Person",
                    "yearReleased": 2024,
                    "songs": [
                        "Intro (Right Place)",
                        "Perfectly Imperfect",
                        "Changing Me",
                        "Starlight",
                        "Through The Storm",
                        "In My Mind",
                        "Take Me Home",
                        "Fallen Star",
                        "To Be Free",
                        "Look Into Me"
                    ]
                },
                {
                    "albumTitle": "RM",
                    "yearReleased": 2015,
                    "songs": [
                        "Awakening",
                        "Joke",
                        "I Believe",
                        "Indigo",
                        "No More Dream",
                        "Desire",
                        "The Only",
                        "Life",
                        "Lone Ranger",
                        "The Best"
                    ]
                },
                {
                    "albumTitle": "mono.",
                    "yearReleased": 2018,
                    "songs": [
                        "Tokyo",
                        "Moonchild",
                        "Forever Rain",
                        "Bad Bye",
                        "Seoul",
                        "Everythingoes",
                        "Happy",
                        "Skit",
                        "Jealousy"
                    ]
                }
            ]
            ,
        },
    });

const bts2 = await prisma.bangtan.create({
    data: {
        name: 'Kim Seokjin',
        stageNames: 'Jin',
        albums: [
            {
                "albumTitle": "Abyss",
                "yearReleased": 2020,
                "songs": [
                    "Abyss",
                    "Super Tuna"
                ]
            },

        ]
    },
});

const bts3 = await prisma.bangtan.create({
    data: {
        name: 'Min Yoongi',
        albums: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
});

const bts4 = await prisma.bangtan.create({
    data: {
        name: 'Jung Hoseok',
        albums: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
});

const bts5 = await prisma.bangtan.create({
    data: {
        name: 'Park Jimin',
        albums: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
});

const bts6 = await prisma.bangtan.create({
    data: {
        name: 'Kim Taehyung',
        albums: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
});

const bts7 = await prisma.bangtan.create({
    data: {
        name: 'Jeon Jungkook',
        albums: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
});

const ot7 = await prisma.bangtan.create({
    data: {
        name: 'BTS',
        albums: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
});

console.log('Created Bangtan:', { bts1, bts2, bts3, bts4, bts5, bts6, bts7, ot7 });



}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })