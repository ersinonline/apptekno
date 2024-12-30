import React, { useEffect, useState } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { Timer, ExternalLink, AlertCircle } from 'lucide-react';
import LoadingSpinner from '../components/ui/LoadingSpinner';

export default function RedirectPage() {
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const targetUrl = searchParams.get('target');
  const defaultUrl = 'https://teknokapsul.com';

  useEffect(() => {
    if (!targetUrl) {
      setError('Hedef URL bulunamadı.');
      setIsLoading(false);
      return;
    }

    try {
      new URL(targetUrl);
    } catch {
      setError('Geçersiz URL formatı.');
      setIsLoading(false);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimeout(() => setIsLoading(false), 1000);

    return () => clearInterval(timer);
  }, [targetUrl]);

  if (countdown === 0 && targetUrl && !error) {
    return <Navigate to={targetUrl} replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff4cc]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff4cc] p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-[1.02]">
        {error ? (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Hata Oluştu
            </h1>
            <p className="text-gray-600">{error}</p>
            <a
              href={defaultUrl}
              className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              Ana Sayfaya Dön
            </a>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Timer className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Yönlendiriliyorsunuz
            </h1>
            <p className="text-gray-600">
              {countdown} saniye içinde yönlendirileceksiniz. Hemen gitmek için aşağıdaki düğmeye tıklayabilirsiniz.
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-primary/20">
                <div
                  style={{ width: `${(countdown / 5) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
            <a
              href={targetUrl}
              className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              Şimdi Git
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}