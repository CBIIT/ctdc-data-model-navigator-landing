import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Graph View",
        description: "Easily visualize data models with an interactive graph, highlighting hierarchical relationships for seamless navigation and understanding of complex data structures.",
        bullets: [
            {
                title: "Interactive Graph Visualization",
                description: "Easily explore your data model with an intuitive graph that highlights relationships between nodes and their parents.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Clear Hierarchical Representation",
                description: "Nodes are categorically and hierarchically structured, making it simple to understand complex data relationships.",
                icon: <FiTarget size={26} />
            },
            {
                title: "User-Friendly Navigation",
                description: "Navigate intricate data models effortlessly with an interactive and visually organized map.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/Picture1.png"
    },
    {
        title: "Seamless Investing",
        description: "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
        bullets: [
            {
                title: "Micro-Investing",
                description: "Begin with as little as $1 and watch your money grow.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Expert Portfolios",
                description: "Choose from investment strategies tailored to your risk tolerance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Real-Time Performance",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/Picture2.png"
    },
    {
        title: "Bank-Grade Security",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "Your information is safeguarded with the highest level of encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Fraud Detection",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/Picture3.png"
    },
]