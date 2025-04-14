const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
    // Create Bangtan Members
    const bts1 = await prisma.bangtan.create({
        data: {
            name: "Kim Namjoon",
            stageNames: ["RM", "Rap Monster"],
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
        name: "Kim Seokjin",
        stageNames: "Jin",
        albums: [
            {
                "albumTitle": "Happy",
                "yearReleased": 2024,
                "songs": [
                    "Running Wild",
                    "I'll Be There",
                    "Another Level",
                    "Falling",
                    "Heart on the Window (with WENDY)",
                    "I will come to you"
                ]
            },
        ],
        songs: [
            "Abyss",
            "Super Tuna",
            "Tonight",
            "The Astronaut",
            "Yours",
            "It's Definitely You"
        ]
    },
});

const bts3 = await prisma.bangtan.create({
    data: {
        name: "Min Yoongi",
        stageNames: ["Agust D", "SUGA"],
        albums: [
            {
            "albumTitle": "Agust D",
            "yearReleased": 2016,
            "songs": [
                "Intro: Dt sugA (feat. DJ Friz)",
                "Agust D",
                "Give It To Me",
                "724148",
                "140503 at dawn",
                "The Last",
                "Tony Montana",
                "Interlude: Dream, Reality",
                "so far away (feat. SURAN)"
                ]
            },
            {
                "albumTitle": "D-2",
                "yearReleased": 2020,
                "songs": [
                    "Moonlight",
                    "Daechwita",
                    "What Do You Think?",
                    "Strange (feat. RM)",
                    "28 (feat. NiiHWA)",
                    "Burn It (feat. MAX)",
                    "People",
                    "Honsool",
                    "Interlude: Set Me Free",
                    "Dear My Friend (feat. Kim Jong Wan of NELL)"
                ]
            },
            {
                "albumTitle": "D-Day",
                "yearReleased": 2023,
                "songs": [
                    "D-Day",
                    "Haegeum",
                    "HUH?!(feat. J-Hope)",
                    "AMYGDALA",
                    "SDL",
                    "People Pt. 2 (feat. IU)",
                    "Polar Night",
                    "Interlude: Dawn",
                    "Snooze (feat. Ryuichi Sakamoto, WOOSUNG of The Rose)",
                    "Life Goes On"
                ]
            }
        ],
        songs: []
    },
});

const bts4 = await prisma.bangtan.create({
    data: {
        name: "Jung Hoseok",
        stageNames: "J-Hope",
        albums: [
            {
            "albumTitle": "Hope World",
            "yearReleased": 2018,
            "songs": [
                "Hope World",
                "P.O.P (Piece of Peace)",
                "Daydream",
                "Base Line",
                "Hangsang",
                "Airplane",
                "Blue Side (Outro)"
                ]
            },
            {
                "albumTitle": "Jack in the Box",
                "yearReleased": 2022,
                "songs": [
                    "Intro: Jack in the Box",
                    "Pandora's Box",
                    "MORE",
                    "STOP",
                    "= (Equal Sign)",
                    "Music Box: Reflection",
                    "What if...",
                    "Safety Zone",
                    "Future",
                    "Arson"
                ]
            },
            {
                "albumTitle": "HOPE ON THE STREET VOL.1",
                "yearReleased": 2024,
                "songs": [
                    "on the street (solo version)",
                    "i wonder...(with Jung Kook of BTS)",
                    "lock/unlock (with benny blanco & Nile Rodgers)",
                    "what if...(dance mix)",
                    "NEURON (with Gaeko & YOON MIRAE)"
                ]
            }
        ],
        songs: [
            "MONA LISA",
            "Sweet Dreams (feat. Miguel)",
            "on the street (with J. Cole)",
            "Chicken Noodle Soup (feat. Becky G)",
        ]
    },
});

