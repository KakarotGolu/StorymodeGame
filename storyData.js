const story = {
    start: {
        text: "You find an ancient scroll in a dusty library. It speaks of the 'Crown of Eternity,' an artifact that grants unimaginable power. What do you do?",
        choices: {
            "Study the scroll further": { nextNode: "study_scroll", score: 10 },
            "Set out on the journey immediately": { nextNode: "start_journey", score: 20 },
            "Ignore it as a myth": { nextNode: "ignore_scroll", score: -5 }
        }
    },

    // Act 2 - Different Paths
    study_scroll: {
        text: "You learn that the crown is hidden in a lost temple guarded by riddles. What do you do?",
        choices: {
            "Solve the riddle on the scroll": { nextNode: "solve_riddle", score: 15 },
            "Seek out a historian for help": { nextNode: "seek_historian", score: 10 }
        }
    },
    start_journey: {
        text: "You reach a deserted village where people speak of a guardian beast. What do you do?",
        choices: {
            "Confront the beast": { nextNode: "fight_beast", score: 20 },
            "Sneak past it": { nextNode: "sneak_past", score: 15 }
        }
    },
    ignore_scroll: {
        text: "That night, you wake up to whispers in your ear. The scroll is floating in mid-air! What do you do?",
        choices: {
            "Grab it": { nextNode: "grab_scroll", score: 10 },
            "Run away in fear": { nextNode: "run_away", score: -10 }
        }
    },

    // Act 3 - The Forbidden Forest
    solve_riddle: {
        text: "The riddle reveals a secret entrance to the temple. Your path leads to an eerie forest where the trees whisper your name. What do you do?",
        choices: {
            "Follow the whispers": { nextNode: "follow_whispers", score: 10 },
            "Ignore them and push forward": { nextNode: "ignore_whispers", score: 5 },
            "Mark your path and stay cautious": { nextNode: "mark_path", score: 15 }
        }
    },
    seek_historian: {
        text: "A historian tells you about an enchanted forest on the way to the temple. You reach it and hear whispers. What do you do?",
        choices: {
            "Follow the whispers": { nextNode: "follow_whispers", score: 10 },
            "Ignore them and push forward": { nextNode: "ignore_whispers", score: 5 },
            "Mark your path and stay cautious": { nextNode: "mark_path", score: 15 }
        }
    },
    fight_beast: {
        text: "The guardian beast roars and attacks! You barely escape and find yourself in a dark forest. What do you do?",
        choices: {
            "Follow the whispers": { nextNode: "follow_whispers", score: 10 },
            "Ignore them and push forward": { nextNode: "ignore_whispers", score: 5 },
            "Mark your path and stay cautious": { nextNode: "mark_path", score: 15 }
        }
    },
    sneak_past: {
        text: "You successfully sneak past the beast and find yourself at the entrance of an enchanted forest. What do you do?",
        choices: {
            "Follow the whispers": { nextNode: "follow_whispers", score: 10 },
            "Ignore them and push forward": { nextNode: "ignore_whispers", score: 5 },
            "Mark your path and stay cautious": { nextNode: "mark_path", score: 15 }
        }
    },
    grab_scroll: {
        text: "The scroll glows with strange energy and leads you to an eerie forest. The trees whisper your name. What do you do?",
        choices: {
            "Follow the whispers": { nextNode: "follow_whispers", score: 10 },
            "Ignore them and push forward": { nextNode: "ignore_whispers", score: 5 },
            "Mark your path and stay cautious": { nextNode: "mark_path", score: 15 }
        }
    },
    run_away: {
        text: "You flee in terror, but somehow end up in a dark forest. The trees whisper your name. What do you do?",
        choices: {
            "Follow the whispers": { nextNode: "follow_whispers", score: 10 },
            "Ignore them and push forward": { nextNode: "ignore_whispers", score: 5 },
            "Mark your path and stay cautious": { nextNode: "mark_path", score: 15 }
        }
    },

    // Act 4 - The Hidden Kingdom
    follow_whispers: {
        text: "The whispers guide you to the entrance of a lost kingdom, but its people are frozen in time. What do you do?",
        choices: {
            "Search for the cause of the curse": { nextNode: "search_curse", score: 20 },
            "Find the crown before anything else": { nextNode: "find_crown", score: 15 },
            "Look for someone still awake": { nextNode: "find_survivor", score: 10 }
        }
    },
    ignore_whispers: {
        text: "Ignoring the whispers, you push forward and discover the lost kingdom, its people frozen in time. What do you do?",
        choices: {
            "Search for the cause of the curse": { nextNode: "search_curse", score: 20 },
            "Find the crown before anything else": { nextNode: "find_crown", score: 15 },
            "Look for someone still awake": { nextNode: "find_survivor", score: 10 }
        }
    },
    mark_path: {
        text: "Marking your path, you notice ancient symbols leading to a lost kingdom where people are frozen in time. What do you do?",
        choices: {
            "Search for the cause of the curse": { nextNode: "search_curse", score: 20 },
            "Find the crown before anything else": { nextNode: "find_crown", score: 15 },
            "Look for someone still awake": { nextNode: "find_survivor", score: 10 }
        }
    },

    // Final Act - The Fate of the Crown
    search_curse: {
        text: "You discover that breaking the curse might restore the kingdom—but it comes with a price. What will you do?",
        choices: {
            "Break the curse": { nextNode: "break_curse", score: 25 },
            "Ignore the curse and take the crown": { nextNode: "take_crown", score: -15 }
        }
    },
    find_crown: {
        text: "You reach the throne room where the Crown of Eternity lies. As you touch it, the ground trembles. What do you do?",
        choices: {
            "Wear the crown": { nextNode: "wear_crown", score: 20 },
            "Destroy the crown": { nextNode: "destroy_crown", score: 15 },
            "Hide the crown": { nextNode: "hide_crown", score: 10 }
        }
    },
    find_survivor: {
        text: "You find an old scholar who warns you about the crown’s dark power. He offers you a choice. What will you do?",
        choices: {
            "Help him break the curse": { nextNode: "break_curse", score: 25 },
            "Take the crown anyway": { nextNode: "take_crown", score: -15 }
        }
    },

    // Endings
    break_curse: {
        text: "The kingdom awakens, but you must sacrifice your memories to do so. You become a legend, but you forget your journey. The End.",
        choices: {}
    },
    take_crown: {
        text: "You claim the Crown of Eternity, but its power consumes you. You are now the ruler of a frozen kingdom. The End.",
        choices: {}
    },
    wear_crown: {
        text: "As you wear the crown, you feel its immense power. Will you use it for good or let it corrupt you? Only time will tell. The End.",
        choices: {}
    },
    destroy_crown: {
        text: "You destroy the crown, breaking its dark power. The kingdom is freed, and you are hailed as a hero. The End.",
        choices: {}
    },
    hide_crown: {
        text: "You hide the crown where no one will find it. The kingdom remains frozen, but you have saved the world from its dark power. The End.",
        choices: {}
    }
};