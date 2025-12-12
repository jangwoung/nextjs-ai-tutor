import { getServerSession, type NextAuthOptions } from "next-auth";

// ハンズオン開始時点では、next-auth の詳細設定（GitHub Provider / Prisma Adapter など）は
// まだ行いません。ここでは空のベースだけを用意しておき、認証フェーズで受講者に完成させてもらいます。

export const authOptions: NextAuthOptions = {
  providers: [
    // TODO: GitHub Provider を追加し、Prisma Adapter を設定する
  ],
  // TODO: セッション戦略やコールバック（session.user.id の追加）をここに実装する
};

export async function auth() {
  // 現時点ではセッション情報は常に null になります。
  // 認証フェーズで authOptions を実装したあと、実際のセッションが返るようになります。
  return getServerSession(authOptions);
}

