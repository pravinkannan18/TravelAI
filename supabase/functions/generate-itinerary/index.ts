import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { destination, startDate, endDate, budget, preferences, ecoFriendly, socialLinks } = await req.json();
    console.log('Generate Itinerary Request:', { destination, startDate, endDate, budget });

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('AI service not configured');
    }

    const days = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) + 1;

    const prompt = `Create a detailed ${days}-day trip itinerary for ${destination} with these details:
- Budget: $${budget}
- Dates: ${startDate} to ${endDate}
- Preferences: ${preferences.join(', ')}
${ecoFriendly ? '- Focus on eco-friendly options (sustainable hotels, green transport)' : ''}
${socialLinks && socialLinks.length > 0 ? `- Include these places from social media: ${socialLinks.join(', ')}` : ''}

For each day, provide:
1. Day number and date
2. Morning activity (with time, location, description)
3. Afternoon activity (with time, location, description)
4. Evening activity (with time, location, description)
5. Restaurant recommendations
6. Estimated daily cost

Format as JSON array with this structure:
[{
  "day_number": 1,
  "title": "Day 1: Arrival & Exploration",
  "description": "Brief overview",
  "activities": [{
    "start_time": "09:00",
    "end_time": "12:00",
    "title": "Activity name",
    "location": "Place name",
    "description": "What to do",
    "activity_type": "sightseeing",
    "estimated_cost": 50
  }]
}]`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are an expert travel planner. Generate detailed, realistic itineraries with specific times, costs, and locations. Always return valid JSON.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error('Failed to generate itinerary');
    }

    const data = await response.json();
    let itineraryText = data.choices[0].message.content;
    
    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = itineraryText.match(/```json\n?([\s\S]*?)\n?```/) || itineraryText.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      itineraryText = jsonMatch[1] || jsonMatch[0];
    }

    const itinerary = JSON.parse(itineraryText);
    console.log('Generated itinerary:', itinerary.length, 'days');

    return new Response(
      JSON.stringify({ itinerary }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Generate itinerary error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to generate itinerary' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
