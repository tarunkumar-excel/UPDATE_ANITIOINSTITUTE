'use client';


import React, { useMemo, useState } from "react";

export default function AdvertisingApplication() {
  const [view, setView] = useState("preview"); // preview | code

  const campaigns = [
    {
      name: "Computer Course Campaign",
      platform: "Google Ads",
      budget: "₹15,000",
      leads: 124,
      status: "Active",
    },
    {
      name: "Digital Marketing Course",
      platform: "Facebook Ads",
      budget: "₹10,000",
      leads: 89,
      status: "Running",
    },
    {
      name: "Language Course Promotion",
      platform: "Instagram Ads",
      budget: "₹8,000",
      leads: 63,
      status: "Paused",
    },
  ];

  const codeString = useMemo(() => {
    return `export default function AdvertisingApplication() {
  const campaigns = ${JSON.stringify(campaigns, null, 2)};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1>Advertising Application</h1>
    </div>
  );
}`;
  }, []);

  const downloadCode = () => {
    const blob = new Blob([codeString], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AdvertisingApplication.jsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  const statusColor = (status) => {
    if (status === "Active") return "bg-green-100 text-green-700";
    if (status === "Running") return "bg-blue-100 text-blue-700";
    return "bg-red-100 text-red-700";
  };

  const PreviewUI = () => (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Advertising Application
              </h1>
              <p className="text-gray-500 mt-2">
                Manage your ad campaigns, leads, and marketing performance.
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold">
              + Create Campaign
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {["Total Campaigns", "Active Ads", "Monthly Budget", "Generated Leads"].map(
            (title, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow">
                <h2 className="text-gray-500 text-sm">{title}</h2>
                <p className="text-3xl font-bold mt-2">
                  {i === 0 ? 12 : i === 1 ? 8 : i === 2 ? "₹50K" : 540}
                </p>
              </div>
            )
          )}
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Campaign Overview</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Name</th>
                  <th className="py-3">Platform</th>
                  <th className="py-3">Budget</th>
                  <th className="py-3">Leads</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{c.name}</td>
                    <td>{c.platform}</td>
                    <td>{c.budget}</td>
                    <td>{c.leads}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${statusColor(
                          c.status
                        )}`}
                      >
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Top Controls */}
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <div className="flex gap-3">
          <button
            onClick={() => setView("preview")}
            className={`px-4 py-2 rounded-xl font-semibold ${
              view === "preview" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setView("code")}
            className={`px-4 py-2 rounded-xl font-semibold ${
              view === "code" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Code
          </button>
        </div>

        <button
          onClick={downloadCode}
          className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold"
        >
          Download
        </button>
      </div>

      {/* Content */}
      {view === "preview" ? (
        <PreviewUI />
      ) : (
        <pre className="p-6 text-sm bg-gray-900 text-green-300 overflow-auto min-h-screen">
          {codeString}
        </pre>
      )}
    </div>
  );
}
