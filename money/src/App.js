import { useState } from "react";
import "./App.css";
import { Button } from "@chakra-ui/react";
import { Portal, Select, createListCollection } from "@chakra-ui/react";

function App() {
    const [count, setCount] = useState(0);

    const frameworks = createListCollection({
        items: [
            { label: "React.js", value: "react" },
            { label: "Vue.js", value: "vue" },
            { label: "Angular", value: "angular" },
            { label: "Svelte", value: "svelte" },
        ],
    });
    return (
        <div className="Mpp">
            <header className="Mpp-header text-lg">header</header>
            <div className="Mpp-body">
                <Button onClick={() => setCount(count + 1)}>Button</Button>

                <Select.Root collection={frameworks} size="sm" width="320px">
                    <Select.HiddenSelect />
                    <Select.Label>Select framework</Select.Label>
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select framework" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {frameworks.items.map((framework) => (
                                    <Select.Item item={framework} key={framework.value}>
                                        {framework.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
                {count}
            </div>
            <footer className="Mpp-footer">footer</footer>
        </div>
    );
}

export default App;
