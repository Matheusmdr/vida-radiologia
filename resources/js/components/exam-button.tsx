import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { buttonVariants } from './ui/button';

interface ExamButtonProps {
  href: string;
  iconSrc?: string;
  text: string;
  className?: string;
}

function ExamButton({ href, text, iconSrc, className }: ExamButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'default' }),
        'mx-auto flex h-16 w-3/5 max-w-sm items-center justify-center rounded-lg !bg-blue-primary text-center text-xs font-semibold md:h-28 md:w-full md:text-2xl',
        className,
      )}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={text}
          className="mr-2 max-w-12 p-1 md:mr-4 md:max-w-20 md:p-2"
        />
      )}
      <span className="max-w-[200px] whitespace-normal text-left">{text}</span>
    </Link>
  );
}

export { ExamButton };
