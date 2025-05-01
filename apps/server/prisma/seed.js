import { PrismaClient } from '@prisma/client'

let prisma = new PrismaClient();

const main = async () => {
    // Create Bangtan Members
    const bts1 = await prisma.bangtan.create({
        data: {
            name: "Kim Namjoon",
            stageNames: {
                create: [
                    {name: "RM"},
                    {name: "Rap Monster"}
                ]
            },
            albums: {
                create:[
                    {
                        "albumTitle": "Indigo",
                        "yearReleased": 2022,
                        "songs": {
                            create: [
                                {title: "Yun"},
                                {title: "Still Life"},
                                {title: "All Day"},
                                {title: "Forg_tful"},
                                {title: "Closer"},
                                {title: "Indigo"},
                                {title: "Forget Me Not"},
                                {title: "Interlude: Reflection"},
                                {title: "Rewind"}
                            ]
                        }
                    },
                    {
                    "albumTitle": "Right Place, Wrong Person",
                    "yearReleased": 2024,
                    "songs": {
                        create: [
                            {title: "Intro (Right Place)"},
                            {title: "Perfectly Imperfect"},
                            {title: "Changing Me"},
                            {title: "Starlight"},
                            {title: "Through The Storm"},
                            {title: "In My Mind"},
                            {title: "Take Me Home"},
                            {title: "Fallen Star"},
                            {title: "To Be Free"},
                            {title: "Look Into Me"}
                ]}},
                    {
                        "albumTitle": "RM",
                        "yearReleased": 2015,
                        "songs": {
                            create:[
                                {title: "Awakening"},
                                {title: "Joke"},
                                {title: "I Believe"},
                                {title: "Indigo"},
                                {title: "No More Dream"},
                                {title: "Desire"},
                                {title: "The Only"},
                                {title: "Life"},
                                {title: "Lone Ranger"},
                                {title: "The Best"}
                ]
            }
                    },
                    {
                        "albumTitle": "mono.",
                        "yearReleased": 2018,
                        "songs": {
                            create: [
                                {title: "Tokyo"},
                                {title: "Moonchild"},
                                {title: "Forever Rain"},
                                {title: "Bad Bye"},
                                {title: "Seoul"},
                                {title: "Everythingoes"},
                                {title: "Happy"},
                                {title: "Skit"},
                                {title: "Jealousy"}
                        ]}
                    }]}
        },
    });

const bts2 = await prisma.bangtan.create({
    data: {
        name: "Kim Seokjin",
        stageNames: {
            create: [
                {name: "Jin"}
            ]
        },
        albums: {
            create:[
                {
                    "albumTitle": "Happy",
                    "yearReleased": 2024,
                    "songs": {
                        create:[
                            {title: "Running Wild"},
                            {title: "I'll Be There"},
                            {title: "Another Level"},
                            {title: "Falling"},
                            {title: "Heart on the Window (with WENDY)"},
                            {title: "I will come to you"}
            ]
        }
                },
]
},
        songs: {
            create:[
                {title: "Abyss"},
                {title: "Super Tuna"},
                {title: "Tonight"},
                {title: "The Astronaut"},
                {title: "Yours"},
                {title: "It's Definitely You"}
]
}
    },
});

const bts3 = await prisma.bangtan.create({
    data: {
        name: "Min Yoongi",
        stageNames: {
            create: [
                {name: "Agust D"},
                {name: "SUGA"}
            ]
        },
        albums: {
            create:[
                {
                    "albumTitle": "Agust D",
                    "yearReleased": 2016,
                    "songs": {
                        create: [
                            {title: "Intro: Dt sugA (feat. DJ Friz)"},
                            {title: "Agust D"},
                            {title: "Give It To Me"},
                            {title: "724148"},
                            {title: "140503 at dawn"},
                            {title: "The Last"},
                            {title: "Tony Montana"},
                            {title: "Interlude: Dream, Reality"},
                            {title: "so far away (feat. SURAN)"}
                        ]
                    }
                },
    {
        "albumTitle"
    :
        "D-2",
            "yearReleased"
    :
        2020,
            "songs"
    :
        {
            create: [
                {title: "Moonlight"},
                {title: "Daechwita"},
                {title: "What Do You Think?"},
                {title: "Strange (feat. RM)"},
                {title: "28 (feat. NiiHWA)"},
                {title: "Burn It (feat. MAX)"},
                {title: "People"},
                {title: "Honsool"},
                {title: "Interlude: Set Me Free"},
                {title: "Dear My Friend (feat. Kim Jong Wan of NELL)"}
            ]
        }
    }
,
    {
        "albumTitle"
    :
        "D-Day",
            "yearReleased"
    :
        2023,
            "songs"
    :
        {
            create: [
                {title: "D-Day"},
                {title: "Haegeum"},
                {title: "HUH?!(feat. J-Hope)"},
                {title: "AMYGDALA"},
                {title: "SDL"},
                {title: "People Pt. 2 (feat. IU)"},
                {title: "Polar Night"},
                {title: "Interlude: Dawn"},
                {title: "Snooze (feat. Ryuichi Sakamoto, WOOSUNG of The Rose)"},
                {title: "Life Goes On"}
            ]
        }
    }
]
}
    },
});

const bts4 = await prisma.bangtan.create({
    data: {
        name: "Jung Hoseok",
        stageNames: {
            create: [
                {name: "J-Hope"}
            ]
        },
        albums: {
            create:[
                {
                    "albumTitle": "Hope World",
                    "yearReleased": 2018,
                    "songs": {
                        create: [
                            {title: "Hope World"},
                            {title: "P.O.P (Piece of Peace)"},
                            {title: "Daydream"},
                            {title: "Base Line"},
                            {title: "Hangsang"},
                            {title: "Airplane"},
                            {title: "Blue Side (Outro)"}
                        ]
                    }
                },
                {
                    "albumTitle": "Jack in the Box",
                    "yearReleased": 2022,
                    "songs": {
                        create:[
                {title: "Intro: Jack in the Box"},
                {title: "Pandora's Box"},
                {title: "MORE"},
                {title: "STOP"},
                {title: "= (Equal Sign)"},
                {title: "Music Box: Reflection"},
                {title: "What if..."},
                {title: "Safety Zone"},
                {title: "Future"},
                {title: "Arson"}
            ]
        }
    },
                {
                    "albumTitle": "HOPE ON THE STREET VOL.1",
                    "yearReleased": 2024,
                    "songs": {
                create: [
                {title: "on the street (solo version)"},
                {title: "i wonder...(with Jung Kook of BTS)"},
                {title: "lock/unlock (with benny blanco & Nile Rodgers)"},
                {title: "what if...(dance mix)"},
                {title: "NEURON (with Gaeko & YOON MIRAE)"}
            ]
        }
    }
]},
        songs: {
            create: [
                {title: "MONA LISA"},
                {title: "Sweet Dreams (feat. Miguel)"},
                {title: "on the street (with J. Cole)"},
                {title: "Chicken Noodle Soup (feat. Becky G)"},
]
}
    },
});

const bts5 = await prisma.bangtan.create({
    data: {
        name: "Park Jimin",
        stageNames: {
            create: [
                {name: "Jimin"}
            ]},
        albums: {
            create:[
                {
                    "albumTitle": "FACE",
                    "yearReleased": 2023,
                    "songs": {
                        create:[
                            {title: "Face-off"},
                            {title: "Interlude: Dive"},
                            {title: "Like Crazy"},
                            {title: "Alone"},
                            {title: "Set Me Free Pt.2"},
                            {title: "Like Crazy (English Version)"}
                    ]}
                },
                {
                    "albumTitle": "MUSE",
                    "yearReleased": 2024,
                    "songs": {
                        create: [
                            {title: "Rebirth (Intro)"},
                            {title: "Interlude: Showtime"},
                            {title: "Smeraldo Garden Marching Band (feat. Loco)"},
                            {title: "Slow Dance (feat. Sofia Carson)"},
                            {title: "Be Mine"},
                            {title: "Who"},
                            {title: "Closer Than This"}
                    ]}
                }
            ]},
        songs: {
            create:[
                {title: "With You"},
                {title: "Christmas Love"},
                {title: "Promise"},
                {title: "Be Mine (English Version)"}
            ]}
    },
});

const bts6 = await prisma.bangtan.create({
    data: {
        name: "Kim Taehyung",
        stageNames: {
            create: [
                {name: "V"}
            ]},
        albums: {
            create: [{
                    "albumTitle": "Layover",
                    "yearReleased": 2023,
                    "songs": {
                        create: [
                            {title: "Rainy Days"},
                            {title: "Blue"},
                            {title: "Love Me Again"},
                            {title: "Slow Dancing"},
                            {title: "For Us"},
                            {title: "Slow Dancing (Piano Ver.)"}
                    ]}
            }]
        },
        songs: {
            create: [
                {title: "It's Definitely You"},
                {title: "Scenery"},
                {title: "Winter Bear"},
                {title: "Sweet Night"},
                {title: "Snow Flower"},
                {title: "Christmas Tree"},
                {title: "wherever u r (ft. UMI)"},
                {title: "FRI(END)S"},
                {title: "Winter Ahead (with PARK HYO SHIN)"},
                {title: "White Christmas (with Bing Crosby)"}
            ]}
    },
});

const bts7 = await prisma.bangtan.create({
    data: {
        name: "Jeon Jungkook",
        stageNames: {
            create: [
                {name: "Jungkook"}
            ]},
        albums: {
            create: [
                {
                    "albumTitle": "Golden",
                    "yearReleased": 2023,
                    "songs": {
                        create: [
                            {title: "3D (feat. Jack Harlow)"},
                            {title: "Closer to You (feat. Major Lazer)"},
                            {title: "Seven (feat. Latto)(Explicit Ver.)"},
                            {title: "Seven (feat. Latto)(Clean Ver.)"},
                            {title: "Standing Next to You"},
                            {title: "Yes or No"},
                            {title: "Please Don't Change (feat. DJ Snake)"},
                            {title: "Hate You"},
                            {title: "Somebody"},
                            {title: "Too Sad to Dance"},
                            {title: "Shot Glass of Tears"}
                    ]}}
            ]
        },
        songs: {
            create: [
                {title: "Never Let Go"},
                {title: "Standing Next to You (USHER Remix)"},
                {title: "3D (Justin Timberlake Remix)"},
                {title: "TOO MUCH (with The Kid LAROI and Central Cee)"},
                {title: "Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack]"},
                {title: "My You"},
                {title: "Stay Alive (Prod. SUGA of BTS)"},
                {title: "Still with You"},
                {title: "Left and Right (with Charlie Puth)"}
]
}
    },
});

const ot7 = await prisma.bangtan.create({
    data: {
        name: "BTS",
        stageNames: {
            create:[
                {name: "RM"},
                {name: "Jin"},
                {name: "SUGA"},
                {name: "J-Hope"},
                {name: "Jimin"},
                {name: "V"},
                {name: "Jungkook"}
            ]},
        albums: {
            create: [
                {
                    "albumTitle": "2 Cool 4 Skool",
                    "yearReleased": 2013,
                    "songs": {
                        create: [
                            {title: "Intro: 2 Cool 4 Skool"},
                            {title: "We Are Bulletproof Pt.2"},
                            {title: "Skit: Circle Room Talk"},
                            {title: "No More Dream"},
                            {title: "Interlude"},
                            {title: "Like"},
                            {title: "Outro: Circle Room Cypher"}
            ]}},
                {
        "albumTitle": "O!RUL8,2?",
        "yearReleased": 2013,
        "songs": {
            create: [
                {title: "Intro: O!RUL8,2?"},
                {title: "N.O"},
                {title: "We On"},
                {title: "Skit: R U Happy Now?"},
                {title: "If I Ruled the World"},
                {title: "Coffee"},
                {title: "BTS Cypher Pt.1"},
                {title: "Attack on Bangtan"},
                {title: "Paldogangsan"},
                {title: "Outro: Luv in Skool"}
            ]
        }
    },
                {
        "albumTitle": "Skool Luv Affair",
        "yearReleased": 2014,
        "songs": {
            create:[
                {title: "Intro: Skool Luv Affair"},
                {title: "Boy in Luv"},
                {title: "Skit: Soulmate"},
                {title: "Where You From"},
                {title: "Just One Day"},
                {title: "Tomorrow"},
                {title: "BTS Cypher Pt.2: Triptych"},
                {title: "Spine Breaker"},
                {title: "Jump"},
                {title: "Outro: Propose"}
            ]}},
                {
        "albumTitle": "Skool Luv Affair (Special Addition)",
        "yearReleased": 2014,
        "songs": {
            create: [
                {title: "Miss Right"},
                {title: "Like (Slow Jam Remix)"},
                {title: "Intro: Skool Luv Affair"},
                {title: "Boy in Luv"},
                {title: "Skit: Soulmate"},
                {title: "Where You From"},
                {title: "Just One Day"},
                {title: "Tomorrow"},
                {title: "BTS Cypher Pt.2: Triptych"},
                {title: "Spine Breaker"},
                {title: "Jump"},
                {title: "Outro: Propose"}
            ]}},
                {
        "albumTitle": "Dark & Wild",
        "yearReleased": 2014,
        "songs": {
            create: [
                {title: "Intro: What Am I to You"},
                {title: "Danger"},
                {title: "War of Hormone"},
                {title: "Hip Hop Phile"},
                {title: "Let Me Know"},
                {title: "Rain"},
                {title: "BTS Cypher Pt.3: Killer"},
                {title: "Interlude: What Are You Doing Now"},
                {title: "Could You Turn off Your Cell Phone"},
                {title: "Embarrassed"},
                {title: "24/7=Heaven"},
                {title: "Look Here"},
                {title: "So 4 more"},
                {title: "Outro: Do You Think It Makes Sense?"}
            ]}},
                {
                    "albumTitle": "Wake Up (Standard Edition)",
                    "yearReleased": 2014,
                    "songs": {
                        create: [
                            {title: "Intro."},
                            {title: "The Stars"},
                            {title: "Jump - Japanese Ver."},
                            {title: "Danger - Japanese Ver."},
                            {title: "Boy in Luv - Japanese Ver."},
                            {title: "Just One Day"},
                            {title: "line!"},
                            {title: "line!Pt.2 -Ano Bashode-"},
                            {title: "No More Dream - Japanese Ver."},
                            {title: "Shingeki no Boudan - Japanese Ver."},
                            {title: "N.O - Japanese Ver."},
                            {title: "Wake Up"},
                            {title: "Outro."}
                        ]}},
                {
                    "albumTitle": "The Most Beautiful Moment in Life Pt.1",
                    "yearReleased": 2015,
                    "songs": {
                        create: [
                            {title: "Intro: The Most Beautiful Moment in Life"},
                            {title: "I Need U"},
                            {title: "Hold Me Tight"},
                            {title: "Skit: Expectation!"},
                            {title: "Dope"},
                            {title: "Boyz with Fun"},
                            {title: "Converse High"},
                            {title: "Moving On"},
                            {title: "Outro: Love Is Not Over"}
                        ]}},
                {
                    "albumTitle": "The Most Beautiful Moment in Life Pt.2",
                    "yearReleased": 2015,
                    "songs": {
                        create: [
                            {title: "Intro: Never Mind"},
                            {title: "Run"},
                            {title: "Butterfly"},
                            {title: "Whalien 52"},
                            {title: "Ma City"},
                            {title: "Silver Spoon"},
                            {title: "Skit: One Night in a Strange City"},
                            {title: "Autumn Leaves"},
                            {title: "Outro: House of Cards"}
            ]}},
                {
                    "albumTitle": "The Most Beautiful Moment in Life: Young Forever",
                    "yearReleased": 2016,
                    "songs": {
                        create:[
                            {title: "Intro: The Most Beautiful Moment in Life"},
                            {title: "I Need U"},
                            {title: "Hold Me Tight"},
                            {title: "Autumn Leaves"},
                            {title: "Butterfly (Prologue Mix)"},
                            {title: "Run"},
                            {title: "Ma City"},
                            {title: "Silver Spoon"},
                            {title: "Dope"},
                            {title: "Burning Up (Fire)"},
                            {title: "Save Me"},
                            {title: "Epilogue: Young Forever"},
                            {title: "Converse High"},
                            {title: "Moving On"},
                            {title: "Whalien 52"},
                            {title: "House of Cards (Full Length Edition)"},
                            {title: "Love is Not Over (Full Length Edition)"},
                            {title: "I Need U (Urban Mix)"},
                            {title: "I Need U (Remix)"},
                            {title: "Run (Ballad Mix)"},
                            {title: "Run (Alternative Mix)"},
                            {title: "Butterfly (Alternative Mix)"}
            ]}},
                {
        "albumTitle": "Youth",
        "yearReleased": 2016,
        "songs": {
            create:[
                {title: "Introduction: Youth"},
                {title: "Run - Japanese Ver."},
                {title: "Fire - Japanese Ver."},
                {title: "Dope - Chou Yabee! --Japanese Ver."},
                {title: "Good Day"},
                {title: "Save Me - Japanese Ver."},
                {title: "Funtan Syounendan - Japanese Ver."},
                {title: "Peppuse - Japanese Ver."},
                {title: "Wishing On A Star"},
                {title: "Butterfly - Japanese Ver."},
                {title: "I Need U - Japanese Ver"},
                {title: "Epilogue: Young Forever - Japanese Ver."}
            ]}},
                {
                    "albumTitle": "Wings",
                    "yearReleased": 2016,
                    "songs": {
                        create:[
                            {title: "Intro: Boy Meets Evil"},
                            {title: "Blood Sweat & Tears"},
                            {title: "Begin"},
                            {title: "Lie"},
                            {title: "Stigma"},
                            {title: "First Love"},
                            {title: "Reflection"},
                            {title: "MAMA"},
                            {title: "Awake"},
                            {title: "Lost"},
                            {title: "BTS Cypher 4"},
                            {title: "Am I Wrong"},
                            {title: "21st Century Girl"},
                            {title: "2!3!"},
                            {title: "Interlude: Wings"}
            ]}},
                {
                    "albumTitle": "You Never Walk Alone",
                    "yearReleased": 2017,
                    "songs": {
                        create:[
                            {title: "Intro: Boy Meets Evil"},
                            {title: "Blood Sweat & Tears"},
                            {title: "Begin"},
                            {title: "Lie"},
                            {title: "Stigma"},
                            {title: "First Love"},
                            {title: "Reflection"},
                            {title: "MAMA"},
                            {title: "Awake"},
                            {title: "Lost"},
                            {title: "BTS Cypher 4"},
                            {title: "Am I Wrong"},
                            {title: "21st Century Girl"},
                            {title: "2!3!"},
                            {title: "Spring Day"},
                            {title: "Not Today"},
                            {title: "Outro: Wings"},
                            {title: "A Supplementary Story: You Never Walk Alone"}
                    ]}},
                {
                    "albumTitle": "Love Yourself 'Her'",
                    "yearReleased": 2017,
                    "songs": {
                        create: [
                            {title: "Intro: Serendipity"},
                            {title: "DNA"},
                            {title: "Best Of Me"},
                            {title: "dimple"},
                            {title: "Pied Piper"},
                            {title: "Skit: Billboard Music Awards Speech"},
                            {title: "Mic Drop"},
                            {title: "Go Go"},
                            {title: "Outro: Her"}
                    ]}},
                {
                    "albumTitle": "FACE YOURSELF",
                    "yearReleased": 2018,
                    "songs": {
                        create: [
                            {title: "INTRO: Ringwanderung"},
                            {title: "Best Of Me - Japanese Ver."},
                            {title: "Blood Sweat & Tears (Japanese Ver.)"},
                            {title: "DNA - Japanese Ver."},
                            {title: "Not Today - Japanese Ver."},
                            {title: "MIC Drop - Japanese Ver."},
                            {title: "Don't Leave Me"},
                            {title: "Go Go - Japanese Ver."},
                            {title: "Crystal Snow"},
                            {title: "Spring Day - Japanese Ver."},
                            {title: "Let Go"},
                            {title: "Outro: Crack"}
                    ]}},
                {
                    "albumTitle": "Love Yourself 'Tear'",
                    "yearReleased": 2018,
                    "songs": {
                        create: [
                            {title: "Intro: Singularity"},
                            {title: "FAKE LOVE"},
                            {title: "The Truth Untold (feat. Steve Aoki)"},
                            {title: "134340"},
                            {title: "Paradise"},
                            {title: "Love Maze"},
                            {title: "Magic Shop"},
                            {title: "Airplane Pt.2"},
                            {title: "Anpanman"},
                            {title: "So What"},
                            {title: "Outro: Tear"}
                    ]}},
                {
                    "albumTitle": "Love Yourself 'Answer'",
                    "yearReleased": 2018,
                    "songs": {
                        create: [
                            {title: "Euphoria"},
                            {title: "Trivia: Just Dance"},
                            {title: "Serendipity (Full Length Edition)"},
                            {title: "DNA"},
                            {title: "Dimple"},
                            {title: "Trivia: Love"},
                            {title: "Her"},
                            {title: "Singularity"},
                            {title: "FAKE LOVE"},
                            {title: "The Truth Untold"},
                            {title: "Trivia: Seesaw"},
                            {title: "Tear"},
                            {title: "Epiphany"},
                            {title: "I'm Fine"},
                            {title: "IDOL"},
                            {title: "Answer: Love Myself"},
                            {title: "Magic Shop"},
                            {title: "Best Of Me"},
                            {title: "Airplane Pt.2"},
                            {title: "Go Go"},
                            {title: "Anpanman"},
                            {title: "MIC Drop"},
                            {title: "DNA (Pedal 2 LA Mix)"},
                            {title: "FAKE LOVE (Rocking Vibe Mix)"},
                            {title: "MIC Drop (Steve Aoki Remix)(Full Length Edition)"},
                            {title: "IDOL (feat. Nicki Minaj)"}
                    ]}},
                {
                    "albumTitle": "MAP OF THE SOUL: PERSONA",
                    "yearReleased": 2019,
                    "songs": {
                        create: [
                            {title: "Intro: Persona"},
                            {title: "Boy With Luv (feat. Halsey)"},
                            {title: "Mikrokosmos"},
                            {title: "Make It Right"},
                            {title: "HOME"},
                            {title: "Jamais Vu"},
                            {title: "Dionysus"}
                    ]}},
                {
                    "albumTitle": "MAP OF THE SOUL: 7",
                    "yearReleased": 2020,
                    "songs": {
                        create: [
                            {title: "Intro: Persona"},
                            {title: "Boy With Luv (feat. Halsey)"},
                            {title: "Make It Right"},
                            {title: "Jamais Vu"},
                            {title: "Dionysus"},
                            {title: "Interlude: Shadow"},
                            {title: "Black Swan"},
                            {title: "Filter"},
                            {title: "My Time"},
                            {title: "Louder than Bombs"},
                            {title: "ON"},
                            {title: "UGH!"},
                            {title: "00:00 (Zero O'Clock)"},
                            {title: "Inner Child"},
                            {title: "Friends"},
                            {title: "Moon"},
                            {title: "Respect"},
                            {title: "We are Bulletproof: the Eternal"},
                            {title: "Outro: Ego"},
                            {title: "ON (feat. Sia)"}
                    ]}},
                {
                    "albumTitle": "MAP OF THE SOUL: 7 ~THE JOURNEY~",
                    "yearReleased": 2020,
                    "songs": {
                        create: [
                            {title: "Intro: Calling"},
                            {title: "Stay Gold"},
                            {title: "Boy With Luv - Japanese Ver."},
                            {title: "Make It Right - Japanese Ver."},
                            {title: "Dionysus - Japanese Ver."},
                            {title: "IDOL - Japanese Ver."},
                            {title: "Airplane Pt.2 - Japanese Ver."},
                            {title: "FAKE LOVE - Japanese Ver."},
                            {title: "Black Swan - Japanese Ver."},
                            {title: "ON - Japanese Ver."},
                            {title: "Lights"},
                            {title: "Your eyes tell"},
                            {title: "OUTRO: The Journey"}
                    ]}},
                {
                    "albumTitle": "BE",
                    "yearReleased": 2020,
                    "songs": {
                        create:[
                            {title: "Life Goes On"},
                            {title: "Fly To My Room"},
                            {title: "Blue & Grey"},
                            {title: "Skit"},
                            {title: "Telepathy"},
                            {title: "Dis-ease"},
                            {title: "Stay"},
                            {title: "Dynamite"}
                    ]}},
                {
                    "albumTitle": "Proof",
                    "yearReleased": 2022,
                    "songs": {
                        create:[
                            {title: "Born Singer"},
                            {title: "No More Dream"},
                            {title: "N.O"},
                            {title: "Boy In Luv"},
                            {title: "Danger"},
                            {title: "I NEED U"},
                            {title: "RUN"},
                            {title: "Burning Up (FIRE)"},
                            {title: "Blood Sweat & Tears"},
                            {title: "Spring Day"},
                            {title: "DNA"},
                            {title: "FAKE LOVE"},
                            {title: "IDOL"},
                            {title: "Boy With Luv (feat. Halsey)"},
                            {title: "ON"},
                            {title: "Dynamite"},
                            {title: "Life Goes On"},
                            {title: "Butter"},
                            {title: "Yet To Come"},
                            {title: "Run BTS"},
                            {title: "Intro: Persona"},
                            {title: "Stay"},
                            {title: "Moon"},
                            {title: "Jamais Vu"},
                            {title: "Trivia: Seesaw"},
                            {title: "BTS Cypher PT.3: KILLER (feat. Supreme Boi)"},
                            {title: "Outro: Ego"},
                            {title: "Her"},
                            {title: "Filer"},
                            {title: "Friends"},
                            {title: "Singularity"},
                            {title: "00:00 (Zero O'Clock)"},
                            {title: "Euphoria"},
                            {title: "Dimple"},
                            {title: "For Youth"}
                    ]}}
            ]
        },
        songs: {
            create: [
                {title: "Dream Glow (BTS World Original Soundtrack)"},
                {title: "A Brand New day (BTS World Original Soundtrack)"},
                {title: "All Night (BTS World Original Soundtrack)"},
                {title: "Waste It On Me (with Steve Aoki)"},
                {title: "Savage Love"},
                {title: "Film out"},
                {title: "Bad Decisions (with Snoop Dogg)"},
                {title: "The Planet"},
                {title: "Take Two"},
            ]}
    }});

console.log('Created Bangtan:', { bts1, bts2, bts3, bts4, bts5, bts6, bts7, ot7 });

//Create User
    const ogUser = await prisma.user.create({
        data: {
            email: "jkitch2012@gmail.com",
            password: "password",
            name: "Jess Williams",
            bias: "SUGA"
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