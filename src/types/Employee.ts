// Interface for employee data

export interface EmployeeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  address: string;
}

// Interface for action button properties

export interface ActionButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  variant: 'default' | 'danger';
}
