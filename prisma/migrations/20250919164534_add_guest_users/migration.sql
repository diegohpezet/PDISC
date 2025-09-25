-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `isGuest` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `email` VARCHAR(191) NULL;
