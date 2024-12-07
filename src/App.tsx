import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { IdeaForm } from './components/IdeaForm';
import { ResultCard } from './components/ResultCard';
import { analyzeIdea } from './utils/ideaAnalyzer';
import { Hypothesis, Prototype } from './types';

function App() {
  const [hypothesis, setHypothesis] = useState<Hypothesis | null>(null);
  const [prototype, setPrototype] = useState<Prototype | null>(null);

  const handleIdeaSubmit = async (idea: string) => {
    const { hypothesis, prototype } = await analyzeIdea(idea);
    setHypothesis(hypothesis);
    setPrototype(prototype);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-blue-100 p-3">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">创业想法验证器</h1>
          <p className="text-gray-600">
            输入你的创业想法，获取假设验证方案和原型建议
          </p>
        </div>

        <div className="space-y-8 rounded-xl bg-white p-6 shadow-lg">
          <IdeaForm onSubmit={handleIdeaSubmit} />
          
          {hypothesis && prototype && (
            <ResultCard 
              hypothesis={hypothesis}
              prototype={prototype}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;