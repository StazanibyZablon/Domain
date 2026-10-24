/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';

export default function App() {
  const [highestBid, setHighestBid] = useState(97374);
  const [newBid, setNewBid] = useState('');
  const [message, setMessage] = useState('');

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    const bidValue = parseInt(newBid);
    if (bidValue > highestBid) {
      setHighestBid(bidValue);
      setMessage(`Successfully placed bid of $${bidValue.toLocaleString()}!`);
      setNewBid('');
    } else {
      setMessage('Bid must be higher than the current highest bid.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded shadow-sm border border-gray-200">
        <h1 className="text-4xl font-light mb-6 text-center tracking-tight">Domain Bidding Active</h1>
        <p className="text-gray-600 mb-8 text-center">
          This domain is currently accepting bids. The highest bid is currently <strong>${highestBid.toLocaleString()}</strong>.
        </p>

        <form onSubmit={handleBid} className="space-y-6">
          <div>
            <label htmlFor="bid" className="block text-sm font-medium text-gray-700">Enter your bid ($)</label>
            <input type="number" id="bid" value={newBid} onChange={(e) => setNewBid(e.target.value)} required min={highestBid + 1} className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500" />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800">
            Place Bid
          </button>
        </form>

        {message && <p className="mt-6 text-center text-sm text-gray-700">{message}</p>}

        <p className="mt-8 text-xs text-gray-400 text-center">
          Note: Each new bid extends the auction end time by 24 hours.
        </p>
      </div>
    </div>
  );
}

