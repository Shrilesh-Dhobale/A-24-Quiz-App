const questions = [
    {
        question: "What is the capital of America?",
        option: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
        answer: "Washington, D.C."
    },
    {
        question: "What is the largest planet in our solar system?",
        option: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        option: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        option: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which organ is responsible for pumping blood throughout the body?",
        option: ["Lungs", "Brain", "Heart", "Liver"],
        answer: "Heart"
    },
    {
        question: "What is the capital of India?",
        option: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "Which river is considered the holiest in India?",
        option: ["Ganges", "Yamuna", "Brahmaputra", "Indus"],
        answer: "Ganges"
    },
    {
        question: "Who was the first Prime Minister of India?",
        option: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Rajguru"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "What is the national animal of India?",
        option: ["Lion", "Tiger", "Elephant", "Leopard"],
        answer: "Tiger"
    },
    {
        question: "Which festival is known as the festival of lights in India?",
        option: ["Holi", "Diwali", "Eid", "Christmas"],
        answer: "Diwali"
    },
    {
        question: "What is the currency of India?",
        option: ["Rupee", "Dollar", "Euro", "Yen"],
        answer: "Rupee"
    },
    {
        question: "Which is the largest state in India by area?",
        option: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh"],
        answer: "Rajasthan"
    },
    {
        question: "Who led the Salt March in 1930?",
        option: ["Mahatma Gandhi", "Sardar Patel", "Rajguru", "Sukhdev"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "What is the national flower of India?",
        option: ["Rose", "Lotus", "Jasmine", "Sunflower"],
        answer: "Lotus"
    },
    {
        question: "Which mountain range is located in northern India?",
        option: ["Western Ghats", "Eastern Ghats", "Himalayas", "Vindhyas"],
        answer: "Himalayas"
    },
    {
        question: "What is the official language of India?",
        option: ["Hindi", "English", "Sanskrit", "Urdu"],
        answer: "Hindi"
    },
    {
        question: "Which Indian city is known as the Silicon Valley of India?",
        option: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
        answer: "Bangalore"
    },
    {
        question: "Who wrote the Indian national anthem?",
        option: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sardar Patel", "Nehru"],
        answer: "Rabindranath Tagore"
    },
    {
        question: "What is the population of India approximately?",
        option: ["1 billion", "1.3 billion", "1.5 billion", "2 billion"],
        answer: "1.3 billion"
    },
    {
        question: "Which sport is most popular in India?",
        option: ["Hockey", "Cricket", "Football", "Basketball"],
        answer: "Cricket"
    },
    {
        question: "What is the name of the Indian Parliament?",
        option: ["Lok Sabha", "Rajya Sabha", "Sansad", "Vidhan Sabha"],
        answer: "Sansad"
    },
    {
        question: "Which Indian state is known for tea production?",
        option: ["Kerala", "Assam", "Punjab", "Gujarat"],
        answer: "Assam"
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        option: ["Indira Gandhi", "Sonia Gandhi", "Mayawati", "Jayalalitha"],
        answer: "Indira Gandhi"
    },
    {
        question: "What is the national bird of India?",
        option: ["Peacock", "Sparrow", "Eagle", "Crow"],
        answer: "Peacock"
    },
    {
        question: "Which river is the longest in India?",
        option: ["Ganges", "Godavari", "Krishna", "Yamuna"],
        answer: "Ganges"
    },
    {
        question: "What is the main religion in India?",
        option: ["Hinduism", "Islam", "Christianity", "Buddhism"],
        answer: "Hinduism"
    },
    {
        question: "Which Indian monument is a symbol of love?",
        option: ["Taj Mahal", "Red Fort", "Qutub Minar", "India Gate"],
        answer: "Taj Mahal"
    },
    {
        question: "What is the literacy rate of India approximately?",
        option: ["60%", "70%", "80%", "90%"],
        answer: "70%"
    },
    {
        question: "Which state is known as the 'Land of Five Rivers'?",
        option: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
        answer: "Punjab"
    },
    {
        question: "Who discovered India for Europe?",
        option: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
        answer: "Vasco da Gama"
    },
    {
        question: "What is the name of the Indian space agency?",
        option: ["ISRO", "NASA", "ESA", "Roscosmos"],
        answer: "ISRO"
    },
    {
        question: "Which Indian festival celebrates the victory of good over evil?",
        option: ["Diwali", "Holi", "Eid", "Christmas"],
        answer: "Diwali"
    },
    {
        question: "What is the capital of Maharashtra?",
        option: ["Mumbai", "Pune", "Nagpur", "Nashik"],
        answer: "Mumbai"
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        option: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajguru"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "Which is the smallest state in India by area?",
        option: ["Goa", "Sikkim", "Tripura", "Manipur"],
        answer: "Goa"
    },
    {
        question: "What is the main crop of Punjab?",
        option: ["Rice", "Wheat", "Cotton", "Sugarcane"],
        answer: "Wheat"
    },
    {
        question: "Which Indian scientist won the Nobel Prize in Physics?",
        option: ["C.V. Raman", "Jagadish Chandra Bose", "Srinivasa Ramanujan", "Vikram Sarabhai"],
        answer: "C.V. Raman"
    },
    {
        question: "What is the name of the Indian Constitution's preamble?",
        option: ["We the people", "Justice for all", "Liberty and equality", "Sovereign Democratic Republic"],
        answer: "Sovereign Democratic Republic"
    },
    {
        question: "Which city is known as the 'Pink City'?",
        option: ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
        answer: "Jaipur"
    },
    {
        question: "Who was the first President of India?",
        option: ["Rajendra Prasad", "Sardar Patel", "Nehru", "Gandhi"],
        answer: "Rajendra Prasad"
    },
    {
        question: "What is the national sport of India?",
        option: ["Cricket", "Hockey", "Kabaddi", "Badminton"],
        answer: "Hockey"
    },
    {
        question: "Which state is known for its backwaters?",
        option: ["Kerala", "Goa", "Tamil Nadu", "Karnataka"],
        answer: "Kerala"
    },
    {
        question: "What is the GDP rank of India in the world?",
        option: ["5th", "6th", "7th", "8th"],
        answer: "5th"
    },
    {
        question: "Which Indian leader started the Non-Cooperation Movement?",
        option: ["Mahatma Gandhi", "Sardar Patel", "Rajguru", "Sukhdev"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "What is the capital of Karnataka?",
        option: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
        answer: "Bangalore"
    }
];
export default questions;        
