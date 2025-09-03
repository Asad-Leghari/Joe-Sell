import { NextResponse } from "next/server";
import passport from "@/backend/lib/passport";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(req: Request) {
  return new Promise((resolve) => {
    passport.authenticate("google", { session: false }, (err, user, info) => {
      if (err || !user) {
        return resolve(
          NextResponse.json(
            { success: false, error: "Google login failed" },
            { status: 401 }
          )
        );
      }

      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
        expiresIn: "1d",
      });

      resolve(
        NextResponse.redirect(
          `http://localhost:3000/newdashboard?token=${token}`
        )
      );
    })(req as any, {} as any, resolve as any);
  });
}
