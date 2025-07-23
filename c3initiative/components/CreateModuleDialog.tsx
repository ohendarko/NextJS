import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/context/AdminContext';
// import { Module, Section, LearningCard, PostTest } from '@/types/admin';
import { Plus, Trash2, Save } from 'lucide-react';
import { toast } from 'sonner';
import { Module, Section, PreTest, PostTest, LearningCard, Question, newModule } from '@/lib/types';

interface CreateModuleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateModuleDialog({ open, onOpenChange }: CreateModuleDialogProps) {
  const { addModule } = useAdmin();
  const [loading, setLoading] = useState(false);
  
  const [moduleData, setModuleData] = useState<newModule>({
    module: '',
    completed: false,
    unlocked: false,
    icon: 'BookOpen',
    title: '',
    description: '',
    order: 1,
    introVideo: '',
    sections: [],
    preTest: {
      name: '',
      questions: []
    },
    postTest: {
      name: '',
      questions: []
    }
  });


  const [sections, setSections] = useState<Section[]>([]);
  const [postTests, setPostTests] = useState<PostTest[]>([]);

  const addSection = () => {
    const newSection: Section = {
      name: `section-${moduleData.sections.length + 1}`,
      title: '',
      description: '',
      order: moduleData.sections.length + 1,
      learningCards: [],
      quizzes: []
    };
    setModuleData(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
  };


  const updateSection = <K extends keyof Section>(index: number, field: K, value: Section[K]) => {
    const newSections = [...moduleData.sections];
    newSections[index][field] = value;
    setModuleData(prev => ({ ...prev, sections: newSections }));
  };


  const removeSection = (index: number) => {
    setSections(prev => prev.filter((_, i) => i !== index));
  };

  const addLearningCard = (sectionIndex: number) => {
    const newCard: LearningCard = {
      name: `section-${sectionIndex + 1}-card-${moduleData.sections[sectionIndex].learningCards.length + 1}`,
      title: '',
      content: '',
      infographic: '/images/placeholder.svg',
      order: moduleData.sections[sectionIndex].learningCards.length + 1
    };

    const updatedSections = [...moduleData.sections];
    updatedSections[sectionIndex].learningCards.push(newCard);
    setModuleData(prev => ({ ...prev, sections: updatedSections }));
  };

  const updateLearningCard = (sectionIndex: number, cardIndex: number, field: string, value: string) => {
    setSections(prev => prev.map((section, i) => 
      i === sectionIndex ? {
        ...section,
        learningCards: section.learningCards.map((card, j) => 
          j === cardIndex ? { ...card, [field]: value } : card
        )
      } : section
    ));
  };

  const removeLearningCard = (sectionIndex: number, cardIndex: number) => {
    setSections(prev => prev.map((section, i) => 
      i === sectionIndex ? {
        ...section,
        learningCards: section.learningCards.filter((_, j) => j !== cardIndex)
      } : section
    ));
  };

  const addPostTest = () => {
    const newQuestion: Question = {
      order: moduleData.postTest.questions.length + 1,
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      explanation: ''
    };

    setModuleData(prev => ({
      ...prev,
      postTest: {
        ...prev.postTest,
        questions: [...prev.postTest.questions, newQuestion]
      }
    }));
  };


  const updatePostTest = (
    testIndex: number,
    field: keyof Question,
    value: string | string[],
    questionIndex: number
  ) => {
    setPostTests((prev) => {
      const updated = [...prev];
      (updated[testIndex].questions[questionIndex][field] as any) = value;
      return updated;
    });
  };


  const removePostTest = (index: number) => {
    setPostTests(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!moduleData.title || !moduleData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      await addModule(moduleData);
      toast.success('Module created successfully!');
      onOpenChange(false);
      setModuleData({
    module: '',
    completed: false,
    unlocked: false,
    icon: 'BookOpen',
    title: '',
    description: '',
    order: 1,
    introVideo: '',
    sections: [],
    preTest: {
      name: '',
      questions: []
    },
    postTest: {
      name: '',
      questions: []
    }
  });
    } catch (error) {
      toast.error('Failed to create module');
    } finally {
      setLoading(false);
    }
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Learning Module</DialogTitle>
          <DialogDescription>
            Fill in the details to create a comprehensive learning module.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Module Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="module">Module ID</Label>
              <Input
                id="module"
                value={moduleData.module}
                onChange={(e) => setModuleData(prev => ({ ...prev, module: e.target.value }))}
                placeholder="module-1"
              />
            </div>
            <div>
              <Label htmlFor="icon">Icon</Label>
              <Input
                id="icon"
                value={moduleData.icon}
                onChange={(e) => setModuleData(prev => ({ ...prev, icon: e.target.value }))}
                placeholder="BookOpen"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={moduleData.title}
              onChange={(e) => setModuleData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Module Title"
            />
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={moduleData.description}
              onChange={(e) => setModuleData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Module description..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="order">Order</Label>
              <Input
                id="order"
                type="number"
                value={moduleData.order}
                onChange={(e) => setModuleData(prev => ({ ...prev, order: parseInt(e.target.value) }))}
              />
            </div>
            <div>
              <Label htmlFor="introVideo">Intro Video URL</Label>
              <Input
                id="introVideo"
                value={moduleData.introVideo}
                onChange={(e) => setModuleData(prev => ({ ...prev, introVideo: e.target.value }))}
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Sections */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Sections</h3>
              <Button onClick={addSection} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Section
              </Button>
            </div>

            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Section {sectionIndex + 1}</h4>
                  <Button
                    onClick={() => removeSection(sectionIndex)}
                    size="sm"
                    variant="destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label>Section Title</Label>
                    <Input
                      value={section.title}
                      onChange={(e) => updateSection(sectionIndex, 'title', e.target.value)}
                      placeholder="Section title"
                    />
                  </div>
                  <div>
                    <Label>Order</Label>
                    <Input
                      type="number"
                      value={section.order}
                      onChange={(e) => updateSection(sectionIndex, 'order', parseInt(e.target.value))}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <Label>Description</Label>
                  <Textarea
                    value={section.description}
                    onChange={(e) => updateSection(sectionIndex, 'description', e.target.value)}
                    placeholder="Section description"
                    rows={2}
                  />
                </div>

                {/* Learning Cards */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label>Learning Cards</Label>
                    <Button
                      onClick={() => addLearningCard(sectionIndex)}
                      size="sm"
                      variant="outline"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Card
                    </Button>
                  </div>

                  {section.learningCards.map((card, cardIndex) => (
                    <div key={cardIndex} className="border-l-2 border-blue-200 pl-4 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Card {cardIndex + 1}</span>
                        <Button
                          onClick={() => removeLearningCard(sectionIndex, cardIndex)}
                          size="sm"
                          variant="ghost"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="grid gap-2">
                        <Input
                          value={card.title}
                          onChange={(e) => updateLearningCard(sectionIndex, cardIndex, 'title', e.target.value)}
                          placeholder="Card title"
                          className="text-sm"
                        />
                        <Textarea
                          value={card.content}
                          onChange={(e) => updateLearningCard(sectionIndex, cardIndex, 'content', e.target.value)}
                          placeholder="Card content"
                          rows={2}
                          className="text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Post Tests */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Post Tests</h3>
              <Button onClick={addPostTest} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Question
              </Button>
            </div>

            {postTests.map((test, testIndex) => (
              <div key={testIndex} className="border rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Question {testIndex + 1}</h4>
                  <Button
                    onClick={() => removePostTest(testIndex)}
                    size="sm"
                    variant="destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mb-4">
                  <Label>Question</Label>
                  <Input
                    value={test.questions[0]?.question || ""}
                    onChange={(e) => updatePostTest(testIndex, 'question', e.target.value, 0)}
                    placeholder="Enter question"
                  />
                </div>

                <div className="mb-4">
                  <Label>Answer Options</Label>
                  {test.questions[0]?.options.map((option, optionIndex) => (
                    <Input
                      key={optionIndex}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...test.questions[0] ?.options];
                        newOptions[optionIndex] = e.target.value;
                        updatePostTest(testIndex, 'options', newOptions, 0);
                      }}
                      placeholder={`Option ${optionIndex + 1}`}
                      className="mb-2"
                    />
                  ))}
                </div>

                <div>
                  <Label>Correct Answer</Label>
                  <Input
                    value={test.questions[0]?.correctAnswer}
                    onChange={(e) => updatePostTest(testIndex, 'correctAnswer', e.target.value, 0)}
                    placeholder="Enter correct answer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button onClick={() => onOpenChange(false)} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={loading}>
            <Save className="h-4 w-4 mr-2" />
            {loading ? 'Creating...' : 'Create Module'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
