/*
  Warnings:

  - You are about to drop the column `Habilidades` on the `pokemon` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imagem]` on the table `pokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `pokemon` DROP COLUMN `Habilidades`;

-- CreateTable
CREATE TABLE `pokemon_tipo` (
    `pokemonId` INTEGER NOT NULL,
    `tipoID` INTEGER NOT NULL,

    PRIMARY KEY (`pokemonId`, `tipoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `pokemon_name_key` ON `pokemon`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `pokemon_imagem_key` ON `pokemon`(`imagem`);

-- AddForeignKey
ALTER TABLE `pokemon_tipo` ADD CONSTRAINT `pokemon_tipo_pokemonId_fkey` FOREIGN KEY (`pokemonId`) REFERENCES `pokemon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pokemon_tipo` ADD CONSTRAINT `pokemon_tipo_tipoID_fkey` FOREIGN KEY (`tipoID`) REFERENCES `Tipo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
