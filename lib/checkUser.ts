import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma"; // Ensure db is properly imported

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null; // Return null if no user is found
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id, 
      },
    });

    if (loggedInUser) {
      return loggedInUser; // Return existing user
    }

    // Construct full name safely
    const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

    // Create a new user in the database
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: name || "Unknown User", 
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress, 
      },
    });

    return newUser;

  } catch (error) {
    console.error("Error in checkUser:", error); 
    return null; 
  }
};
