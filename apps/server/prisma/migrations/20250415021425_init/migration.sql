-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_artistId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_artistId_fkey";

-- AlterTable
ALTER TABLE "Album" ALTER COLUMN "artistId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Song" ALTER COLUMN "artistId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Bangtan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Bangtan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
