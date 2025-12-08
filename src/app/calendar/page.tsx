'use client'
import React, { useState } from 'react';
import { Smile, Meh, Frown } from 'lucide-react';
import FormDialog from '../component/createmood';

const MoodTracker = () => {
  const [leftData, setLeftData] = useState({
    name: 'James',
    date: 'Jun 9',
    streak: '12 days',
    rating: 'Excellent',
    weeks: [
      ['great', 'great', 'great', 'good', 'great', 'good', 'great'],
      ['good', null, 'okay', 'good', 'okay', 'bad', 'okay'],
      ['bad', 'good', null, null, null, null, null]
    ]
  });

  
  const getColor = (mood) => {
    switch(mood) {
      case 'great': return 'bg-green-500';
      case 'good': return 'bg-lime-400';
      case 'okay': return 'bg-yellow-400';
      case 'meh': return 'bg-orange-400';
      case 'bad': return 'bg-red-500';
      default: return 'bg-gray-200';
    }
  };

  const getDayLabel = (index) => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return days[index];
  };

  const MoodCard = ({ data, side }) => (
    <div className="bg-white rounded-3xl p-6 shadow-lg flex-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className={`text-3xl font-bold mb-1 ${side === 'left' ? 'text-green-500' : 'text-yellow-500'}`}>
            {data.rating}
          </h2>
          <p className="text-gray-600 font-medium">{data.name}</p>
          <p className="text-gray-400 text-sm">{data.date} · {data.streak} streak</p>
        </div>
        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
          <div className="text-4xl">😊</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-around mb-3 text-xs text-gray-400 font-medium">
          {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="w-8 text-center">{getDayLabel(i)}</div>
          ))}
        </div>
        
        {data.weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="flex justify-around mb-2">
            {week.map((mood, dayIdx) => (
              <div
                key={dayIdx}
                className={`w-8 h-8 rounded-full ${getColor(mood)} transition-all hover:scale-110 cursor-pointer`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">✨ Mood Tracker ✨</h1>
          <p className="text-gray-600">Track your daily moods and emotional wellbeing</p>
          <FormDialog/>

        </div>
        
        <div className="flex gap-6">
          <MoodCard data={leftData} side="left" />
        </div>

        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Mood Legend</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">😄 Great</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-lime-400"></div>
              <span className="text-sm text-gray-600">🙂 Good</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
              <span className="text-sm text-gray-600">😐 Okay</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-400"></div>
              <span className="text-sm text-gray-600">😕 Meh</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <span className="text-sm text-gray-600">😢 Bad</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-sm text-gray-600">No Entry</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 text-center">
          <p className="text-gray-700 text-sm">
            💡 <strong>Tip:</strong> Try to log your mood daily to identify patterns and track your emotional wellbeing over time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker; 