export interface CategoryToken {
  label: string;
  bgColor: string;
  textColor: string;
}

export interface EventItem {
  id: string;
  title: string;
  location: string;
  url: string;
  imageUrl: string;
  date: string;
  time: string;
  priceLabel: string;
  isFree?: boolean;
  category: CategoryToken;
}

export interface EventSectionProps {
  title?: string;
  events: EventItem[];
}