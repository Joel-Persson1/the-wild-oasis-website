import NextAuth from "next-auth";
import { authOptions } from "../../../../auth.config"; // eller korrekt importväg till din config

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
