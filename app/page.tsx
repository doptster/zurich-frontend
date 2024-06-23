import { getUsers } from '@/lib/query';
import { UsersTable } from './users-table';
import { Search } from './search';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { firstName: string; lastName: string, page: string, unmask: string };
}) {
  const firstName = searchParams.firstName ?? '';
  const lastName = searchParams.lastName ?? '';
  const page = searchParams.page ?? 1;
  const unmask = searchParams.unmask ?? 0;
  const { users, nextPage, prevPage } = await getUsers(firstName, lastName, Number(page), Number(unmask));

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      <div className="w-full mb-4">
        <Search firstName={searchParams.firstName} lastName={searchParams.lastName} unmask={Number(unmask)}/>
      </div>
      <UsersTable users={users} nextPage={nextPage} prevPage={prevPage} />
    </main>
  );
}
