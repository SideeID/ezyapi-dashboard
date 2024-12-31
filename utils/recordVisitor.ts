export const recordVisitor = async (): Promise<void> => {
  try {
    const userId = localStorage.getItem('visitorId') || crypto.randomUUID();
    if (!localStorage.getItem('visitorId')) {
      localStorage.setItem('visitorId', userId);
    }

    const response = await fetch('https://api.sideid.tech/v1/stats/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
        visitCount: 1,
        userAgent: navigator.userAgent,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to record visitor');
    }

    console.log('Visitor recorded successfully.');
  } catch (error) {
    console.error('Error recording visitor:', error);
  }
};
