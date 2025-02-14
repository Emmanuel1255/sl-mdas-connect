// app/components/layout/breadcrumbs.tsx
import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-muted-foreground">/</span>}
          {item.href ? (
            <Link 
              href={item.href} 
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}