import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  lang: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Message de bienvenue
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Bonjour ! Je suis l'assistant virtuel d'Automatisons Agency. Je peux vous aider avec vos questions sur l'automatisation des workflows, l'implémentation d'agents IA, et nos services. Comment puis-je vous aider aujourd'hui ?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const knowledgeBase = {
    // Questions sur l'automatisation
    'automatisation': {
      keywords: ['automatisation', 'automatiser', 'workflow', 'processus', 'tâches'],
      response: "L'automatisation des workflows permet de simplifier et d'optimiser vos processus métier. Nous proposons :\n\n• Automatisation des emails et communications\n• Gestion automatisée des leads et CRM\n• Automatisation comptable et facturation\n• Workflows de validation et d'approbation\n• Intégration entre vos outils existants\n\nSouhaitez-vous en savoir plus sur un domaine spécifique ?"
    },
    
    // Questions sur l'IA
    'intelligence artificielle': {
      keywords: ['ia', 'intelligence artificielle', 'ai', 'agent ia', 'chatbot', 'machine learning'],
      response: "Nos solutions d'intelligence artificielle incluent :\n\n• Chatbots conversationnels intelligents\n• Agents IA pour le support client\n• Analyse prédictive des données\n• Reconnaissance et traitement automatique de documents\n• Personnalisation des expériences utilisateur\n• Optimisation des processus par IA\n\nQuel type d'agent IA vous intéresse le plus ?"
    },

    // Questions sur les services
    'services': {
      keywords: ['services', 'offres', 'solutions', 'que faites-vous', 'proposez-vous'],
      response: "Nos principaux services incluent :\n\n🤖 **Intelligence Artificielle**\n• Développement d'agents IA personnalisés\n• Chatbots et assistants virtuels\n• Analyse de données par IA\n\n⚙️ **Automatisation des Processus**\n• Workflows automatisés\n• Intégrations système\n• Optimisation des tâches répétitives\n\n🔗 **Intégration Système**\n• Connexion de vos outils\n• APIs et synchronisation\n• Migration de données\n\nQuel service vous intéresse ?"
    },

    // Questions sur les prix
    'prix': {
      keywords: ['prix', 'coût', 'tarif', 'budget', 'combien', 'devis'],
      response: "Nos tarifs sont personnalisés selon vos besoins spécifiques. Voici notre approche :\n\n💡 **Analyse gratuite** (48h)\n• Audit de vos processus actuels\n• Identification des opportunités\n• Estimation des gains potentiels\n\n📋 **Devis personnalisé**\n• Basé sur la complexité du projet\n• Paiement échelonné possible\n• ROI garanti\n\nSouhaitez-vous une analyse gratuite de vos processus ?"
    },

    // Questions sur l'implémentation
    'implementation': {
      keywords: ['implémentation', 'mise en place', 'déploiement', 'installation', 'comment ça marche'],
      response: "Notre processus d'implémentation en 3 étapes :\n\n🔍 **1. Analyse (48h)**\n• Audit complet de vos processus\n• Identification des opportunités\n• Rapport détaillé gratuit\n\n📋 **2. Planification (7 jours)**\n• Stratégie personnalisée\n• Roadmap détaillée\n• Planning de déploiement\n\n🚀 **3. Déploiement (2-8 semaines)**\n• Développement sur mesure\n• Tests et validation\n• Formation de vos équipes\n• Support continu\n\nVoulez-vous commencer par une analyse gratuite ?"
    },

    // Questions sur les secteurs
    'secteurs': {
      keywords: ['secteur', 'industrie', 'domaine', 'entreprise', 'business'],
      response: "Nous accompagnons tous les secteurs d'activité :\n\n🏭 **Industrie** - Production et maintenance prédictive\n💰 **Finance** - Processus financiers et conformité\n🏥 **Santé** - Gestion patients et parcours de soins\n🛒 **Commerce** - E-commerce et relation client\n🎓 **Éducation** - Plateformes d'apprentissage\n🚚 **Logistique** - Chaînes d'approvisionnement\n\nDans quel secteur évoluez-vous ?"
    },

    // Questions sur le support
    'support': {
      keywords: ['support', 'aide', 'assistance', 'problème', 'bug'],
      response: "Notre support client comprend :\n\n🔧 **Support technique 24/7**\n• Assistance en temps réel\n• Résolution rapide des problèmes\n• Maintenance préventive\n\n📚 **Formation et documentation**\n• Formation de vos équipes\n• Guides d'utilisation détaillés\n• Webinaires réguliers\n\n📞 **Contact direct**\n• Email : contact@automatisons.com\n• Téléphone : +33 1 23 45 67 89\n• Chat en direct (comme maintenant !)\n\nComment puis-je vous aider spécifiquement ?"
    }
  };

  const findBestResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Recherche par mots-clés
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => message.includes(keyword))) {
        return data.response;
      }
    }

    // Réponses pour des questions courantes
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
      return "Bonjour ! Ravi de vous rencontrer. Je suis là pour répondre à toutes vos questions sur l'automatisation et l'intelligence artificielle. Que souhaitez-vous savoir ?";
    }

    if (message.includes('merci') || message.includes('thank you')) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider à comprendre comment l'automatisation peut transformer votre entreprise.";
    }

    if (message.includes('contact') || message.includes('rendez-vous') || message.includes('rdv')) {
      return "Pour nous contacter :\n\n📧 **Email** : contact@automatisons.com\n📞 **Téléphone** : +33 1 23 45 67 89\n📍 **Adresse** : Paris, France\n\nVous pouvez aussi remplir notre formulaire de contact sur le site pour une réponse rapide. Souhaitez-vous que je vous redirige vers la page contact ?";
    }

    // Réponse par défaut
    return "Je comprends votre question, mais j'aimerais vous donner une réponse plus précise. Pouvez-vous me dire si vous vous intéressez plutôt à :\n\n• L'automatisation de processus métier\n• L'implémentation d'agents IA\n• Nos services et tarifs\n• Un secteur d'activité spécifique\n\nOu contactez directement notre équipe au +33 1 23 45 67 89 pour un conseil personnalisé !";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulation du temps de réponse
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <MessageCircle size={24} />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold">!</span>
        </div>
      </motion.button>

      {/* Interface du chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '60px' : '600px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{ width: '400px', maxWidth: '90vw' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Assistant IA</h3>
                  <p className="text-xs opacity-90">Automatisons Agency</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.isBot 
                            ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {message.isBot ? <Bot size={16} /> : <User size={16} />}
                        </div>
                        <div className={`rounded-2xl p-3 ${
                          message.isBot 
                            ? 'bg-gray-100 text-gray-800' 
                            : 'bg-gradient-to-r from-primary-600 to-accent-500 text-white'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className={`text-xs mt-1 opacity-70 ${
                            message.isBot ? 'text-gray-500' : 'text-white/70'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                          <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Tapez votre message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      disabled={isTyping}
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-2 rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={16} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;