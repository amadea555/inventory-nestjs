-- AlterTable
ALTER TABLE "companyUsers" ADD COLUMN     "otp" VARCHAR(6),
ADD COLUMN     "otpExpired" TIMESTAMP(6);
