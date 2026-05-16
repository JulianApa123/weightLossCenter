'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import Link from 'next/link';

const FALLBACK =
  "I'm not sure about that one. For more information, please call us or book a consultation — we'd be happy to help.";

const QA_DATA = [
  {
    triggers: [
      'glp-1', 'glp1', 'gip', 'glp/gip', 'ozempic', 'wegovy', 'zepbound',
      'mounjaro', 'semaglutide', 'tirzepatide', 'weight loss injection',
      'weight loss shot', 'obesity medication', 'prescribe glp1', 'prescribe ozempic',
    ],
    response:
      'Yes. We prescribe GLP-1/GIP medications such as Wegovy, Zepbound, semaglutide, and tirzepatide when medically appropriate. We also evaluate your overall health, body composition, and long-term strategy so treatment is individualized and medically supervised.',
  },
  {
    triggers: [
      'stopped working', 'plateau', 'weight loss plateau', 'regained weight',
      'regain', 'not losing weight', 'stalled', 'no progress', 'glp1 not working',
      'ozempic stopped working', 'wegovy plateau', 'zepbound plateau',
      'mounjaro stopped working',
    ],
    response:
      'Yes. Plateaus are common and often manageable. We evaluate factors such as insulin resistance, reduced daily calorie burn (NEAT decline), nutrition intake, sleep quality, body composition changes, muscle loss, activity level, and medication response. When appropriate, we are comfortable optimizing treatment dose, writing a structured exercise prescription, and coordinating a multidisciplinary plan to help restart progress safely and effectively.',
  },
  {
    triggers: [
      'labs', 'lab test', 'blood work', 'blood test', 'hormone test', 'testing',
      'baseline labs', 'metabolic labs', 'insulin resistance test', 'cholesterol test',
      'liver test', 'check my levels',
    ],
    response:
      'Yes. Comprehensive baseline lab testing is a core part of care at Lumena. It helps evaluate cardiovascular health, insulin resistance, metabolic status, liver health, and other important markers so we can build an individualized plan tailored to you.',
  },
  {
    triggers: [
      'without medication', 'no meds', 'naturally', 'no injections', 'no shots',
      'without ozempic', 'without wegovy', 'lifestyle only', 'exercise only',
      'diet only', 'no prescription',
    ],
    response:
      'Yes. Medication is one option, not the only option. We also offer physician-guided plans focused on nutrition, exercise, metabolism, and sustainable lifestyle change.',
  },
  {
    triggers: [
      'first visit', 'consultation', 'initial visit', 'first appointment',
      'what to expect', 'new patient visit', 'how does it work', 'first meeting',
      'consultation process',
    ],
    response:
      'Your first visit is a comprehensive consultation focused on your history, goals, prior challenges, and current health. We then discuss clear next steps, recommended testing if needed, and a treatment plan tailored to you.',
  },
  {
    triggers: [
      'sleep apnea', 'cpap', 'snoring', 'poor sleep', 'tired all day',
      'sleep study', 'obstructive sleep apnea', 'osa', 'breathing at night',
      'fatigue from sleep',
    ],
    response:
      'Yes. Sleep apnea and poor sleep can significantly affect weight, energy, and metabolism. We evaluate sleep-related concerns and incorporate them into your overall plan.',
  },
  {
    triggers: [
      'muscle loss', 'losing muscle', 'preserve muscle', 'keep muscle',
      'sarcopenia', 'body composition', 'lean mass', 'weak on ozempic',
      'weak on glp1', 'strength loss',
    ],
    response:
      'Yes. Preserving muscle during weight loss is a priority. We use body composition strategy, nutrition guidance, movement planning, and appropriate monitoring throughout treatment.',
  },
  {
    triggers: [
      'doctor supervised', 'physician supervised', 'real doctor', 'md',
      'physician led', 'medically supervised', 'doctor involved',
      'safe medical care', 'board certified doctor',
    ],
    response:
      'Yes. Care at Lumena is physician-led and medically supervised. Your treatment plan is based on safety, clinical judgment, and long-term success.',
  },
  {
    triggers: [
      'start now', 'how soon', 'availability', 'appointment soon',
      'when can i begin', 'get started', 'ready to start', 'same week',
      'earliest appointment',
    ],
    response:
      'Often very quickly. Once your consultation is completed, we can usually begin your plan right away depending on your needs.',
  },
  {
    triggers: [
      'telehealth', 'virtual visit', 'online visit', 'video visit', 'zoom visit',
      'remote consult', 'phone consult', 'from home', 'telemedicine',
      'online appointment',
    ],
    response:
      'Yes. Telehealth is available for appropriate visits. However, we prefer to meet you in person whenever possible so we can better understand your goals, obtain important body measurements, and create a more complete personalized plan.',
  },
  {
    triggers: [
      'more than medication', 'more than shots', 'more than injections',
      'complete program', 'full program', 'comprehensive care', 'beyond prescription',
      'not just meds', 'whole program', 'complete treatment',
    ],
    response:
      'Yes. Weight management is not just about medication. We combine physician-led care with nutrition guidance, exercise strategy, body composition planning, metabolic assessment, and coordinated support to create a complete treatment plan.',
  },
  {
    triggers: [
      'multidisciplinary', 'team approach', 'multiple specialists', 'support team',
      'experts', 'team care', 'comprehensive team', 'coordinated care',
      'providers working together',
    ],
    response:
      'Yes. Lumena uses a multidisciplinary approach. Depending on your needs, your care may include physician oversight, nutrition guidance, exercise planning, body composition strategy, sleep evaluation, and coordinated specialty support.',
  },
  {
    triggers: [
      'exercise plan', 'workout plan', 'exercise prescription', 'gym plan',
      'fitness plan', 'how should i exercise', 'doctor exercise plan',
      'safe workout', 'personalized exercise',
    ],
    response:
      'Yes. We can provide a structured exercise prescription tailored to your current fitness level, medical conditions, body composition goals, and weight-loss plan.',
  },
  {
    triggers: [
      'nutrition', 'diet help', 'meal plan', 'eating plan', 'food plan',
      'cravings', 'what should i eat', 'nutritionist', 'dietitian', 'diet support',
    ],
    response:
      'Yes. Nutrition is a key part of long-term success. We help create a realistic nutrition strategy that supports fat loss, metabolic health, and sustainable results.',
  },
  {
    triggers: [
      'multiple problems', 'many conditions', 'diabetes and weight',
      'sleep apnea and weight', 'high cholesterol', 'fatty liver', 'complex case',
      'medical issues', 'several health issues',
    ],
    response:
      'Yes. Many patients have more than one issue affecting weight and health. We take a comprehensive approach that addresses obesity together with related conditions such as sleep apnea, insulin resistance, fatty liver, and cardiometabolic risk.',
  },
  {
    triggers: [
      'personalized', 'individualized', 'custom plan', 'tailored plan',
      'made for me', 'unique plan', 'one size fits all', 'custom program',
    ],
    response:
      'Yes. Every patient receives an individualized plan based on medical history, goals, labs, body composition, lifestyle, and response to treatment.',
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch: { response: string; triggerLength: number } | null = null;

  for (const qa of QA_DATA) {
    for (const trigger of qa.triggers) {
      if (lower.includes(trigger.toLowerCase())) {
        if (!bestMatch || trigger.length > bestMatch.triggerLength) {
          bestMatch = { response: qa.response, triggerLength: trigger.length };
        }
      }
    }
  }

  return bestMatch ? bestMatch.response : FALLBACK;
}

interface Message {
  from: 'user' | 'bot';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: 'Hi! I\'m here to answer questions about Lumena\'s services. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = { from: 'user', text: trimmed };
    const botMessage: Message = { from: 'bot', text: getResponse(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSend();
  }

  const isFallback = (text: string) => text === FALLBACK;

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start">
      {/* Chat window */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1a2744] px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Lumena Assistant
              </p>
              <p className="text-blue-200 text-xs">Ask us anything</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80" style={{ fontFamily: 'var(--font-lato)' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`text-sm rounded-xl px-3 py-2 max-w-[85%] leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-[#1a2744] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                  {msg.from === 'bot' && isFallback(msg.text) && (
                    <Link
                      href="/appointments"
                      className="block mt-2 text-[#1a2744] font-semibold underline hover:opacity-70 transition"
                    >
                      Book a consultation
                    </Link>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 px-3 py-2 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400"
              style={{ fontFamily: 'var(--font-lato)' }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="text-[#1a2744] hover:opacity-70 transition disabled:opacity-30"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#1a2744] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#2a3754] transition"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
