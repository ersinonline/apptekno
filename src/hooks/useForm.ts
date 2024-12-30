import { useState } from 'react';

export function useForm(formspreeId: string) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const closePopup = () => setIsSubmitted(false);

  return { handleSubmit, isSubmitted, closePopup };
}