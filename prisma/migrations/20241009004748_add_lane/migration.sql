/*
  Warnings:

  - Added the required column `lane` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uu_id" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "riot_id" TEXT NOT NULL,
    "lane" TEXT NOT NULL,
    "riot_nick_name" TEXT NOT NULL
);
INSERT INTO "new_users" ("avatar", "description", "email", "id", "name", "password", "riot_id", "riot_nick_name", "uu_id") SELECT "avatar", "description", "email", "id", "name", "password", "riot_id", "riot_nick_name", "uu_id" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
