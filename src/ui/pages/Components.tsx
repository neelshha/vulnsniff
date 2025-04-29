import { ReactNode, useState } from 'react';
import { Code, Layout, Palette, Zap, ChevronRight } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Card } from '../../components/Card/Card';
import { Badge } from '../../components/Badge/Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/Avatar/Avatar';
import { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from '../../components/Dialog/Dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/Tabs/Tabs';
import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../../components/Select/Select';
import { 
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from '../../components/Tooltip/Tooltip';
import { Progress } from '../../components/Progress/Progress';
import { Switch } from '../../components/Switch/Switch';
import { Slider } from '../../components/Slider/Slider';
import { RadioGroup, RadioGroupItem } from '../../components/Radio/Radio';
import { Toast, ToastTitle, ToastDescription } from '../../components/Toast/Toast';
import { 
  Popover,
  PopoverTrigger,
  PopoverContent
} from '../../components/Popover/Popover';
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '../../components/HoverCard/HoverCard';
import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
} from '../../components/Drawer/Drawer';

type Component = {
  name: string;
  description: string;
  preview: ReactNode;
  code: string;
};

const components: Record<string, Component[]> = {
  Basic: [
    {
      name: 'Button',
      description: 'A versatile button component with multiple variants and sizes.',
      preview: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="default">Default Size</Button>
            <Button size="sm">Small Button</Button>
            <Button size="lg">Large Button</Button>
            <Button size="icon">🔍</Button>
          </div>
        </div>
      ),
      code: `import { Button } from 'nil-ui';

// Variants
<Button variant="default">Default Button</Button>
<Button variant="destructive">Destructive Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="link">Link Button</Button>

// Sizes
<Button size="default">Default Size</Button>
<Button size="sm">Small Button</Button>
<Button size="lg">Large Button</Button>
<Button size="icon">🔍</Button>`
    },
    {
      name: 'Input',
      description: 'A clean and modern input field with support for different states.',
      preview: (
        <div className="space-y-4">
          <Input placeholder="Default Input" />
          <Input placeholder="Disabled Input" disabled />
          <Input type="password" placeholder="Password Input" />
        </div>
      ),
      code: `import { Input } from 'nil-ui';

// Default
<Input placeholder="Default Input" />

// Disabled State
<Input placeholder="Disabled Input" disabled />

// Password Input
<Input type="password" placeholder="Password Input" />`
    },
    {
      name: 'Checkbox',
      description: 'A modern checkbox component with support for different states.',
      preview: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Checkbox id="default" />
            <label htmlFor="default">Default Checkbox</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <label htmlFor="disabled">Disabled Checkbox</label>
          </div>
        </div>
      ),
      code: `import { Checkbox } from 'nil-ui';

// Default
<div className="flex items-center gap-2">
  <Checkbox id="default" />
  <label htmlFor="default">Default Checkbox</label>
</div>

// Disabled State
<div className="flex items-center gap-2">
  <Checkbox id="disabled" disabled />
  <label htmlFor="disabled">Disabled Checkbox</label>
</div>`
    },
    {
      name: 'Switch',
      description: 'A toggle switch component for boolean values.',
      preview: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Switch id="default" />
            <label htmlFor="default">Default Switch</label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled" disabled />
            <label htmlFor="disabled">Disabled Switch</label>
          </div>
        </div>
      ),
      code: `import { Switch } from 'nil-ui';

// Default
<div className="flex items-center gap-2">
  <Switch id="default" />
  <label htmlFor="default">Default Switch</label>
</div>

// Disabled State
<div className="flex items-center gap-2">
  <Switch id="disabled" disabled />
  <label htmlFor="disabled">Disabled Switch</label>
</div>`
    },
    {
      name: 'Radio',
      description: 'A radio button component for single selection.',
      preview: (
        <div className="space-y-4">
          <RadioGroup defaultValue="option1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="option1" />
              <label htmlFor="option1">Option 1</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="option2" />
              <label htmlFor="option2">Option 2</label>
            </div>
          </RadioGroup>
        </div>
      ),
      code: `import { RadioGroup, RadioGroupItem } from 'nil-ui';

<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="option1" />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="option2" />
    <label htmlFor="option2">Option 2</label>
  </div>
</RadioGroup>`
    },
    {
      name: 'Select',
      description: 'A dropdown select component for choosing from multiple options.',
      preview: (
        <div className="space-y-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
      code: `import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from 'nil-ui';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`
    }
  ],
  Layout: [
    {
      name: 'Card',
      description: 'A flexible container component for grouping related content.',
      preview: (
        <Card className="w-[350px]">
          <div className="p-6">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-sm text-muted-foreground">Card content goes here.</p>
          </div>
        </Card>
      ),
      code: `import { Card } from 'nil-ui';

<Card className="w-[350px]">
  <div className="p-6">
    <h3 className="text-lg font-semibold">Card Title</h3>
    <p className="text-sm text-muted-foreground">Card content goes here.</p>
  </div>
</Card>`
    },
    {
      name: 'Dialog',
      description: 'A modal dialog component for displaying content in a layer above the app.',
      preview: (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a dialog description.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p>Dialog content goes here.</p>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `import { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from 'nil-ui';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a dialog description.
      </DialogDescription>
    </DialogHeader>
    <div className="mt-4">
      <p>Dialog content goes here.</p>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      name: 'Drawer',
      description: 'A sliding panel component that appears from the edge of the screen.',
      preview: (
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>
                This is a drawer description.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p>Drawer content goes here.</p>
            </div>
            <DrawerFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
} from 'nil-ui';

<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>
        This is a drawer description.
      </DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <p>Drawer content goes here.</p>
    </div>
    <DrawerFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`
    }
  ],
  Navigation: [
    {
      name: 'Tabs',
      description: 'A set of layered sections of content.',
      preview: (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <p className="text-sm">Make changes to your account here.</p>
          </TabsContent>
          <TabsContent value="password">
            <p className="text-sm">Change your password here.</p>
          </TabsContent>
        </Tabs>
      ),
      code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from 'nil-ui';

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p className="text-sm">Make changes to your account here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p className="text-sm">Change your password here.</p>
  </TabsContent>
</Tabs>`
    }
  ],
  Feedback: [
    {
      name: 'Toast',
      description: 'A brief message that appears temporarily.',
      preview: (
        <div className="space-y-4">
          <Toast>
            <ToastTitle>Success!</ToastTitle>
            <ToastDescription>Your changes have been saved.</ToastDescription>
          </Toast>
        </div>
      ),
      code: `import { Toast, ToastTitle, ToastDescription } from 'nil-ui';

<Toast>
  <ToastTitle>Success!</ToastTitle>
  <ToastDescription>Your changes have been saved.</ToastDescription>
</Toast>`
    },
    {
      name: 'Tooltip',
      description: 'A floating label that briefly explains the purpose of a UI element.',
      preview: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      code: `import { 
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from 'nil-ui';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`
    },
    {
      name: 'Popover',
      description: 'A floating panel that appears when clicking on a trigger element.',
      preview: (
        <Popover>
          <PopoverTrigger asChild>
            <Button>Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <p>Popover content goes here.</p>
            </div>
          </PopoverContent>
        </Popover>
      ),
      code: `import { 
  Popover,
  PopoverTrigger,
  PopoverContent
} from 'nil-ui';

<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="p-4">
      <p>Popover content goes here.</p>
    </div>
  </PopoverContent>
</Popover>`
    },
    {
      name: 'HoverCard',
      description: 'A card that appears when hovering over a trigger element.',
      preview: (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button>Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="p-4">
              <p>Hover card content goes here.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ),
      code: `import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from 'nil-ui';

<HoverCard>
  <HoverCardTrigger asChild>
    <Button>Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="p-4">
      <p>Hover card content goes here.</p>
    </div>
  </HoverCardContent>
</HoverCard>`
    },
    {
      name: 'Progress',
      description: 'A progress indicator component for showing completion status.',
      preview: (
        <div className="space-y-4">
          <Progress value={33} />
          <Progress value={66} />
          <Progress value={100} />
        </div>
      ),
      code: `import { Progress } from 'nil-ui';

<Progress value={33} />
<Progress value={66} />
<Progress value={100} />`
    },
    {
      name: 'Badge',
      description: 'A small status indicator for highlighting information.',
      preview: (
        <div className="space-y-4">
          <Badge>Default Badge</Badge>
          <Badge variant="secondary">Secondary Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>
        </div>
      ),
      code: `import { Badge } from 'nil-ui';

<Badge>Default Badge</Badge>
<Badge variant="secondary">Secondary Badge</Badge>
<Badge variant="destructive">Destructive Badge</Badge>`
    },
    {
      name: 'Avatar',
      description: 'A circular image component for user profiles.',
      preview: (
        <div className="space-y-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: `import { Avatar, AvatarImage, AvatarFallback } from 'nil-ui';

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`
    }
  ]
};

const categories = [
  {
    name: 'Basic',
    components: components.Basic,
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: 'Layout',
    components: components.Layout,
    icon: <Layout className="h-5 w-5" />,
  },
  {
    name: 'Navigation',
    components: components.Navigation,
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: 'Feedback',
    components: components.Feedback,
    icon: <Palette className="h-5 w-5" />,
  },
];

export default function Components() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedComponent, setSelectedComponent] = useState(categories[0].components[0]);

  return (
    <div className="relative min-h-screen bg-neutral-200 dark:bg-[#000000]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 fixed inset-y-0 left-0 bg-neutral-200 dark:bg-[#000000] border-r border-neutral-300 dark:border-neutral-700">
          <div className="h-full overflow-y-auto pt-20 pb-4">
            <div className="px-4">
              <h2 className="text-lg font-semibold text-[#000000] dark:text-neutral-200 mb-4">Categories</h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <div key={category.name}>
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        setSelectedComponent(category.components[0]);
                      }}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        selectedCategory.name === category.name
                          ? 'bg-[#000000]/10 text-[#000000] dark:bg-neutral-200/10 dark:text-neutral-200'
                          : 'text-[#000000] hover:bg-[#000000]/5 dark:text-neutral-200 dark:hover:bg-neutral-200/5'
                      }`}
                    >
                      <span className="flex-shrink-0 -ml-1 mr-3 text-neutral-500 dark:text-neutral-400">
                        {category.icon}
                      </span>
                      <span className="truncate">{category.name}</span>
                    </button>
                    {selectedCategory.name === category.name && (
                      <div className="mt-1 space-y-1 pl-8">
                        {category.components.map((component) => (
                          <button
                            key={component.name}
                            onClick={() => setSelectedComponent(component)}
                            className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                              selectedComponent.name === component.name
                                ? 'bg-[#000000]/10 text-[#000000] dark:bg-neutral-200/10 dark:text-neutral-200'
                                : 'text-[#000000]/80 hover:bg-[#000000]/5 dark:text-neutral-200/80 dark:hover:bg-neutral-200/5'
                            }`}
                          >
                            <ChevronRight className="h-4 w-4 mr-2" />
                            {component.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 pl-64">
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-200 dark:bg-[#000000] rounded-lg shadow-sm border border-neutral-300 dark:border-neutral-700 p-6">
                <h1 className="text-2xl font-bold text-[#000000] dark:text-neutral-200 mb-2">
                  {selectedComponent.name}
                </h1>
                <p className="text-[#000000]/80 dark:text-neutral-200/80 mb-6">
                  {selectedComponent.description}
                </p>
                
                {/* Component Preview */}
                <div className="bg-neutral-100 dark:bg-[#000000] border border-neutral-300 dark:border-neutral-700 rounded-lg p-6 mb-6">
                  <h2 className="text-lg font-medium text-[#000000] dark:text-neutral-200 mb-4">
                    Preview
                  </h2>
                  <div className="space-y-4">
                    {selectedComponent.preview || (
                      <div className="p-4 bg-neutral-200 dark:bg-[#000000] rounded border border-neutral-300 dark:border-neutral-700">
                        Component preview will be displayed here
                      </div>
                    )}
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-neutral-100 dark:bg-[#000000] border border-neutral-300 dark:border-neutral-700 rounded-lg p-6">
                  <h2 className="text-lg font-medium text-[#000000] dark:text-neutral-200 mb-4">
                    Code Example
                  </h2>
                  <pre className="bg-[#000000] text-neutral-200 p-4 rounded-lg overflow-x-auto">
                    <code>
                      {selectedComponent.code || `// Example usage of ${selectedComponent.name}
import { ${selectedComponent.name} } from 'nil-ui';

function Example() {
  return (
    <${selectedComponent.name} />
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 