import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { LeadershipProfile } from '@/lib/mdaData';

export function LeadershipCard({ profile }: { profile: LeadershipProfile }) {
  return (
    <Card className="glass-effect">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
            <Image
              src={profile.imageUrl}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <CardTitle className="text-xl md:text-2xl gradient-text">{profile.name}</CardTitle>
            <p className="text-sm md:text-base text-muted-foreground">{profile.title}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Biography</h3>
            <p className="text-sm text-muted-foreground">{profile.bio}</p>
          </div>
        
          
          <div>
            <h3 className="font-medium mb-2">Key Responsibilities</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {profile.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}