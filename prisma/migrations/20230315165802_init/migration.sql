/*
  Warnings:

  - You are about to drop the `Pokemon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Pokemon`;

-- CreateTable
CREATE TABLE `pokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NULL,
    `desc` VARCHAR(191) NOT NULL,
    `altura` INTEGER NOT NULL,
    `peso` INTEGER NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `Habilidades` VARCHAR(191) NOT NULL,
    `Tipo` VARCHAR(191) NOT NULL,
    `Fraquezas` VARCHAR(191) NOT NULL,
    `Status` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Habilidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `habilidade` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tipo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,
    `Fraquezas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
