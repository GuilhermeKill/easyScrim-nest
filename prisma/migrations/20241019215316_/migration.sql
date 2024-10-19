-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "uu_id" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "riot_id" TEXT NOT NULL,
    "lane" TEXT NOT NULL,
    "riot_nick_name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
