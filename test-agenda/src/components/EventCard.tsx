import React from 'react';
import type { EventItem } from '../types/event';

interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, location, url, imageUrl, date, time, priceLabel, isFree, category } = event;

  return (
    <a
      href={url}
      aria-label={title}
      className="min-w-[260px] lg:min-w-0 bg-white rounded-card overflow-hidden shadow-card snap-start active:scale-[0.98] transition-transform block"
      data-discover="true"
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-2 left-2 right-2">
          <span
            className="inline-flex items-center font-semibold rounded-full whitespace-nowrap text-caption px-2 py-0.5 gap-1"
            style={{
              backgroundColor: category.bgColor,
              color: category.textColor,
            }}
          >
            {category.label}
          </span>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-body text-ink line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="text-caption text-ink-muted mt-1">{location}</p>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-teste-500"
              aria-hidden="true"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <span className="text-caption text-ink-muted">{date}</span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-teste-500"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="text-caption text-ink-muted">{time}</span>
          </div>

          <span
            className={`text-caption ml-auto ${
              isFree ? 'text-success-ink font-bold' : 'text-ink-muted'
            }`}
          >
            {priceLabel}
          </span>
        </div>
      </div>
    </a>
  );
};