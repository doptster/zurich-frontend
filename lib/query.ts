import 'server-only';

// Define the User interface to match the user object structure from Reqres API
export interface ReqresUser {
  id: number;         // User's unique ID
  email: string;      // User's email address
  first_name: string; // User's first name
  last_name: string;  // User's last name
  avatar: string;     // URL to the user's avatar image
}

// Function to fetch users from Reqres API
async function fetchUsers(page: number = 1): Promise<{
  users: ReqresUser[];
  nextPage: number | null;
  prevPage: number | null
}> {
  const response = await fetch(`https://reqres.in/api/users/?page=${page}`);
  if (response.status != 200) {
    console.error('Error fetching users:', response.statusText);
    return { users: [], nextPage: null, prevPage: null };
  }
  const data = await response.json();
  const nextPage = data.page < data.total_pages? page+1 : null
  const previousPage = data.page > 1 ? page - 1 : null

  return { users: data.data as ReqresUser[], nextPage: nextPage, prevPage: previousPage }; // Cast the returned data to ReqresUser[]
}

// Function to mask the email
function maskEmail(email: string): string {
  const [username, domain] = email.split('@');
  if (username.length <= 1) {
    // If the username part is very short, just mask everything except the first character
    return `${username}****@${domain}`;
  } else {
    // Mask all characters in the username except the first one
    return `${username[0]}****@${domain}`;
  }
}

// Function to mask emails in a list of users
function maskUserEmails(users: ReqresUser[]): ReqresUser[] {
  return users.map(user => ({
    ...user,
    email: maskEmail(user.email)
  }));
}

export async function getUsers(
  firstName: string,
  lastName: string,
  page: number,
  unmask: number
): Promise<{
  users: ReqresUser[];
  nextPage: number | null;
  prevPage: number | null;
}> {
  const { users, nextPage, prevPage } = await fetchUsers(page);
  // Filter by User Search
  const filteredUsers = users.filter(user => 
    user.first_name.toLowerCase().startsWith(firstName.toLowerCase()) && 
    user.last_name.toLowerCase().startsWith(lastName.toLowerCase())
  );
  // Masking PII Information
  let maskedUsers = filteredUsers
  if (!unmask) {
    maskedUsers = maskUserEmails(filteredUsers);
  }

  return { users: maskedUsers, nextPage, prevPage };
}
