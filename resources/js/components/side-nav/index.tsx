import { Activity, BookUser, Image, MapPinHouse, Users } from 'lucide-react';
import * as React from 'react';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs } from '@/components/ui/tabs';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Nav } from './components/nav';

export function SideNav({ children }: React.PropsWithChildren) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const defaultLayout = [20, 80];
  const navCollapsedSize = 4;
  const pathname = window.location.pathname;

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-[calc(100vh-4rem)] !max-h-dvh items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          className={cn(
            isCollapsed &&
              'min-w-[50px] transition-all duration-300 ease-in-out',
          )}
          onCollapse={() => {
            setIsCollapsed(true);
          }}
          onExpand={() => {
            setIsCollapsed(false);
          }}
        >
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Exames',
                label: '',
                icon: Activity,
                variant: pathname.includes('/admin/exams')
                  ? 'default'
                  : 'ghost',
                url: '/admin/exams',
              },
              {
                title: 'Banners',
                label: '',
                icon: Image,
                variant: pathname.includes('/admin/banners')
                  ? 'default'
                  : 'ghost',
                url: '/admin/banners',
              },
              {
                title: 'Unidades',
                label: '',
                icon: MapPinHouse,
                variant: pathname.includes('/admin/units')
                  ? 'default'
                  : 'ghost',
                url: '/admin/units',
              },
              {
                title: 'Corpo Clínico',
                label: '',
                icon: BookUser,
                variant: pathname.includes('/admin/clinical-staff')
                  ? 'default'
                  : 'ghost',
                url: '/admin/clinical-staff',
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Usuários',
                label: '',
                icon: Users,
                variant: pathname.includes('/admin/users')
                  ? 'default'
                  : 'ghost',
                url: '/admin/users',
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle className="text-white" />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <Separator />
            <ScrollArea className="h-[calc(100vh-4rem)]">
              {children}
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
