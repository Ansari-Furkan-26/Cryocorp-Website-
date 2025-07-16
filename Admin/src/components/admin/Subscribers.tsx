import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { UserRoundCheck } from 'lucide-react';

const SubscriberDashboard = () => {
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/subscribers')
      .then((res) => res.json())
      .then((data) => {
        setSubscribers(data.subscribers || []);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Failed to fetch subscribers.');
        setLoading(false);
      });
  }, []);

  const handleExport = () => {
    if (subscribers.length === 0) {
      toast.warning('No subscribers to export.');
      return;
    }

    const csvContent = 'data:text/csv;charset=utf-8,' + subscribers.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'subscribers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="mx-auto bg-white rounded-2xl border shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Subscriber Emails</h2>
          <Button onClick={handleExport} className="bg-blue-600 text-white hover:bg-blue-700">
            Export as CSV
          </Button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-2 overflow-y-auto border border-gray-200 rounded-md p-4">
            {subscribers.map((email, index) => (
              <div
                key={index}
                className="text-sm text-gray-800 flex gap-4 px-4 py-2 rounded-md hover:bg-blue-50 transition"
              >
                <UserRoundCheck />
                
                {email}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriberDashboard;
