class Teacher {
    private _firstName: string;
    private _lastName: string;
    public fullTimeEmployee: boolean;
    public yearsOfExperience?: number;
    public location: string;

    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string,
        yearsOfExperience?: number
    ) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    // Add any other attribute to the object
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director: Directors = {
    _firstName: 'Jane',
    _lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'San Francisco',
    numberOfReports: 10
};

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


// students class

interface StudentConstructor {
    new(firstName: string, lastName: string): Student;
}

interface Student {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    constructor(private firstName: string, private lastName: string) { }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}