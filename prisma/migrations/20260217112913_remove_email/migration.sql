/*
  Warnings:

  - You are about to drop the column `email` on the `patient` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `RendezVous_patientId_fkey` ON `rendezvous`;

-- DropIndex
DROP INDEX `RendezVous_prestationId_fkey` ON `rendezvous`;

-- AlterTable
ALTER TABLE `patient` DROP COLUMN `email`;

-- AddForeignKey
ALTER TABLE `RendezVous` ADD CONSTRAINT `RendezVous_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RendezVous` ADD CONSTRAINT `RendezVous_prestationId_fkey` FOREIGN KEY (`prestationId`) REFERENCES `Prestation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
