import { ModeToggle } from '@/components/ui/mode-toggle';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import { UserNav } from './components/user-nav';

interface Props {
  user: User;
}
export function AdminHeader({ user }: Props) {
  return (
    <div className="border-b bg-white dark:bg-black">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="space-x-4">
          <Link href="/admin">
            <img
              src="/imgs/logo_branca.png"
              alt="logo_branca.png"
              className="max-w-40 invert dark:invert-0"
            />
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserNav user={user} />
        </div>
      </div>
    </div>
  );
}
