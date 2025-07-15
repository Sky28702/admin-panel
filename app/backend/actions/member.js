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

async function deleteMember(id) {
  const deletedMember = Member.findByIdAndDelete(id);
  console.log(`"member dlt"$ deletedMember`);
  return deletedMember;
}

async function updateMember(id, formData) {
  await dbConnect();
  let member = {
    memberName: formData.get("memberName"),
    gender: formData.get("gender"),
  };

  // let member = {
  //   memberName: data.memberName,
  //   gender: data.gender,
  // };
  await Member.findByIdAndUpdate(id, member);
  return updateMember;
}

export { createMember, deleteMember, updateMember };
