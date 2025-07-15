# Doctor Portal Navigation

This directory contains the Doctor Portal application with navigation functionality.

## Navigation Structure

The Doctor Portal uses React Router for navigation with the following structure:

- `/doctor-portal` - Main portal entry point (redirects to dashboard)
- `/doctor-portal/dashboard` - Dashboard with overview and schedule
- `/doctor-portal/calendar` - Full calendar view
- `/doctor-portal/patients` - Patient management
- `/doctor-portal/staff` - Staff schedule management
- `/doctor-portal/doctors` - Doctor management
- `/doctor-portal/departments` - Department management
- `/doctor-portal/settings` - User settings
- `/doctor-portal/help` - Help center

## Components

- `DoctorPortal.tsx` - Main portal component with routing
- `Sidebar.tsx` - Navigation sidebar component
- `pages/` - Individual page components for each section

## Features

- ✅ Navigation between different sections
- ✅ Active state highlighting in sidebar
- ✅ Logout functionality
- ✅ Responsive design
- ✅ Nested routing structure

## Usage

The sidebar automatically highlights the current page and allows navigation between different sections. The logout button redirects to the sign-in page. 