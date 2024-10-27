import { useTheme } from '@/components/theme-provider';
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { MdEditor, type Themes } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import TurndownService from 'turndown';

interface MdEditorFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  className?: string;
  htmlValue?: string;
}
export function MdEditorField<T extends FieldValues>({
  form,
  name,
  label,
  className,
  htmlValue,
}: MdEditorFieldProps<T>) {
  const { theme } = useTheme();
  const [mdTheme, setMdTheme] = useState<Themes>('light');
  const [text, setText] = useState<string>(form.getValues(name));
  const turndownService = useMemo(() => new TurndownService(), []);

  const setTheme = useCallback(() => {
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      setMdTheme(systemTheme);
    } else setMdTheme(theme as Themes);
  }, [theme]);

  const convertMarkdownToHtml = useCallback(() => {
    if (!htmlValue) {
      setText(' ');
    }
    if (htmlValue) {
      setText(turndownService.turndown(htmlValue));
    }
  }, [htmlValue, turndownService]);

  useEffect(() => {
    convertMarkdownToHtml();
  }, [convertMarkdownToHtml]);

  useEffect(() => {
    setTheme();
  }, [setTheme]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', className)}>
          <FormLabel>{label}</FormLabel>
          <MdEditor
            editorId={name}
            language="en-US"
            theme={mdTheme}
            modelValue={text}
            onChange={setText}
            onHtmlChanged={field.onChange}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
