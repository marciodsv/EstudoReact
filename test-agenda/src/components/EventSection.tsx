import React from 'react';
import { EventCard } from './EventCard';
import type { EventSectionProps } from '../types/event';

export const EventSection: React.FC<EventSectionProps> = ({
  title = 'Programação perto de você',
  events,
}) => {
  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2.5 mb-3">
        <span
          aria-hidden="true"
          className="w-1 h-5 lg:h-6 rounded-full shrink-0 bg-teste-500"
        />
        <h2 className="font-bold text-title-sm lg:text-title text-ink">
          {title}
        </h2>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-1 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};