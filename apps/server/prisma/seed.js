const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
    // Create Bangtan Members
    const bts1 = await prisma.bangtan.create({
        data: {
            name: 'Kim Namjoon',
            albums: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        },
    });

const bts2 = await prisma.bangtan.create({
    data: {
        name: 'Kim Seokjin',
        albums: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
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