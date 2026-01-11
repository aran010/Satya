"use client";

import { useState, useEffect } from "react";
import { Type, Contrast, RotateCcw, ChevronDown } from "lucide-react";

export function AccessibilityControls() {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large' | 'xlarge'>('medium');
    const [highContrast, setHighContrast] = useState(false);

    // Load saved preferences on mount
    useEffect(() => {
        const savedFontSize = localStorage.getItem('fontSize') as any;
        const savedContrast = localStorage.getItem('highContrast') === 'true';

        if (savedFontSize) setFontSize(savedFontSize);
        if (savedContrast) setHighContrast(savedContrast);
    }, []);

    // Apply font size to body
    useEffect(() => {
        document.body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge');
        document.body.classList.add(`font-size-${fontSize}`);
        localStorage.setItem('fontSize', fontSize);
    }, [fontSize]);

    // Apply high contrast mode
    useEffect(() => {
        if (highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
        localStorage.setItem('highContrast', String(highContrast));
    }, [highContrast]);

    const resetSettings = () => {
        setFontSize('medium');
        setHighContrast(false);
        localStorage.removeItem('fontSize');
        localStorage.removeItem('highContrast');
    };

    return (
        <div className="fixed top-20 right-4 z-40">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#0066CC] text-white p-3 rounded-full shadow-lg hover:bg-[#0052A3] transition-all flex items-center gap-2"
                aria-label="Accessibility options"
                aria-expanded={isOpen}
            >
                <Type className="w-5 h-5" />
                <span className="text-xs font-semibold hidden md:inline">Accessibility</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border-2 border-gray-200 rounded-none shadow-xl w-80 overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#0066CC] text-white px-4 py-3">
                        <h3 className="font-bold text-sm">Accessibility Options</h3>
                    </div>

                    {/* Font Size Controls */}
                    <div className="p-4 border-b border-gray-200">
                        <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Type className="w-4 h-4" />
                            Font Size
                        </label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFontSize('small')}
                                className={`flex-1 px-3 py-2 rounded-none border-2 transition-all ${fontSize === 'small'
                                        ? 'bg-[#0066CC] text-white border-[#0066CC]'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#0066CC]'
                                    }`}
                                aria-label="Small font size"
                                aria-pressed={fontSize === 'small'}
                            >
                                <span className="text-xs">A</span>
                            </button>
                            <button
                                onClick={() => setFontSize('medium')}
                                className={`flex-1 px-3 py-2 rounded-none border-2 transition-all ${fontSize === 'medium'
                                        ? 'bg-[#0066CC] text-white border-[#0066CC]'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#0066CC]'
                                    }`}
                                aria-label="Medium font size (default)"
                                aria-pressed={fontSize === 'medium'}
                            >
                                <span className="text-sm">A</span>
                            </button>
                            <button
                                onClick={() => setFontSize('large')}
                                className={`flex-1 px-3 py-2 rounded-none border-2 transition-all ${fontSize === 'large'
                                        ? 'bg-[#0066CC] text-white border-[#0066CC]'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#0066CC]'
                                    }`}
                                aria-label="Large font size"
                                aria-pressed={fontSize === 'large'}
                            >
                                <span className="text-base">A</span>
                            </button>
                            <button
                                onClick={() => setFontSize('xlarge')}
                                className={`flex-1 px-3 py-2 rounded-none border-2 transition-all ${fontSize === 'xlarge'
                                        ? 'bg-[#0066CC] text-white border-[#0066CC]'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#0066CC]'
                                    }`}
                                aria-label="Extra large font size"
                                aria-pressed={fontSize === 'xlarge'}
                            >
                                <span className="text-lg">A</span>
                            </button>
                        </div>
                    </div>

                    {/* High Contrast Toggle */}
                    <div className="p-4 border-b border-gray-200">
                        <label className="flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                <Contrast className="w-4 h-4" />
                                High Contrast Mode
                            </span>
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={highContrast}
                                    onChange={(e) => setHighContrast(e.target.checked)}
                                    className="sr-only peer"
                                    aria-label="Toggle high contrast mode"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066CC]"></div>
                            </div>
                        </label>
                    </div>

                    {/* Reset Button */}
                    <div className="p-4">
                        <button
                            onClick={resetSettings}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-none hover:bg-gray-200 transition-colors"
                            aria-label="Reset accessibility settings to defaults"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Reset to Default
                        </button>
                    </div>

                    {/* Info */}
                    <div className="px-4 py-3 bg-blue-50 text-xs text-gray-600">
                        <p>Settings are saved automatically and persist across sessions.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
