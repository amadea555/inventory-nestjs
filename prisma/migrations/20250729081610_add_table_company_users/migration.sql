-- CreateTable
CREATE TABLE "companyUsers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "companyId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "level" "LevelStatus" NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL,
    "updatedAt" TIMESTAMP(6),
    "deletedAt" TIMESTAMP(6),

    CONSTRAINT "companyUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companyUsers_email_key" ON "companyUsers"("email");

-- AddForeignKey
ALTER TABLE "companyUsers" ADD CONSTRAINT "companyUsers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
