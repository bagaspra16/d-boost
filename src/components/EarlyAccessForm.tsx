"use client"
import { useState, FormEvent, useEffect } from 'react';
import { earlyAccessDetails } from '@/data/earlyAccess';

const EarlyAccessForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    // Auto-dismiss notification after 5 seconds
    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                setMessage('');
                setStatus('idle');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
                    subject: 'New D-BOOST Early Access Request',
                    from_name: 'D-BOOST Website',
                    email: email,
                    message: `We're interested with D-BOOST Launch!\n\nUser Email: ${email}`,
                    to_email: 'dboostapp@gmail.com'
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage(earlyAccessDetails.successMessage);
                setEmail('');
            } else {
                setStatus('error');
                setMessage(earlyAccessDetails.errorMessage);
            }
        } catch (error) {
            setStatus('error');
            setMessage(earlyAccessDetails.errorMessage);
            console.error('Form submission error:', error);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {earlyAccessDetails.formLabel}
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={earlyAccessDetails.emailPlaceholder}
                        required
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full px-6 py-4 rounded-full bg-white border-2 border-gray-200 text-foreground placeholder-foreground-accent/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                >
                    {status === 'loading' ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                    ) : status === 'success' ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Sent!
                        </span>
                    ) : (
                        earlyAccessDetails.buttonText
                    )}
                </button>

                {message && (
                    <div
                        className={`p-5 rounded-2xl text-center transition-all duration-500 ${status === 'success'
                                ? 'bg-green-50 border-2 border-green-500 text-green-800'
                                : 'bg-red-50 border-2 border-red-500 text-red-800'
                            } animate-fade-in`}
                    >
                        <div className="flex items-center justify-center gap-3">
                            {status === 'success' ? (
                                <svg className="w-6 h-6 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 flex-shrink-0 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                            <p className="font-semibold text-base">{message}</p>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default EarlyAccessForm;
