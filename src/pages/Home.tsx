import React, { useState } from 'react';
import { Car, Calendar, Shield, Clock, Star, MapPin, Phone, Mail } from 'lucide-react';

const CarRentalLanding = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: 'Семейные авто',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=200&fit=crop',
      description: 'Просторные и комфортные автомобили для семейных поездок'
    },
    {
      id: 2,
      title: 'Машины для путешествий',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=300&h=200&fit=crop',
      description: 'Надежные автомобили для дальних путешествий'
    },
    {
      id: 3,
      title: 'Эконом-класс',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop',
      description: 'Экономичные и доступные варианты'
    },
    {
      id: 4,
      title: 'Премиум и бизнес',
      image: 'https://images.unsplash.com/photo-1563720223185-61d6c6ded5cc?w=300&h=200&fit=crop',
      description: 'Роскошные автомобили для особых случаев'
    },
    {
      id: 5,
      title: 'Внедорожники и кроссоверы',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=300&h=200&fit=crop',
      description: 'Мощные внедорожники для любых дорог'
    },
    {
      id: 6,
      title: 'Машины для особых случаев (мероприятия)',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop',
      description: 'Эксклюзивные автомобили для торжественных событий'
    }
  ];

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: 'Быстрое бронирование',
      description: 'Забронируйте автомобиль онлайн за считанные минуты'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Полная страховка',
      description: 'Все автомобили застрахованы и проходят техосмотр'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: '24/7 поддержка',
      description: 'Круглосуточная техническая поддержка клиентов'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Car className="w-8 h-8 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Главная страница</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Арендовать
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                Войти
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block bg-white/10 p-4 rounded-2xl mb-6">
              <Car className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Арендуй свою идеальную машину за минуту
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Платформа, которая соединяет владельцев авто и клиентов — быстро, удобно и безопасно.
            От надёжных внедорожников до экономичных седанов — арендуй то, что подходит именно
            тебе, без посредников и скрытых комиссий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Найти автомобиль
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Сдать в аренду
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Популярные категории
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Почему аренда машины — это удобно и просто круто?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Готовы начать свое путешествие?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Присоединяйтесь к тысячам довольных клиентов и найдите идеальный автомобиль для ваших нужд
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Арендовать сейчас
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">CarRental</span>
              </div>
              <p className="text-gray-400">
                Ваш надежный партнер в мире автомобильной аренды
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Аренда авто</a></li>
                <li><a href="#" className="hover:text-white">Долгосрочная аренда</a></li>
                <li><a href="#" className="hover:text-white">Корпоративные услуги</a></li>
                <li><a href="#" className="hover:text-white">Страхование</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Помощь</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@carrental.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CarRental. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Modal for selected category */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedCategory.title}
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedCategory.image}
                alt={selectedCategory.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-6">
                {selectedCategory.description}
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Посмотреть автомобили
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarRentalLanding;