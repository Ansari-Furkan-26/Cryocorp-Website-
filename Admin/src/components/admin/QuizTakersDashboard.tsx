import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { UserRoundCheck } from 'lucide-react';

const QuizTakersDashboard = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://cryocorp.onrender.com/api/email/emails') // Replace with your actual endpoint
      .then((res) => res.json())
      .then((data) => {
        // assuming backend returns { emails: ["user1@gmail.com", ...] }
        console.log(data)
        setEmails(data || []);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Failed to fetch quiz takers.');
        setLoading(false);
      });
  }, []);

  const handleExport = () => {
    if (emails.length === 0) {
      toast.warning('No emails to export.');
      return;
    }

    const csvContent = 'data:text/csv;charset=utf-8,' + emails.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'quiz_takers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto bg-white rounded-2xl border shadow-sm p-6 max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Quiz Takers Emails</h2>
          <Button onClick={handleExport} className="bg-blue-600 text-white hover:bg-blue-700">
            Export as CSV
          </Button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : emails.length === 0 ? (
          <p className="text-gray-500">No quiz takers found.</p>
        ) : (
          <div className="space-y-2 max-h-[400px] overflow-y-auto border border-gray-200 rounded-md p-4">
            {emails.map((email, index) => (
              <div
                key={index}
                className="text-sm text-gray-800 flex gap-4 items-center px-4 py-2 rounded-md hover:bg-slate-100 transition"
              >
                <UserRoundCheck className="text-green-600" />
                {email?.email}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizTakersDashboard;