const bts5 = await prisma.bangtan.create({
    data: {
        name: "Park Jimin",
        stageNames: "Jimin",
        albums: [            {
            "albumTitle": "FACE",
            "yearReleased": 2023,
            "songs": [
                "Face-off",
                "Interlude: Dive",
                "Like Crazy",
                "Alone",
                "Set Me Free Pt.2",
                "Like Crazy (English Version)"
            ]
        },
            {
                "albumTitle": "MUSE",
                "yearReleased": 2024,
                "songs": [
                    "Rebirth (Intro)",
                    "Interlude: Showtime",
                    "Smeraldo Garden Marching Band (feat. Loco)",
                    "Slow Dance (feat. Sofia Carson)",
                    "Be Mine",
                    "Who",
                    "Closer Than This"
                ]
            }
            ],
        songs: [
            "With You",
            "Christmas Love",
            "Promise",
            "Be Mine (English Version)"
        ]
    },
});

const bts6 = await prisma.bangtan.create({
    data: {
        name: "Kim Taehyung",
        stageNames: "V",
        albums: [
            {
                "albumTitle": "Layover",
                "yearReleased": 2023,
                "songs": [
                    "Rainy Days",
                    "Blue",
                    "Love Me Again",
                    "Slow Dancing",
                    "For Us",
                    "Slow Dancing (Piano Ver.)"
                ]
            }
        ],
        songs: [
            "It's Definitely You",
            "Scenery",
            "Winter Bear",
            "Sweet Night",
            "Snow Flower",
            "Christmas Tree",
            "wherever u r (ft. UMI)",
            "FRI(END)S",
            "Winter Ahead (with PARK HYO SHIN)",
            "White Christmas (with Bing Crosby)"
        ]
    },
});

const bts7 = await prisma.bangtan.create({
    data: {
        name: "Jeon Jungkook",
        stageNames: "Jungkook",
        albums: [
            {
                "albumTitle": "Golden",
                "yearReleased": 2023,
                "songs": [
                    "3D (feat. Jack Harlow)",
                    "Closer to You (feat. Major Lazer)",
                    "Seven (feat. Latto)(Explicit Ver.)",
                    "Seven (feat. Latto)(Clean Ver.)",
                    "Standing Next to You",
                    "Yes or No",
                    "Please Don't Change (feat. DJ Snake)",
                    "Hate You",
                    "Somebody",
                    "Too Sad to Dance",
                    "Shot Glass of Tears"
                ]
            }
        ],
        songs: [
            "Never Let Go",
            "Standing Next to You (USHER Remix)",
            "3D (Justin Timberlake Remix)",
            "TOO MUCH (with The Kid LAROI and Central Cee)",
            "Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack]",
            "My You",
            "Stay Alive (Prod. SUGA of BTS)",
            "Still with You",
            "Left and Right (with Charlie Puth)"
        ]
    },
});

