import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ArrowRightCircle } from 'lucide-react';
import { buttonVariants } from './ui/button';

interface HomeLinkProps {
  href: string;
  text: string;
}

function HomeLink({ href, text }: HomeLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'default' }),
        'flex w-full items-center gap-0 rounded-md !bg-transparent px-0 py-0 md:h-16',
      )}
    >
      <span className="inline-flex h-9 w-1/5 items-center justify-center rounded-l-md bg-blue-secondary p-2 text-white md:h-16">
        <ArrowRightCircle className="md:!h-6 md:!w-6" />
      </span>

      <span className="inline-flex h-full w-full items-center justify-center rounded-r-md bg-blue-primary p-2 text-sm font-medium text-white md:text-2xl">
        {text}
      </span>
    </Link>
  );
}

export { HomeLink };
