/*
  Warnings:

  - You are about to drop the column `tipo` on the `Tipo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Tipo` DROP COLUMN `tipo`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT '';
