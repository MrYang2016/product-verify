import React from 'react';
import { Hypothesis, Prototype } from '../types';

interface ResultCardProps {
  hypothesis: Hypothesis;
  prototype: Prototype;
}

export function ResultCard({ hypothesis, prototype }: ResultCardProps) {
  return (
    <div className="w-full space-y-6 rounded-lg bg-white p-6 shadow-lg">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">XYZ 假设</h3>
        <div className="space-y-2">
          <p className="rounded-md bg-blue-50 p-3 text-blue-800">
            广泛假设: {hypothesis.broad}
          </p>
          <p className="rounded-md bg-green-50 p-3 text-green-800">
            具体假设: {hypothesis.narrow}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">预型方案</h3>
        <div className="rounded-md bg-gray-50 p-4">
          <p className="mb-3 text-gray-800">{prototype.description}</p>
          <ul className="list-inside list-decimal space-y-2">
            {prototype.steps.map((step, index) => (
              <li key={index} className="text-gray-700">
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}