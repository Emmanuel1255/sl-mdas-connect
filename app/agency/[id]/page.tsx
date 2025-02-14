"use client"

import React, { Suspense } from 'react';
import { Globe, Clock, Mail, MapPin, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { mdaData } from "@/lib/mdaData";
import { LeadershipCard } from '@/components/agency/leadership-card';
import { Breadcrumbs, SharePrintButtons, LoadingSpinner } from '@/components/mobile-nav-loading';


export default function AgencyPage({ params }: { params: { id: string } }) {
  const agency = mdaData.find((a) => a.id === params.id);

  if (!agency) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: agency.category, href: `/?category=${agency.category}` },
    { label: agency.name }
  ];

  return (
    <main className="mx-auto max-w-7xl w-full px-4 py-4 md:py-8 pb-20 md:pb-8 print:p-0 print:pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <Breadcrumbs items={breadcrumbItems} />
        <SharePrintButtons />
      </div>

      <div className="space-y-8">
        {/* Agency Overview */}
        <div className="rounded-xl glass-effect p-4 md:p-8 shadow-2xl border-0 gradient-border print:shadow-none print:border print:border-gray-200">
          <div className="inline-block rounded-md bg-primary/10 px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium text-primary print:border print:border-primary/20">
            {agency.category}
          </div>
          <h1 className="mt-3 md:mt-4 text-xl md:text-4xl font-bold gradient-text print:text-black">
            {agency.name}
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground print:text-black">
            {agency.description}
          </p>

          <div className="mt-6 md:mt-8 grid gap-6 md:gap-8 md:grid-cols-2 print:grid-cols-2 print:gap-4">
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6 print:space-y-3">
              <h2 className="text-lg md:text-xl font-semibold gradient-text print:text-black">
                Contact Information
              </h2>
              <div className="space-y-3 md:space-y-4 print:space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 print:text-black" />
                  <span className="text-sm md:text-base print:text-black">{agency.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 print:text-black" />
                  <span className="text-sm md:text-base print:text-black">{agency.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 print:text-black" />
                  <span className="text-sm md:text-base print:text-black">{agency.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 print:text-black" />
                  <a
                    href={agency.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base hover:underline transition-colors print:text-black"
                  >
                    {agency.contact.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-4 md:space-y-6 print:space-y-3">
              <h2 className="text-lg md:text-xl font-semibold gradient-text print:text-black">
                Operating Hours
              </h2>
              <div className="space-y-3 md:space-y-4 print:space-y-2">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0 print:text-black" />
                  <div>
                    <p className="text-sm md:text-base font-medium print:text-black">
                      {agency.operatingHours.weekday}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground print:text-black">
                      {agency.operatingHours.weekend}
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-muted-foreground print:text-black">
                      {agency.operatingHours.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold gradient-text">Leadership</h2>
            <LeadershipCard profile={agency.leadership} />
          </section>
        </Suspense>


      </div>
    </main>
  );
}