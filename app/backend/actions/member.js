"use server";
import { Member } from "../models/memberModel";

import dbConnect from "@/app/backend/db/dbConnect";

async function createMember(data) {
  await dbConnect();
  const member = new Member({
    memberName: data.memberName,
    gender: data.gender,
  });
  await member.save();

  console.log(member);
  return member.toString();
}
export { createMember };
