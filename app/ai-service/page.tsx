'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Copy, Cpu, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const aiEndpoints = [
  {
    title: 'Claude 3 Haiku',
    endpoint: 'api.sideid.tech/v1/ai/claude-3-haiku',
    method: 'POST',
    category: 'Claude',
    active: true,
  },
  {
    title: 'Claude 3.5 Haiku',
    endpoint: 'api.sideid.tech/v1/ai/claude-3.5-haiku',
    method: 'POST',
    category: 'Claude',
    active: false,
  },
  {
    title: 'Claude 3 Sonnet',
    endpoint: 'api.sideid.tech/v1/ai/claude-3-sonnet',
    method: 'POST',
    category: 'Claude',
    active: true,
  },
  {
    title: 'Claude 3.5 Sonnet',
    endpoint: 'api.sideid.tech/v1/ai/claude-3.5-sonnet',
    method: 'POST',
    category: 'Claude',
    active: false,
  },
  {
    title: 'Claude 3 Opus',
    endpoint: 'api.sideid.tech/v1/ai/claude-3-opus',
    method: 'POST',
    category: 'Claude',
    active: true,
  },
  {
    title: 'GPT 4o Mini',
    endpoint: 'api.sideid.tech/v1/ai/gpt-4o-mini',
    method: 'POST',
    category: 'GPT',
    active: true,
  },
  {
    title: 'GPT 4o',
    endpoint: 'api.sideid.tech/v1/ai/gpt-4o',
    method: 'POST',
    category: 'GPT',
    active: true,
  },
  {
    title: 'Gemini 1.5 Pro',
    endpoint: 'api.sideid.tech/v1/ai/gemini-1.5-pro',
    method: 'POST',
    category: 'Gemini',
    active: true,
  },
  {
    title: 'Gemini 1.5 Flash',
    endpoint: 'api.sideid.tech/v1/ai/gemini-1.5-flash',
    method: 'POST',
    category: 'Gemini',
    active: false,
  },
];

const defaultInputBody = {
  messages: [
    {
      role: 'system',
      content: 'Nama Anda adalah NeoSide',
    },
    {
      role: 'user',
      content: 'Halo, apa kabar?',
    },
  ],
};

export default function AIServicePage() {
  const { toast } = useToast();
  const [selectedEndpoint, setSelectedEndpoint] = useState(
    aiEndpoints.find((endpoint) => endpoint.active) || aiEndpoints[0],
  );
  const [inputBody, setInputBody] = useState(
    JSON.stringify(defaultInputBody, null, 2),
  );
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
        body: inputBody,
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Tersalin ke clipboard',
      description: 'Teksnya udah disalin ke clipboard kamu.',
    });
  };

  const categories = [
    ...Array.from(new Set(aiEndpoints.map((endpoint) => endpoint.category))),
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <Link
        href='/'
        className='inline-flex items-center text-primary hover:underline mb-6'
      >
        <ArrowLeft className='mr-2' size={20} />
        Back to Dashboard
      </Link>
      <h1 className='text-3xl font-bold mb-6 flex items-center'>
        <Cpu className='mr-2' size={32} />
        Artificial Intelligence Endpoints
      </h1>
      <Tabs defaultValue={categories[0]} className='w-full'>
        <TabsList className='flex justify-start overflow-x-auto mb-4'>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className='px-4 py-2'>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className='mb-6'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline' className='w-full md:w-auto'>
                    {selectedEndpoint.title}{' '}
                    <ChevronDown className='ml-2 h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-full md:w-56'>
                  {aiEndpoints
                    .filter((endpoint) => endpoint.category === category)
                    .map((endpoint) => (
                      <DropdownMenuItem
                        key={endpoint.title}
                        onSelect={() =>
                          endpoint.active && setSelectedEndpoint(endpoint)
                        }
                        disabled={!endpoint.active}
                        className={
                          !endpoint.active
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                        }
                      >
                        <span className='flex items-center justify-between w-full'>
                          {endpoint.title}
                          <Badge
                            variant={endpoint.active ? 'default' : 'secondary'}
                          >
                            {endpoint.active ? 'Active' : 'Inactive'}
                          </Badge>
                        </span>
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='bg-muted p-4 rounded-lg mb-6'>
              <h2 className='text-xl font-semibold mb-2'>
                {selectedEndpoint.title}
              </h2>
              <p className='text-sm text-muted-foreground mb-2'>
                Endpoint: {selectedEndpoint.endpoint}
              </p>
              <div className='flex items-center gap-2'>
                <Badge>{selectedEndpoint.method}</Badge>
                <Badge
                  variant={selectedEndpoint.active ? 'default' : 'secondary'}
                >
                  {selectedEndpoint.active ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='input-body'
                  className='block text-sm font-medium mb-1'
                >
                  Input Body (JSON)
                </label>
                <div className='relative'>
                  <Textarea
                    id='input-body'
                    value={inputBody}
                    onChange={(e) => setInputBody(e.target.value)}
                    placeholder='Enter JSON input body'
                    rows={10}
                    className='font-mono pr-10'
                  />
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute top-2 right-2'
                    onClick={() => copyToClipboard(inputBody)}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>
              <Button
                onClick={handleTest}
                disabled={isLoading || !selectedEndpoint.active}
              >
                {isLoading ? 'Testing...' : 'Test Endpoint'}
              </Button>
              {result && (
                <div>
                  <h3 className='text-lg font-medium mb-2'>Result:</h3>
                  <div className='relative'>
                    <pre className='bg-muted p-4 rounded-md overflow-x-auto max-h-96'>
                      <code>{result}</code>
                    </pre>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='absolute top-2 right-2'
                      onClick={() => copyToClipboard(result)}
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
