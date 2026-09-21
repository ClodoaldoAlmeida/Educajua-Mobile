export interface PortalShortcut {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  badge?: string;
  isExternal: boolean;
}

export type ViewMode = 'hub' | 'embedded';
