import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Settings } from 'lucide-react';

interface MessagingCenterProps {
  userProfile: any;
}

interface Message {
  id: string;
  sender: string;
  senderType: "user" | "mentor";
  text: string;
  timestamp: string;
  read: boolean;
  avatar?: string;
}

interface Conversation {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  unreadCount: number;
  lastMessage: string;
  lastMessageTime: string;
}

const MessagingCenter: React.FC<MessagingCenterProps> = ({ userProfile }) => {
  const [activeConversation, setActiveConversation] = useState<string | null>("mentor-1");
  const [newMessage, setNewMessage] = useState("");
  
  // Mock conversations data - in a real app, this would come from your backend
  const conversations: Conversation[] = [
    {
      id: "mentor-1",
      name: "Dr. Smith",
      role: "FPGEE Mentor",
      avatar: "",
      unreadCount: 2,
      lastMessage: "Let me know if you have questions about the study materials.",
      lastMessageTime: "1h ago"
    },
    {
      id: "mentor-2",
      name: "Dr. Johnson",
      role: "Documentation Advisor",
      avatar: "",
      unreadCount: 0,
      lastMessage: "Your ECE evaluation looks good. Let's discuss next steps.",
      lastMessageTime: "1d ago"
    },
    {
      id: "mentor-3",
      name: "Ms. Rodriguez",
      role: "TOEFL Coach",
      avatar: "",
      unreadCount: 0,
      lastMessage: "Your speaking practice is improving! Keep it up.",
      lastMessageTime: "3d ago"
    }
  ];
  
  // Mock messages for the selected conversation
  const messagesByConversation: Record<string, Message[]> = {
    "mentor-1": [
      {
        id: "msg-1",
        sender: "Dr. Smith",
        senderType: "mentor",
        text: "Hello! I've reviewed your recent practice test scores. You're making good progress!",
        timestamp: "May 15, 2025, 10:30 AM",
        read: true
      },
      {
        id: "msg-2",
        sender: "You",
        senderType: "user",
        text: "Thank you! I've been practicing a lot with the materials you provided.",
        timestamp: "May 15, 2025, 10:35 AM",
        read: true
      },
      {
        id: "msg-3",
        sender: "Dr. Smith",
        senderType: "mentor",
        text: "Great! I've uploaded some additional resources on pharmacology that will help with the FPGEE.",
        timestamp: "May 15, 2025, 10:40 AM",
        read: true
      },
      {
        id: "msg-4",
        sender: "Dr. Smith",
        senderType: "mentor",
        text: "Also, there's a study group session this Friday. Would you like to join?",
        timestamp: "May 15, 2025, 2:05 PM",
        read: false
      },
      {
        id: "msg-5",
        sender: "Dr. Smith",
        senderType: "mentor",
        text: "Let me know if you have questions about the study materials.",
        timestamp: "Today, 9:15 AM",
        read: false
      }
    ],
    "mentor-2": [
      {
        id: "msg-6",
        sender: "Dr. Johnson",
        senderType: "mentor",
        text: "I've reviewed your documents. Everything looks good for the ECE evaluation.",
        timestamp: "May 10, 2025, 3:20 PM",
        read: true
      },
      {
        id: "msg-7",
        sender: "You",
        senderType: "user",
        text: "That's great news! How long does the evaluation typically take?",
        timestamp: "May 10, 2025, 4:00 PM",
        read: true
      },
      {
        id: "msg-8",
        sender: "Dr. Johnson",
        senderType: "mentor",
        text: "Usually about 4-6 weeks. I'll keep you updated on the progress.",
        timestamp: "May 10, 2025, 4:15 PM",
        read: true
      },
      {
        id: "msg-9",
        sender: "You",
        senderType: "user",
        text: "Perfect, thank you for your help!",
        timestamp: "May 10, 2025, 4:20 PM",
        read: true
      },
      {
        id: "msg-10",
        sender: "Dr. Johnson",
        senderType: "mentor",
        text: "Your ECE evaluation looks good. Let's discuss next steps.",
        timestamp: "Yesterday, 11:30 AM",
        read: true
      }
    ]
  };
  
  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeConversation) return;
    
    // In a real app, this would send the message to your backend
    console.log("Sending message:", newMessage, "to conversation:", activeConversation);
    setNewMessage("");
  };
  
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      {/* Conversation List */}
      <div className="w-full md:w-1/3 border-r">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Messages</h3>
        </div>
        
        <div className="overflow-y-auto h-[calc(600px-60px)]">
          {conversations.map(conversation => (
            <div 
              key={conversation.id}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${activeConversation === conversation.id ? 'bg-gray-50' : ''}`}
              onClick={() => setActiveConversation(conversation.id)}
            >
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarImage src={conversation.avatar} alt={conversation.name} />
                  <AvatarFallback>{getInitials(conversation.name)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium truncate">{conversation.name}</h4>
                    <span className="text-xs text-gray-500">{conversation.lastMessageTime}</span>
                  </div>
                  <p className="text-xs text-gray-500">{conversation.role}</p>
                  <p className="text-sm truncate">{conversation.lastMessage}</p>
                </div>
                
                {conversation.unreadCount > 0 && (
                  <span className="bg-pharma-blue text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {conversation.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Message Area */}
      <div className="hidden md:flex flex-col flex-1">
        {activeConversation ? (
          <>
            {/* Conversation Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage 
                    src={conversations.find(c => c.id === activeConversation)?.avatar} 
                    alt={conversations.find(c => c.id === activeConversation)?.name} 
                  />
                  <AvatarFallback>
                    {getInitials(conversations.find(c => c.id === activeConversation)?.name || "")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">
                    {conversations.find(c => c.id === activeConversation)?.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {conversations.find(c => c.id === activeConversation)?.role}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messagesByConversation[activeConversation]?.map(message => (
                <div 
                  key={message.id}
                  className={`flex ${message.senderType === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${
                    message.senderType === 'user' 
                      ? 'bg-pharma-blue text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
                      : 'bg-gray-100 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                  } p-3`}>
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.senderType === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Textarea 
                  placeholder="Type your message..." 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="resize-none"
                  rows={2}
                />
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5 text-gray-500" />
                  </Button>
                  <Button size="icon" onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Select a conversation</p>
          </div>
        )}
      </div>
      
      {/* Mobile view message instruction */}
      <div className="flex md:hidden flex-1 items-center justify-center">
        <p className="text-gray-500 p-4 text-center">
          Please select a conversation to view messages.
        </p>
      </div>
    </div>
  );
};

export default MessagingCenter;
