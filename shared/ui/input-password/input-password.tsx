import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { EyeOffIcon, EyeIcon } from "lucide-react"

interface InputPasswordProps {
    id: string;
    label: string;
    description?: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

export function InputPassword({ id, label, description, placeholder, required, className }: InputPasswordProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handleTogglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <Field className={`${className}`}>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <InputGroup>
                <InputGroupInput
                    id={id}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={placeholder}
                    required={required}
                />
                <InputGroupAddon onClick={handleTogglePasswordVisibility} align="inline-end">
                    {isPasswordVisible ? <EyeIcon /> : <EyeOffIcon />}
                </InputGroupAddon>
            </InputGroup>
            {description && <FieldDescription>{description}</FieldDescription>}
        </Field>
    )
}
