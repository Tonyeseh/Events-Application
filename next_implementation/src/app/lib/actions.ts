"use server";
import { z } from "zod";
import { addUser, getUser } from "./db";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  firstName: z
    .string({
      invalid_type_error: "Please enter a valid first name",
      required_error: "First name is required",
    })
    .min(2, { message: "Please enter a valid first name" }),
  lastName: z
    .string({
      invalid_type_error: "Please enter a valid last name",
      required_error: "Last name is required",
    })
    .min(2, { message: "Please enter a valid last name" }),
  email: z
    .string({
      invalid_type_error: "Please enter a valid email address",
      required_error: "Email address is required",
    })
    .email({ message: "Please provide a valid email address" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(7, { message: "Password too short..." }),
});

const CreateUser = FormSchema.omit({ id: true }).required();

export async function createUser(prevState: State, formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Some Fields are not entered correctly",
    };
  }

  const { firstName, lastName, email, password } = validatedFields.data;
  try {
    const existingUser = await getUser(email);
    if (existingUser) {
      return {
        error: { email: ["Email has been used already try logining in"] },
        message: "Email has already been used. Try sigining in.",
      };
    }
    const userId = addUser(firstName, lastName, email, password);
    if (!userId) {
      throw new Error("Insert Failed!");
    }
  } catch (error) {
    console.error(error);
    return { message: "Database Error: Failed to create user" };
  }

  redirect("/login");
}

export async function createEvent(prevState:State, formData: FormData) {
  console.log(formData)
  return {message: "Not implemented yet"}
  redirect('/')
}
