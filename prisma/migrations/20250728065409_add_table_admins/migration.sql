-- CreateEnum
CREATE TYPE "LevelStatus" AS ENUM ('SUPER', 'NORMAL');

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "level" "LevelStatus" NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL,
    "updatedAt" TIMESTAMP(6),
    "deletedAt" TIMESTAMP(6),
    "otp" VARCHAR(6),
    "otpExpired" TIMESTAMP(6),

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");
