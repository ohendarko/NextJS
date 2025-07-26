'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Module } from '@/lib/types'
import { useAdmin } from '@/context/AdminContext'
import { Label } from './ui/label'
import { toast } from '@/hooks/use-toast'


export default function EditModuleDialog({
  open,
  onOpenChange,
  modules,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  modules: Module[]
}) {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const [editedModule, setEditedModule] = useState<Module | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const { updateModule} = useAdmin()

  const handleSelect = (mod: Module) => {
    setSelectedModule(mod)
    setEditedModule({ ...mod })
  }

  const handleChange = (field: keyof Module, value: any) => {
    if (editedModule) {
      setEditedModule({ ...editedModule, [field]: value })
    }
  }

  const handleSubmit = async () => {

    if (!editedModule) return
    try {
      setSubmitting(true)
      await updateModule(editedModule.id, editedModule) // handle PUT logic in backend
      // onOpenChange(false)
      toast({
        title: "Complete",
        description: "Module Edited Successfully",
        variant: 'success'
      });
      setSelectedModule(null)
      setEditedModule(null)
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleCancel = () => {
    setSelectedModule(null)
    setEditedModule(null)
  }

  return (
    <Dialog open={open} onOpenChange={(open) => { onOpenChange(open); handleCancel(); }}>
      <DialogContent className="max-w-4xl max-h-screen  overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Edit Module</DialogTitle>
          <DialogDescription>
            Click a module to begin editing.
          </DialogDescription>
        </DialogHeader>

        {!selectedModule ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {modules.map((mod) => (
              <Button
                key={mod.id}
                variant="outline"
                onClick={() => handleSelect(mod)}
              >
                {mod.module}
              </Button>
            ))}
          </div>
        ) : editedModule && (
          <Tabs defaultValue="basic" className="w-full mt-4">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="intro">Intro</TabsTrigger>
              <TabsTrigger value="sections">Sections</TabsTrigger>
              <TabsTrigger value="tests">Tests</TabsTrigger>
            </TabsList>

            {/* Basic Info */}
            <TabsContent value="basic">
              <div className="grid gap-4">
                <Input
                  value={editedModule.module}
                  onChange={(e) => handleChange('module', e.target.value)}
                  disabled
                  placeholder="module-1"
                />
                <Label htmlFor={editedModule.title}>Title</Label>
                <Input
                  value={editedModule.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Title"
                />

                  <Label htmlFor={editedModule.description}>Description</Label>
                <Textarea
                  value={editedModule.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Description"
                />
                <Label htmlFor={editedModule.icon}>Icon</Label>
                <Input
                  value={editedModule.icon}
                  onChange={(e) => handleChange('icon', e.target.value)}
                  placeholder="Icon (e.g., BookOpen)"
                />
                <Label>Order</Label>
                <Input
                  type="number"
                  value={editedModule.order}
                  onChange={(e) => handleChange('order', parseInt(e.target.value))}
                  placeholder="Order"
                  disabled
                />
              </div>
            </TabsContent>

            {/* Intro Video */}
            <TabsContent value="intro">
              <Input
                value={editedModule.introVideo}
                onChange={(e) => handleChange('introVideo', e.target.value)}
                placeholder="Intro Video URL"
              />
            </TabsContent>

            {/* Sections */}
            <TabsContent value="sections">
              <Textarea
                value={JSON.stringify(editedModule.sections, null, 2)}
                onChange={(e) => handleChange('sections', JSON.parse(e.target.value))}
                rows={8}
                className="font-mono text-xs"
              />
            </TabsContent>

            {/* Pre/Post Tests */}
            <TabsContent value="tests">
              <div className="grid gap-4">
                <Textarea
                  value={JSON.stringify(editedModule.preTest, null, 2)}
                  onChange={(e) => handleChange('preTest', JSON.parse(e.target.value))}
                  placeholder="Pre-Test JSON"
                  rows={5}
                  className="font-mono text-xs"
                />
                <Textarea
                  value={JSON.stringify(editedModule.postTest, null, 2)}
                  onChange={(e) => handleChange('postTest', JSON.parse(e.target.value))}
                  placeholder="Post-Test JSON"
                  rows={5}
                  className="font-mono text-xs"
                />
              </div>
            </TabsContent>
          </Tabs>
        )}

        {selectedModule && (
          <DialogFooter className="mt-6">
            <Button onClick={handleCancel} variant="ghost">
              Cancel
            </Button>
            <Button disabled={submitting} onClick={handleSubmit}>
              {submitting ? "Saving" : "Save Changes"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
