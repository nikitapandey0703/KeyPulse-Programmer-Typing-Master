import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [testHistory, setTestHistory] = useState([]);
  const [stats, setStats] = useState({
    totalTests: 0,
    totalTime: 0,
    avgWPM: 0,
    avgAccuracy: 0,
    bestWPM: 0,
    totalErrors: 0,
  });

  // Load user profile and check authentication status
  useEffect(() => {
    const loadProfile = () => {
      try {
        const authDataStr = localStorage.getItem('authData');
        
        // Check if user is logged in
        if (!authDataStr) {
          setIsAuthenticated(false);
          setUserProfile(null);
          setLoading(false);
          return;
        }

        try {
          const authData = JSON.parse(authDataStr);
          const email = authData.email;
          const userData = authData.userData;
          
          // Verify login was successful by checking if userData exists
          if (!userData || !email) {
            setIsAuthenticated(false);
            setUserProfile(null);
            setLoading(false);
            return;
          }
          
          // Extract user information from stored data
          // Username can be in userData.username, userData.name, or from signup
          const username = userData.username || userData.name || userData.user?.username || userData.user?.name || "N/A";
          
          // Set profile data from localStorage
          setUserProfile({
            username: username,
            email: email,
          });
          
          setIsAuthenticated(true);
        } catch (parseError) {
          setIsAuthenticated(false);
          setUserProfile(null);
        }
      } catch (err) {
        setIsAuthenticated(false);
        setUserProfile(null);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();

    // Listen for auth changes (when user logs in/out in other tabs or same tab)
    window.addEventListener('storage', loadProfile);
    window.addEventListener('authChanged', loadProfile);

    return () => {
      window.removeEventListener('storage', loadProfile);
      window.removeEventListener('authChanged', loadProfile);
    };
  }, []);

  // Load test history from localStorage only if user is authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      // Reset stats and history if not authenticated
      setTestHistory([]);
      setStats({
        totalTests: 0,
        totalTime: 0,
        avgWPM: 0,
        avgAccuracy: 0,
        bestWPM: 0,
        totalErrors: 0,
      });
      return;
    }

    const savedTests = localStorage.getItem('typingTestHistory');
    if (savedTests) {
      const tests = JSON.parse(savedTests);
      setTestHistory(tests);

      // Calculate statistics
      if (tests.length > 0) {
        const totalTests = tests.length;
        const totalTime = tests.reduce((sum, test) => sum + (test.time || 0), 0);
        const totalWPM = tests.reduce((sum, test) => sum + (test.wpm || 0), 0);
        const totalAccuracy = tests.reduce((sum, test) => sum + (test.accuracy || 0), 0);
        const totalErrors = tests.reduce((sum, test) => sum + (test.errors || 0), 0);
        const bestWPM = Math.max(...tests.map(test => test.wpm || 0));

        setStats({
          totalTests,
          totalTime,
          avgWPM: Math.round(totalWPM / totalTests),
          avgAccuracy: Math.round(totalAccuracy / totalTests),
          bestWPM,
          totalErrors,
        });
      } else {
        // If no tests, keep stats at 0
        setStats({
          totalTests: 0,
          totalTime: 0,
          avgWPM: 0,
          avgAccuracy: 0,
          bestWPM: 0,
          totalErrors: 0,
        });
      }
    } else {
      // If no saved tests, keep stats at 0
      setStats({
        totalTests: 0,
        totalTime: 0,
        avgWPM: 0,
        avgAccuracy: 0,
        bestWPM: 0,
        totalErrors: 0,
      });
    }
  }, [isAuthenticated]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#071416] flex items-center justify-center">
        <div className="text-white text-xl">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071416] text-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#068a8d] mb-2">
            Profile
          </h1>
          <p className="text-gray-400">View your profile and typing statistics</p>
        </div>

        {/* User Info Card */}
        <div className="bg-[#0D1E2A] rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-[#068a8d] mb-4">User Information</h2>
          {isAuthenticated && userProfile && typeof userProfile === 'object' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Username</p>
                <p className="text-white text-lg font-semibold">
                  {String(userProfile.username || userProfile.name || "N/A")}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white text-lg font-semibold">
                  {String(userProfile.email || "N/A")}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-gray-400">
              Please login to view your profile information
            </div>
          )}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#0D1E2A] rounded-xl shadow-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Total Tests</div>
            <div className="text-3xl font-bold text-[#068a8d]">{stats.totalTests}</div>
          </div>

          <div className="bg-[#0D1E2A] rounded-xl shadow-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Total Practice Time</div>
            <div className="text-3xl font-bold text-[#068a8d]">
              {formatTime(stats.totalTime)}
            </div>
          </div>

          <div className="bg-[#0D1E2A] rounded-xl shadow-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Average WPM</div>
            <div className="text-3xl font-bold text-[#068a8d]">{stats.avgWPM}</div>
          </div>

          <div className="bg-[#0D1E2A] rounded-xl shadow-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Average Accuracy</div>
            <div className="text-3xl font-bold text-[#068a8d]">{stats.avgAccuracy}%</div>
          </div>

          <div className="bg-[#0D1E2A] rounded-xl shadow-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Best WPM</div>
            <div className="text-3xl font-bold text-[#068a8d]">{stats.bestWPM}</div>
          </div>

          <div className="bg-[#0D1E2A] rounded-xl shadow-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Total Errors</div>
            <div className="text-3xl font-bold text-[#068a8d]">{stats.totalErrors}</div>
          </div>
        </div>

        {/* Test History */}
        <div className="bg-[#0D1E2A] rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#068a8d] mb-4">Recent Test History</h2>
          {isAuthenticated && testHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Language</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Difficulty</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Time</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">WPM</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Accuracy</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Errors</th>
                  </tr>
                </thead>
                <tbody>
                  {testHistory.slice(0, 10).map((test, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-[#0a1a24] transition-colors"
                    >
                      <td className="py-3 px-4 text-white">
                        {test.date ? formatDate(test.date) : "N/A"}
                      </td>
                      <td className="py-3 px-4 text-white">
                        {test.language || "N/A"}
                      </td>
                      <td className="py-3 px-4 text-white">
                        {test.difficulty || "N/A"}
                      </td>
                      <td className="py-3 px-4 text-white">{test.time || 0}s</td>
                      <td className="py-3 px-4 text-[#068a8d] font-semibold">
                        {test.wpm || 0}
                      </td>
                      <td className="py-3 px-4 text-white">{test.accuracy || 0}%</td>
                      <td className="py-3 px-4 text-red-400">{test.errors || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <p className="text-lg mb-2">No test history yet</p>
              <p className="text-sm">
                Start practicing typing tests to see your progress here!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
