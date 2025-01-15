'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const aiEndpoints = [
  {
    title: 'Claude 3 Haiku',
    endpoint: 'api.sideid.tech/v1/ai/claude-3-haiku',
    method: 'POST',
  },
  {
    title: 'Claude 3.5 Haiku',
    endpoint: 'api.sideid.tech/v1/ai/claude-3.5-haiku',
    method: 'POST',
  },
  {
    title: 'Claude 3 Sonnet',
    endpoint: 'api.sideid.tech/v1/ai/claude-3-sonnet',
    method: 'POST',
  },
  {
    title: 'Claude 3.5 Sonnet',
    endpoint: 'api.sideid.tech/v1/ai/claude-3.5-sonnet',
    method: 'POST',
  },
  {
    title: 'Claude 3 Opus',
    endpoint: 'api.sideid.tech/v1/ai/claude-3-opus',
    method: 'POST',
  },
];

export const AIService = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(aiEndpoints[0]);
  const [systemMessage, setSystemMessage] = useState(
    'Nama Anda adalah Dimas AI',
  );
  const [userMessage, setUserMessage] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://${selectedEndpoint.endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemMessage },
            { role: 'user', content: userMessage },
          ],
        }),
      });
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setResult('Error occurred while fetching the result.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Artificial Intelligence Endpoints</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {aiEndpoints.map((endpoint) => (
          <Card
            key={endpoint.title}
            className={`cursor-pointer ${
              selectedEndpoint.title === endpoint.title ? 'border-primary' : ''
            }`}
            onClick={() => setSelectedEndpoint(endpoint)}
          >
            <CardHeader>
              <CardTitle>{endpoint.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                {endpoint.endpoint}
              </p>
              <p className='text-sm font-medium mt-2'>{endpoint.method}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Test {selectedEndpoint.title}</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <label
              htmlFor='system-message'
              className='block text-sm font-medium mb-1'
            >
              System Message
            </label>
            <Input
              id='system-message'
              value={systemMessage}
              onChange={(e) => setSystemMessage(e.target.value)}
              placeholder='Enter system message'
            />
          </div>
          <div>
            <label
              htmlFor='user-message'
              className='block text-sm font-medium mb-1'
            >
              User Message
            </label>
            <Textarea
              id='user-message'
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder='Enter user message'
              rows={3}
            />
          </div>
          <Button onClick={handleTest} disabled={isLoading}>
            {isLoading ? 'Testing...' : 'Test Endpoint'}
          </Button>
          {result && (
            <div>
              <h3 className='text-lg font-medium mb-2'>Result:</h3>
              <pre className='bg-muted p-4 rounded-md overflow-x-auto'>
                <code>{result}</code>
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
