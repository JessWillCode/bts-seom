/*
  Warnings:

  - You are about to drop the `UserAlbum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserAlbum" DROP CONSTRAINT "UserAlbum_albumId_fkey";

-- DropForeignKey
ALTER TABLE "UserAlbum" DROP CONSTRAINT "UserAlbum_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserSong" DROP CONSTRAINT "UserSong_songId_fkey";

-- DropForeignKey
ALTER TABLE "UserSong" DROP CONSTRAINT "UserSong_userId_fkey";

-- DropTable
DROP TABLE "UserAlbum";

-- DropTable
DROP TABLE "UserSong";

-- CreateTable
CREATE TABLE "FaveAlbum" (
    "userId" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,

    CONSTRAINT "FaveAlbum_pkey" PRIMARY KEY ("userId","albumId")
);

-- CreateTable
CREATE TABLE "FaveSong" (
    "userId" INTEGER NOT NULL,
    "songId" INTEGER NOT NULL,

    CONSTRAINT "FaveSong_pkey" PRIMARY KEY ("userId","songId")
);

-- CreateTable
CREATE TABLE "StageName" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bangtanId" INTEGER NOT NULL,

    CONSTRAINT "StageName_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "FaveAlbum" ADD CONSTRAINT "FaveAlbum_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaveAlbum" ADD CONSTRAINT "FaveAlbum_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaveSong" ADD CONSTRAINT "FaveSong_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaveSong" ADD CONSTRAINT "FaveSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StageName" ADD CONSTRAINT "StageName_bangtanId_fkey" FOREIGN KEY ("bangtanId") REFERENCES "Bangtan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
