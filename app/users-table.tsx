'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ReqresUser } from '@/lib/query';
import { deleteUser } from './actions';
import { useRouter } from 'next/navigation';

export function UsersTable({
  users,
  nextPage,
  prevPage
}: {
  users: ReqresUser[];
  nextPage: number | null;
  prevPage: number | null;
}) {
  const router = useRouter();

  function onClickNextPage() {
    router.replace(`/?page=${nextPage}`);
  }

  function onClickPrevPage() {
    router.replace(`/?page=${prevPage}`);
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">First Name</TableHead>
              <TableHead className="hidden md:table-cell">Last Name</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </form>
      {prevPage !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClickPrevPage()}
        >
          Previous Page
        </Button>
      )}
      {nextPage !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClickNextPage()}
        >
          Next Page
        </Button>
      )}
    </>
  );
}

function UserRow({ user }: { user: ReqresUser }) {
  const userId = user.id;
  const deleteUserWithId = deleteUser.bind(null, userId);

  return (
    <TableRow>
      <TableCell className="font-medium">{user.first_name}</TableCell>
      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
      <TableCell>{user.first_name}</TableCell>
      <TableCell>{user.last_name}</TableCell>
      <TableCell>
        <Button
          className="w-full"
          size="sm"
          variant="outline"
          formAction={deleteUserWithId}
          disabled
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
