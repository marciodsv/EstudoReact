import { EventSection } from './components/EventSection';
import { mockEvents } from './data/mockEvents';

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <EventSection events={mockEvents} />
    </main>
  );
}