export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  buttonText: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface ServiceCardProps {
  service: Service;
  isDarkMode: boolean;
}