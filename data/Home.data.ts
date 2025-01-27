import { StaticImageData } from "next/image";
import image1 from "../assets/Content/image1.png";
import image2 from "../assets/Content/image2.png";
import image3 from "../assets/Content/image3.png";
import image4 from "../assets/Content/image4.png";
export const data: Data[] = [
  {
    title: "What Is a Blockchain?",
    id: "whatisblockchain",
    paragraphs: [
      "A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.",
      "One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.",
      "A database usually structures its data into tables, whereas a blockchain, as its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible timeline of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this timeline. Each block in the chain is given an exact timestamp when it is added to the chain.",
    ],
    listTitle: "KEY TAKEAWAYS",
    listItems: [
      "Blockchain is a type of shared database that differs from a typical database in the way that it stores information; blockchains store data in blocks that are then linked together via cryptography.",
      "As new data comes in, it is entered into a fresh block. Once the block is filled with data, it is chained onto the previous block, which makes the data chained together in chronological order.",
      "Different types of information can be stored on a blockchain, but the most common use so far has been as a ledger for transactions.",
      "In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.",
      "Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.",
    ],
  },
  {
    id: "howitworks",
    title: "How Does a Blockchain Work?",
    paragraphs: [
      "The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT).",
      "First proposed as a research project in 1991, the blockchain concept predated its first widespread application in use: Bitcoin, in 2009. In the years since, the use of blockchains has exploded via the creation of various cryptocurrencies, decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and smart contracts.",
    ],
    images: [
      {
        subTitle: "Transaction Process",
        source: image1,
      },
      {
        subTitle: "Attributes of Cryptocurrency",
        source: image2,
      },
    ],
  },
  {
    id: "decentralization",
    title: "Blockchain Decentralization",
    paragraphs: [
      "Imagine that a company owns a server farm with 10,000 computers used to maintain a database holding all of its client’s account information. This company owns a warehouse building that contains all of these computers under one roof and has full control of each of these computers and all of the information contained within them. This, however, provides a single point of failure. What happens if the electricity at that location goes out? What if its Internet connection is severed? What if it burns to the ground? What if a bad actor erases everything with a single keystroke? In any case, the data is lost or corrupted.",
      "What a blockchain does is to allow the data held in that database to be spread out among several network nodes at various locations. This not only creates redundancy but also maintains the fidelity of the data stored therein—if somebody tries to alter a record at one instance of the database, the other nodes would not be altered and thus would prevent a bad actor from doing so. If one user tampers with Bitcoin’s record of transactions, all other nodes would cross-reference each other and easily pinpoint the node with the incorrect information. This system helps to establish an exact and transparent order of events. This way, no single node within the network can alter information held within it.",
      "Because of this, the information and history (such as of transactions of a cryptocurrency) are irreversible. Such a record could be a list of transactions (such as with a cryptocurrency), but it also is possible for a blockchain to hold a variety of other information like legal contracts, state identifications, or a company’s product inventory.",
    ],
  },
  {
    id: "transparency",
    title: "Transparency",
    paragraphs: [
      "Because of the decentralized nature of Bitcoin’s blockchain, all transactions can be transparently viewed by either having a personal node or using blockchain explorers that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as fresh blocks are confirmed and added. This means that if you wanted to, you could track Bitcoin wherever it goes. ",
      "For example, exchanges have been hacked in the past, where those who kept Bitcoin on the exchange lost everything. While the hacker may be entirely anonymous, the Bitcoins that they extracted are easily traceable. If the Bitcoins stolen in some of these hacks were to be moved or spent somewhere, it would be known.",
      "Of course, the records stored in the Bitcoin blockchain (as well as most others) are encrypted. This means that only the owner of a record can decrypt it to reveal their identity (using a public-private key pair). As a result, users of blockchains can remain anonymous while preserving transparency.",
    ],
    images: [
      {
        source: image3,
      },
    ],
  },
  {
    id: "security",
    title: "Is Blockchain Secure?",
    paragraphs: [
      "Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless a majority of the network has reached a consensus to do so. That’s because each block contains its own hash, along with the hash of the block before it, as well as the previously mentioned timestamp. Hash codes are created by a mathematical function that turns digital information into a string of numbers and letters. If that information is edited in any way, then the hash code changes as well.",
      "Let’s say that a hacker, who also runs a node on a blockchain network, wants to alter a blockchain and steal cryptocurrency from everyone else. If they were to alter their own single copy, it would no longer align with everyone else’s copy. When everyone else cross-references their copies against each other, they would see this one copy stand out, and that hacker’s version of the chain would be cast away as illegitimate.",
      "Succeeding with such a hack would require that the hacker simultaneously control and alter 51% or more of the copies of the blockchain so that their new copy becomes the majority copy and, thus, the agreed-upon chain. Such an attack would also require an immense amount of money and resources, as they would need to redo all of the blocks because they would now have different timestamps and hash codes. ",
      "Due to the size of many cryptocurrency networks and how fast they are growing, the cost to pull off such a feat probably would be insurmountable. This would be not only extremely expensive but also likely fruitless. Doing such a thing would not go unnoticed, as network members would see such drastic alterations to the blockchain. The network members would then hard fork off to a new version of the chain that has not been affected. This would cause the attacked version of the token to plummet in value, making the attack ultimately pointless, as the bad actor has control of a worthless asset. The same would occur if the bad actor were to attack the new fork of Bitcoin. It is built this way so that taking part in the network is far more economically incentivized than attacking it.",
    ],
    images: [
      {
        source: image4,
      },
    ],
  },
  {
    id: "bitcoinvsblockchain",
    title: "Bitcoin vs. Blockchain",
    paragraphs: [
      "Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, two researchers who wanted to implement a system where document timestamps could not be tampered with. But it wasn’t until almost two decades later, with the launch of Bitcoin in January 2009, that blockchain had its first real-world application.",
      "The Bitcoin protocol is built on a blockchain. In a research paper introducing the digital currency, Bitcoin’s pseudonymous creator, Satoshi Nakamoto, referred to it as “a new electronic cash system that’s fully peer-to-peer, with no trusted third party.",
      "The key thing to understand here is that Bitcoin merely uses blockchain as a means to transparently record a ledger of payments, but blockchain can, in theory, be used to immutably record any number of data points. As discussed above, this could be in the form of transactions, votes in an election, product inventories, state identifications, deeds to homes, and much more.",
      "Currently, tens of thousands of projects are looking to implement blockchains in a variety of ways to help society other than just recording transactions—for example, as a way to vote securely in democratic elections. The nature of blockchain’s immutability means that fraudulent voting would become far more difficult to occur. For example, a voting system could work such that each citizen of a country would be issued a single cryptocurrency or token. Each candidate would then be given a specific wallet address, and the voters would send their token or crypto to the address of whichever candidate for whom they wish to vote. The transparent and traceable nature of blockchain would eliminate both the need for human vote counting and the ability of bad actors to tamper with physical ballots.",
    ],
  },
  {
    id: "blockchainvsbanks",
    title: "Blockchain vs. Banks",
    paragraphs: [
      "Blockchains have been heralded as being a disruptive force to the finance sector, and especially with the functions of payments and banking. However, banks and decentralized blockchains are vastly different.",
      "Sending and receiving payments using traditional banking methods is not exactly effective. Let’s say you want to send money from the U.S to the U.K, you’ll have to pay a fee to the middleman for wire transfer. To make matters worse, the person you’re sending money to, may not even register the transaction until a week later. ",
      "Something as simple as a bank transfer has to go through several intermediaries and comply with a series of compliance requirements for payment completion. Blockchain technology works as a decentralized “ledger” of the transactions. Instead of banks utilizing SWIFT to keep track of transactions, interbank blockchain technology can track all the transactions securely. ",
      "If you’ve been in the financial industry all your life then you must be aware of how arduous raising money through venture capital is. Entrepreneurs have to sit through long negotiations just to sell a part of the company for the money required. ",
    ],
  },
  {
    id: "howblockchainused",
    title: "How Are Blockchains Used?",
    paragraphs: [
      "As we now know, blocks on Bitcoin’s blockchain store data about monetary transactions. Today, there are more than 10,000 other cryptocurrency systems running on blockchain. But it turns out that blockchain is actually a reliable way of storing data about other types of transactions as well.",
      "Some companies that have already incorporated blockchain include Walmart, Pfizer, AIG, Siemens, Unilever, and a host of others. For example, IBM has created its Food Trust blockchain to trace the journey that food products take to get to their locations.",
      "Why do this? The food industry has seen countless outbreaks of E. coli, salmonella, and listeria, as well as hazardous materials being accidentally introduced to foods. In the past, it has taken weeks to find the source of these outbreaks or the cause of sickness from what people are eating. Using blockchain gives brands the ability to track a food product’s route from its origin, through each stop it makes, and finally, its delivery. If a food is found to be contaminated, then it can be traced all the way back through each stop to its origin. Not only that, but these companies can also now see everything else it may have come in contact with, allowing the identification of the problem to occur far sooner and potentially saving lives. This is one example of blockchain in practice, but there are many other forms of blockchain implementation.",
    ],
  },
  {
    id: "prosandcons",
    title: "Pros and Cons of Blockchain",
    paragraphs: [
      "For all of its complexity, blockchain’s potential as a decentralized form of record-keeping is almost without limit. From greater user privacy and heightened security to lower processing fees and fewer errors, blockchain technology may very well see applications beyond those outlined above. But there are also some disadvantages.",
      "Bitcoin is no different from any other high-risk investment in terms of its practical application. This means that whether or not you should invest in it is determined by your risk tolerance and investment objectives. Are you concerned about bitcoin's drawbacks? If you answered yes, you should also be aware of its benefits, which will assist you in making an informed decision on whether or not to invest in bitcoin. Before you invest in bitcoins, you have the right to know everything there is to know about bitcoin. There are several advantages and disadvantages of investing in bitcoin that you should be aware of. Security and protection are two of the most important.",
      "The right to make payments is the most significant benefit that bitcoin investors gain from participating in the trading market. They can send and receive bitcoin payments at any time, from anywhere, and with no restrictions. Also, almost all payment options are available, so you can easily choose one to get your hands on bitcoin.",
    ],
  },
];

export interface Data {
  title: string;
  id: string;
  paragraphs: string[];
  images?: Image[];
  listTitle?: string;
  listItems?: string[];
}
interface Image {
  subTitle?: string;
  source: string | StaticImageData;
}