const ot7 = await prisma.bangtan.create({
    data: {
        name: "BTS",
        stageNames: ["RM", "Jin", "SUGA", "J-Hope", "Jimin", "V", "Jungkook"],
        albums: [
            {
                "albumTitle": "2 Cool 4 Skool",
                "yearReleased": 2013,
                "songs": [
                    "Intro: 2 Cool 4 Skool",
                    "We Are Bulletproof Pt.2",
                    "Skit: Circle Room Talk",
                    "No More Dream",
                    "Interlude",
                    "Like",
                    "Outro: Circle Room Cypher"
                ]
            },
            {
                "albumTitle": "O!RUL8,2?",
                "yearReleased": 2013,
                "songs": [
                    "Intro: O!RUL8,2?",
                    "N.O",
                    "We On",
                    "Skit: R U Happy Now?",
                    "If I Ruled the World",
                    "Coffee",
                    "BTS Cypher Pt.1",
                    "Attack on Bangtan",
                    "Paldogangsan",
                    "Outro: Luv in Skool"
                ]
            },
            {
                "albumTitle": "Skool Luv Affair",
                "yearReleased": 2014,
                "songs": [
                    "Intro: Skool Luv Affair",
                    "Boy in Luv",
                    "Skit: Soulmate",
                    "Where You From",
                    "Just One Day",
                    "Tomorrow",
                    "BTS Cypher Pt.2: Triptych",
                    "Spine Breaker",
                    "Jump",
                    "Outro: Propose"
                ]
            },
            {
                "albumTitle": "Skool Luv Affair (Special Addition)",
                "yearReleased": 2014,
                "songs": [
                    "Miss Right",
                    "Like (Slow Jam Remix)",
                    "Intro: Skool Luv Affair",
                    "Boy in Luv",
                    "Skit: Soulmate",
                    "Where You From",
                    "Just One Day",
                    "Tomorrow",
                    "BTS Cypher Pt.2: Triptych",
                    "Spine Breaker",
                    "Jump",
                    "Outro: Propose"
                ]
            },
            {
                "albumTitle": "Dark & Wild",
                "yearReleased": 2014,
                "songs": [
                    "Intro: What Am I to You",
                    "Danger",
                    "War of Hormone",
                    "Hip Hop Phile",
                    "Let Me Know",
                    "Rain",
                    "BTS Cypher Pt.3: Killer",
                    "Interlude: What Are You Doing Now",
                    "Could You Turn off Your Cell Phone",
                    "Embarrassed",
                    "24/7=Heaven",
                    "Look Here",
                    "So 4 more",
                    "Outro: Do You Think It Makes Sense?"
                ]
            },
            {
                "albumTitle": "Wake Up (Standard Edition)",
                "yearReleased": 2014,
                "songs": [
                    "Intro.",
                    "The Stars",
                    "Jump - Japanese Ver.",
                    "Danger - Japanese Ver.",
                    "Boy in Luv - Japanese Ver.",
                    "Just One Day",
                    "line!",
                    "line!Pt.2 -Ano Bashode-",
                    "No More Dream - Japanese Ver.",
                    "Shingeki no Boudan - Japanese Ver.",
                    "N.O - Japanese Ver.",
                    "Wake Up",
                    "Outro."
                ]
            },
            {
                "albumTitle": "The Most Beautiful Moment in Life Pt.1",
                "yearReleased": 2015,
                "songs": [
                    "Intro: The Most Beautiful Moment in Life",
                    "I Need U",
                    "Hold Me Tight",
                    "Skit: Expectation!",
                    "Dope",
                    "Boyz with Fun",
                    "Converse High",
                    "Moving On",
                    "Outro: Love Is Not Over"
                ]
            },
            {
                "albumTitle": "The Most Beautiful Moment in Life Pt.2",
                "yearReleased": 2015,
                "songs": [
                    "Intro: Never Mind",
                    "Run",
                    "Butterfly",
                    "Whalien 52",
                    "Ma City",
                    "Silver Spoon",
                    "Skit: One Night in a Strange City",
                    "Autumn Leaves",
                    "Outro: House of Cards"
                ]
            },
            {
                "albumTitle": "The Most Beautiful Moment in Life: Young Forever",
                "yearReleased": 2016,
                "songs": [
                    "Intro: The Most Beautiful Moment in Life",
                    "I Need U",
                    "Hold Me Tight",
                    "Autumn Leaves",
                    "Butterfly (Prologue Mix)",
                    "Run",
                    "Ma City",
                    "Silver Spoon",
                    "Dope",
                    "Burning Up (Fire)",
                    "Save Me",
                    "Epilogue: Young Forever",
                    "Converse High",
                    "Moving On",
                    "Whalien 52",
                    "House of Cards (Full Length Edition)",
                    "Love is Not Over (Full Length Edition)",
                    "I Need U (Urban Mix)",
                    "I Need U (Remix)",
                    "Run (Ballad Mix)",
                    "Run (Alternative Mix)",
                    "Butterfly (Alternative Mix)"
                ]
            },
            {
                "albumTitle": "Youth",
                "yearReleased": 2016,
                "songs": [
                    "Introduction: Youth",
                    "Run - Japanese Ver.",
                    "Fire - Japanese Ver.",
                    "Dope - Chou Yabee! --Japanese Ver.",
                    "Good Day",
                    "Save Me - Japanese Ver.",
                    "Funtan Syounendan - Japanese Ver.",
                    "Peppuse - Japanese Ver.",
                    "Wishing On A Star",
                    "Butterfly - Japanese Ver.",
                    "I Need U - Japanese Ver",
                    "Epilogue: Young Forever - Japanese Ver."
                ]
            },
            {
                "albumTitle": "Wings",
                "yearReleased": 2016,
                "songs": [
                    "Intro: Boy Meets Evil",
                    "Blood Sweat & Tears",
                    "Begin",
                    "Lie",
                    "Stigma",
                    "First Love",
                    "Reflection",
                    "MAMA",
                    "Awake",
                    "Lost",
                    "BTS Cypher 4",
                    "Am I Wrong",
                    "21st Century Girl",
                    "2!3!",
                    "Interlude: Wings"
                ]
            },
            {
                "albumTitle": "You Never Walk Alone",
                "yearReleased": 2017,
                "songs": [
                    "Intro: Boy Meets Evil",
                    "Blood Sweat & Tears",
                    "Begin",
                    "Lie",
                    "Stigma",
                    "First Love",
                    "Reflection",
                    "MAMA",
                    "Awake",
                    "Lost",
                    "BTS Cypher 4",
                    "Am I Wrong",
                    "21st Century Girl",
                    "2!3!",
                    "Spring Day",
                    "Not Today",
                    "Outro: Wings",
                    "A Supplementary Story: You Never Walk Alone"
                ]
            },
            {
                "albumTitle": "Love Yourself 'Her'",
                "yearReleased": 2017,
                "songs": [
                    "Intro: Serendipity",
                    "DNA",
                    "Best Of Me",
                    "dimple",
                    "Pied Piper",
                    "Skit: Billboard Music Awards Speech",
                    "Mic Drop",
                    "Go Go",
                    "Outro: Her"
                ]
            },
            {
                "albumTitle": "FACE YOURSELF",
                "yearReleased": 2018,
                "songs": [
                    "INTRO: Ringwanderung",
                    "Best Of Me - Japanese Ver.",
                    "Blood Sweat & Tears (Japanese Ver.)",
                    "DNA - Japanese Ver.",
                    "Not Today - Japanese Ver.",
                    "MIC Drop - Japanese Ver.",
                    "Don't Leave Me",
                    "Go Go - Japanese Ver.",
                    "Crystal Snow",
                    "Spring Day - Japanese Ver.",
                    "Let Go",
                    "Outro: Crack"
                ]
            },
            {
                "albumTitle": "Love Yourself 'Tear'",
                "yearReleased": 2018,
                "songs": [
                    "Intro: Singularity",
                    "FAKE LOVE",
                    "The Truth Untold (feat. Steve Aoki)",
                    "134340",
                    "Paradise",
                    "Love Maze",
                    "Magic Shop",
                    "Airplane Pt.2",
                    "Anpanman",
                    "So What",
                    "Outro: Tear"
                ]
            },
            {
                "albumTitle": "Love Yourself 'Answer'",
                "yearReleased": 2018,
                "songs": [
                    "Euphoria",
                    "Trivia: Just Dance",
                    "Serendipity (Full Length Edition)",
                    "DNA",
                    "Dimple",
                    "Trivia: Love",
                    "Her",
                    "Singularity",
                    "FAKE LOVE",
                    "The Truth Untold",
                    "Trivia: Seesaw",
                    "Tear",
                    "Epiphany",
                    "I'm Fine",
                    "IDOL",
                    "Answer: Love Myself",
                    "Magic Shop",
                    "Best Of Me",
                    "Airplane Pt.2",
                    "Go Go",
                    "Anpanman",
                    "MIC Drop",
                    "DNA (Pedal 2 LA Mix)",
                    "FAKE LOVE (Rocking Vibe Mix)",
                    "MIC Drop (Steve Aoki Remix)(Full Length Edition)",
                    "IDOL (feat. Nicki Minaj)"
                ]
            },
            {
                "albumTitle": "MAP OF THE SOUL: PERSONA",
                "yearReleased": 2019,
                "songs": [
                    "Intro: Persona",
                    "Boy With Luv (feat. Halsey)",
                    "Mikrokosmos",
                    "Make It Right",
                    "HOME",
                    "Jamais Vu",
                    "Dionysus"
                ]
            },
            {
                "albumTitle": "MAP OF THE SOUL: 7",
                "yearReleased": 2020,
                "songs": [
                    "Intro: Persona",
                    "Boy With Luv (feat. Halsey)",
                    "Make It Right",
                    "Jamais Vu",
                    "Dionysus",
                    "Interlude: Shadow",
                    "Black Swan",
                    "Filter",
                    "My Time",
                    "Louder than Bombs",
                    "ON",
                    "UGH!",
                    "00:00 (Zero O'Clock)",
                    "Inner Child",
                    "Friends",
                    "Moon",
                    "Respect",
                    "We are Bulletproof: the Eternal",
                    "Outro: Ego",
                    "ON (feat. Sia)"
                ]
            },
            {
                "albumTitle": "MAP OF THE SOUL: 7 ~THE JOURNEY~",
                "yearReleased": 2020,
                "songs": [
                    "Intro: Calling",
                    "Stay Gold",
                    "Boy With Luv - Japanese Ver.",
                    "Make It Right - Japanese Ver.",
                    "Dionysus - Japanese Ver.",
                    "IDOL - Japanese Ver.",
                    "Airplane Pt.2 - Japanese Ver.",
                    "FAKE LOVE - Japanese Ver.",
                    "Black Swan - Japanese Ver.",
                    "ON - Japanese Ver.",
                    "Lights",
                    "Your eyes tell",
                    "OUTRO: The Journey"
                ]
            },
            {
                "albumTitle": "BE",
                "yearReleased": 2020,
                "songs": [
                    "Life Goes On",
                    "Fly To My Room",
                    "Blue & Grey",
                    "Skit",
                    "Telepathy",
                    "Dis-ease",
                    "Stay",
                    "Dynamite"
                ]
            },
            {
                "albumTitle": "Proof",
                "yearReleased": 2022,
                "songs": [
                    "Born Singer",
                    "No More Dream",
                    "N.O",
                    "Boy In Luv",
                    "Danger",
                    "I NEED U",
                    "RUN",
                    "Burning Up (FIRE)",
                    "Blood Sweat & Tears",
                    "Spring Day",
                    "DNA",
                    "FAKE LOVE",
                    "IDOL",
                    "Boy With Luv (feat. Halsey)",
                    "ON",
                    "Dynamite",
                    "Life Goes On",
                    "Butter",
                    "Yet To Come",
                    "Run BTS",
                    "Intro: Persona",
                    "Stay",
                    "Moon",
                    "Jamais Vu",
                    "Trivia: Seesaw",
                    "BTS Cypher PT.3: KILLER (feat. Supreme Boi)",
                    "Outro: Ego",
                    "Her",
                    "Filer",
                    "Friends",
                    "Singularity",
                    "00:00 (Zero O'Clock)",
                    "Euphoria",
                    "Dimple",
                    "For Youth"
                ]
            }
        ],
        songs: [
            "Dream Glow (BTS World Original Soundtrack)",
            "A Brand New day (BTS World Original Soundtrack)",
            "All Night (BTS World Original Soundtrack)",
            "Waste It On Me (with Steve Aoki)",
            "Savage Love",
            "Film out",
            "Bad Decisions (with Snoop Dogg)",
            "The Planet",
            "Take Two",


        ]
    },
});

console.log('Created Bangtan:', { bts1, bts2, bts3, bts4, bts5, bts6, bts7, ot7 });

//Create User
    const ogUser = await prisma.user.create({
        data: {
            email: "jkitch2012@gmail.com",
            password: "password",
            name: "Jess Williams",
            bias: SUGA,
            faveAlbums: [],
            faveSongs: []
        }
    })

    console.log('Created user:', { ogUser });

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })