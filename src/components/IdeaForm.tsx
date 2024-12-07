import React from 'react';
import { Send } from 'lucide-react';

interface IdeaFormProps {
  onSubmit: (idea: string) => void;
}

export function IdeaForm({ onSubmit }: IdeaFormProps) {
  const [idea, setIdea] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false); // New state for loading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      setIsLoading(true); // Set loading to true when submitting
      await onSubmit(idea);
      setIdea('');
      setIsLoading(false); // Reset loading state after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="idea" className="text-sm font-medium text-gray-700">
          描述你的想法
        </label>
        <textarea
          id="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="min-h-[120px] w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="例如：我想开发一个技术新闻网站..."
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 self-end rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? '分析中...' : '提交'} <Send size={16} />
        </button>
      </div>
    </form>
  );
}