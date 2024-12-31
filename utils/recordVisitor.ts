export const recordVisitor = async (): Promise<void> => {
  try {
    if (typeof window === 'undefined') return;

    const userId = crypto.randomUUID();
    
    const response = await fetch('https://api.sideid.tech/v1/stats/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
      body: JSON.stringify({
        userId,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
        visitCount: 1,
        userAgent: navigator.userAgent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Failed to record visitor: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    // const data = await response.json();
    // console.log('Visitor recorded successfully:', data);
  } catch (error) {
    console.error('Error recording visitor:', error);
    throw error;
  }
};
