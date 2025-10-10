import "dotenv/config";
import Debug from "debug";
import bcrypt from "bcrypt";

const debug = Debug("app:compare");

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};
