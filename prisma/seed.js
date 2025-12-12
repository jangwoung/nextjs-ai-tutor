// ハンズオン開始時点の seed スクリプトは空にしておきます。
// Phase 4（Posts Model & Seed Data）の演習で、受講者にユーザーと投稿データを
// ここに実装してもらいます。

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // TODO: ユーザーと Post のサンプルデータを作成する処理を追加する
  console.log("No seed data yet. Implement seeding logic as part of the hands-on.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect();
  });

