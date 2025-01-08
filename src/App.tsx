import React from 'react';
import { Heart, Brain, MessageCircle, Clock, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80"
            alt="Consultório acolhedor"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Dra. Maria Silva</h1>
            <p className="text-xl mb-8">Psicóloga Clínica - CRP 00/0000</p>
            <p className="text-lg mb-8">Ajudando pessoas a encontrarem equilíbrio emocional e bem-estar mental.</p>
            <a href="#contato" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full inline-block transition">
              Agende sua Consulta
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-white" id="servicos">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Áreas de Atuação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-lg transition">
              <Heart className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Terapia Individual</h3>
              <p className="text-gray-600">Atendimento personalizado para auxiliar no seu desenvolvimento pessoal e bem-estar emocional.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-lg transition">
              <Brain className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Ansiedade e Depressão</h3>
              <p className="text-gray-600">Tratamento especializado para transtornos de ansiedade e quadros depressivos.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-lg transition">
              <MessageCircle className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Terapia Online</h3>
              <p className="text-gray-600">Atendimento remoto com a mesma qualidade e sigilo do consultório presencial.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white" id="servicos">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Áreas de Atuação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-lg transition">
              <Heart className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Terapia Individual</h3>
              <p className="text-gray-600">Atendimento personalizado para auxiliar no seu desenvolvimento pessoal e bem-estar emocional.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-lg transition">
              <Brain className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Ansiedade e Depressão</h3>
              <p className="text-gray-600">Tratamento especializado para transtornos de ansiedade e quadros depressivos.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-lg transition">
              <MessageCircle className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Terapia Online</h3>
              <p className="text-gray-600">Atendimento remoto com a mesma qualidade e sigilo do consultório presencial.</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-neutral-50" id="sobre">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Dra. Maria Silva"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-gray-600 mb-4">
                Com mais de 10 anos de experiência clínica, dedico-me a ajudar pessoas a superarem seus desafios emocionais e alcançarem uma vida mais plena e equilibrada.
              </p>
              <p className="text-gray-600 mb-6">
                Formada pela Universidade de São Paulo (USP), com especialização em Terapia Cognitivo-Comportamental e mestrado em Psicologia Clínica.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-rose-600 mr-2" />
                  <span>10+ anos de experiência</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-rose-600 mr-2" />
                  <span>Atendimento presencial e online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-neutral-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"O acompanhamento psicológico mudou minha vida. Me sinto mais confiante e preparada para enfrentar os desafios."</p>
                <p className="font-semibold">Cliente {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-neutral-50" id="contato">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-rose-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-rose-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">E-mail</h3>
                    <p className="text-gray-600">contato@dramariasilva.com.br</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-rose-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Endereço</h3>
                    <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-rose-600 hover:text-rose-700">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-rose-600 hover:text-rose-700">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Dra. Maria Silva - Todos os direitos reservados</p>
          <p className="text-sm mt-2">CRP 00/0000</p>
        </div>
      </footer>
    </div>
  );
}

export default App;