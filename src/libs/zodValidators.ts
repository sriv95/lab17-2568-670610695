import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/pdf",
];

//////  Items Validators //////

export const zUserId = z
  .string()
  .length(4, { message: "User Id must contain 4 characters" });
export const zTaskId = z.uuidv4({ message: "Invalid UUID format" });
const zTitle = z.string().min(1, "Title is required");
const zDescription = z.string().min(1, "Description is required");
const zDueDate = z.coerce.date();
const zDoneAt = z.coerce.date().optional();
export const zIsDone = z.boolean().nullish();
const zFilename = z.string().nullish();
const zCreateAt = z.coerce.date().optional();
const zUpdateAt = z.coerce.date().optional();
export const zfile = z
  .object({
    size: z.number(),
    type: z.string(),
  })
  .refine((zfile) => zfile.size <= MAX_FILE_SIZE, {
    message: "File size must be less than 5MB",
  })
  .refine((zfile) => ACCEPTED_IMAGE_TYPES.includes(zfile.type), {
    message: "Only .jpg, .jpeg, .png, or .pdf files are accepted",
  })
  .optional();

export const zItemPostBody = z.object({
  title: zTitle,
  description: zDescription,
  dueDate: zDueDate,
  filename: zFilename,
  file: zfile.nullish(),
});

export const zItemPutBody = z.object({
  title: zTitle.nullish(),
  description: zDescription.nullish(),
  dueDate: zDueDate.nullish(),
  isDone: zIsDone,
  filename: zFilename.nullish(),
  file: zfile.nullish(),
});

export const zItemDeleteBody = z.object({
  taskId: zTaskId,
});

export const zUserPutBody = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.email({ message: "Invalid email" }),
  dateOfBirth: z.coerce.date(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
