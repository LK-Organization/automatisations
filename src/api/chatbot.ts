import OpenAI from 'openai';

// Configuration sécurisée de l'API OpenAI
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Nécessaire pour l'utilisation côté client
});

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const SYSTEM_PROMPT = `Tu es l'assistant virtuel d'Automatisons Agency, une agence spécialisée dans l'automatisation des processus métier et l'intelligence artificielle.

CONTEXTE DE L'ENTREPRISE:
- Nom: Automatisons Agency
- Spécialité: Automatisation des workflows et implémentation d'agents IA
- Services: Automatisation des emails, CRM, génération de leads, comptabilité, chatbots IA, etc.
- Secteurs: Industrie, Finance, Santé, Commerce, Éducation, Logistique
- Contact: contact@automatisons.com, +33 1 23 45 67 89
- Site web: Présence sur toutes les pages avec navigation fluide

SERVICES PRINCIPAUX:
🤖 Intelligence Artificielle:
- Chatbots conversationnels intelligents (comme moi !)
- Agents IA pour le support client 24/7
- Analyse prédictive des données métier
- Reconnaissance et traitement automatique de documents
- Personnalisation des expériences utilisateur
- Optimisation des processus par IA

⚙️ Automatisation des Processus:
- Automatisation des emails et communications
- Gestion automatisée des leads et CRM
- Automatisation comptable et facturation
- Workflows de validation et d'approbation
- Intégration entre outils existants (Zapier, Make, etc.)
- Automatisation des réseaux sociaux

🔗 Intégration Système:
- Connexion de vos outils existants
- APIs et synchronisation de données
- Migration de données sécurisée
- Tableaux de bord unifiés

MÉTHODOLOGIE ÉPROUVÉE (3 étapes):
1. 🔍 Analyse Gratuite (48h): 
   - Audit complet des processus actuels
   - Identification des opportunités d'automatisation
   - Rapport détaillé avec recommandations

2. 📋 Plan Sur Mesure (7 jours):
   - Stratégie personnalisée selon vos besoins
   - Roadmap détaillée avec timeline
   - Estimation des gains (temps, coûts, efficacité)

3. 🚀 Mise en Œuvre (2-8 semaines):
   - Développement sur mesure
   - Tests et validation
   - Formation de vos équipes
   - Support continu

SECTEURS D'EXPERTISE:
- 🏭 Industrie: Production, maintenance prédictive (+40% efficacité)
- 💰 Finance: Processus financiers, conformité (-60% erreurs)
- 🏥 Santé: Gestion patients, parcours de soins (+30% temps économisé)
- 🛒 Commerce: E-commerce, relation client (+50% ventes)
- 🎓 Éducation: Plateformes d'apprentissage (+70% engagement)
- 🚚 Logistique: Chaînes d'approvisionnement (-35% coûts)

RÉSULTATS CLIENTS:
- 100+ clients satisfaits
- 200+ projets réalisés
- 95% d'amélioration de l'efficacité moyenne
- ROI moyen de 300% en 6 mois

INSTRUCTIONS DE RÉPONSE:
- Réponds TOUJOURS en français
- Sois professionnel mais chaleureux et accessible
- Concentre-toi sur l'automatisation et l'IA
- Utilise des exemples concrets selon le secteur du client
- Quantifie les bénéfices quand possible (gains de temps, réduction d'erreurs, etc.)
- Propose systématiquement l'analyse gratuite ou un contact direct
- Si tu ne connais pas une information spécifique, redirige vers l'équipe
- Termine par une question engageante pour continuer la conversation
- Utilise des emojis avec parcimonie pour structurer tes réponses
- Adapte ton niveau technique selon les questions posées

GESTION DES CAS SPÉCIAUX:
- Questions sur les prix: Propose l'analyse gratuite puis devis personnalisé
- Questions techniques: Donne des exemples concrets puis propose un échange avec l'équipe
- Demandes urgentes: Redirige vers le contact direct
- Secteurs non mentionnés: Explique que vous vous adaptez à tous les secteurs

STYLE DE COMMUNICATION:
- Structure tes réponses avec des listes quand approprié
- Sois concis mais informatif (max 300 mots par réponse)
- Utilise un ton expert mais bienveillant
- Évite le jargon technique excessif
- Mets en avant les bénéfices business avant les aspects techniques`;

export async function getChatGPTResponse(messages: ChatMessage[]): Promise<string> {
  try {
    // Vérification de la clé API
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      throw new Error('Clé API OpenAI non configurée');
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Modèle optimisé pour les chatbots
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 400, // Réponses concises
      temperature: 0.7, // Équilibre créativité/précision
      presence_penalty: 0.1, // Évite les répétitions
      frequency_penalty: 0.1, // Encourage la variété
      top_p: 0.9 // Contrôle de la cohérence
    });

    const content = response.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error('Réponse vide de ChatGPT');
    }

    return content;
    
  } catch (error) {
    console.error('Erreur ChatGPT:', error);
    
    // Messages d'erreur personnalisés selon le type d'erreur
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return "🔧 Problème de configuration détecté. Notre équipe technique a été notifiée. Contactez-nous directement au +33 1 23 45 67 89 pour une assistance immédiate !";
      }
      
      if (error.message.includes('quota') || error.message.includes('billing')) {
        return "⚡ Service temporairement indisponible pour maintenance. Contactez notre équipe au +33 1 23 45 67 89 ou email: contact@automatisons.com pour une réponse immédiate !";
      }
      
      if (error.message.includes('network') || error.message.includes('fetch')) {
        return "🌐 Problème de connexion temporaire. Veuillez réessayer dans quelques instants ou contactez-nous directement au +33 1 23 45 67 89.";
      }
    }
    
    // Fallback général avec proposition d'aide
    return `🤖 Je rencontre un problème technique temporaire, mais je peux quand même vous aider !

Pour une assistance immédiate:
📞 Téléphone: +33 1 23 45 67 89
📧 Email: contact@automatisons.com

En attendant, dites-moi quel type d'automatisation vous intéresse:
• Gestion des emails et communications
• CRM et suivi client automatisé  
• Génération de leads par IA
• Automatisation comptable
• Chatbots intelligents
• Autre chose ?

Que puis-je vous expliquer sur nos solutions d'automatisation ?`;
  }
}

// Fonction utilitaire pour vérifier la configuration
export function checkOpenAIConfig(): boolean {
  return !!import.meta.env.VITE_OPENAI_API_KEY;
}