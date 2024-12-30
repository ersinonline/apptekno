import React from 'react';
import { useForm } from '../../hooks/useForm';

interface SubscriptionFormProps {
  title: string;
  provider: string;
  formspreeId: string;
}

export default function SubscriptionForm({ title, provider, formspreeId }: SubscriptionFormProps) {
  const { handleSubmit, isSubmitted, closePopup } = useForm(formspreeId);

  return (
    <div className="min-h-screen bg-[#fff4cc] flex flex-col">
      <header className="fixed top-0 left-0 right-0 bg-[#ffb700] text-white p-4 z-50">
        <h1 className="text-xl font-semibold text-center">
          <a href="/index.html" className="text-white no-underline">
            {title}
          </a>
        </h1>
      </header>

      <div className="flex-grow flex items-center justify-center px-4 pt-20 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Ad Soyad"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#ffb700] focus:ring-2 focus:ring-[#ffb700] transition-colors"
              />
              
              <input
                type="email"
                name="email"
                placeholder="E-posta"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#ffb700] focus:ring-2 focus:ring-[#ffb700] transition-colors"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Telefon Numarası"
                pattern="[0-9]{10}"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#ffb700] focus:ring-2 focus:ring-[#ffb700] transition-colors"
              />
              
              <textarea
                name="message"
                placeholder={`${provider} abonelik talebi için notunuz...`}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#ffb700] focus:ring-2 focus:ring-[#ffb700] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ffb700] text-white py-3 rounded-lg hover:bg-[#e6a800] transition-colors font-medium"
            >
              Başvuru Yap
            </button>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-4">
            <h2 className="text-xl font-semibold mb-4">
              Form Başarıyla Gönderildi!
            </h2>
            <button
              onClick={closePopup}
              className="w-full bg-[#ffb700] text-white py-2 rounded-lg hover:bg-[#e6a800] transition-colors"
            >
              Tamam
            </button>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 right-0 bg-[#ffb700] text-white p-4 text-center">
        <p>© 2024 TeknoKapsül</p>
      </footer>
    </div>
  );
}