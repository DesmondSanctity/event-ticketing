import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Icon,
    Button,
    useColorModeValue,
    useDisclosure,
    useToast
} from '@chakra-ui/react'


const CreateModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [company, setCompany] = useState('')
    const [jobtitle, setJobTitle] = useState('')

    // Instance of toast
    const toast = useToast()

    // Button bgColor color
    const bgColor = useColorModeValue("pink.400", "pink.500");

    const handleSubmit = async () => {
        // Handling empty input error
        if (firstname == '' || lastname == '' || email == '') {
            toast({
                title: 'Empty Fields.',
                description: "All or some inputs are empty.",
                status: 'warning',
                duration: 5000,
                position: 'top',
                isClosable: true,
            })
        } else {
            // Generate ticket id using
            const ticketid = '';


            //Generate social card
            const socialImage = generateSocialImage({
                firstname: firstname,
                lastname: lastname,
                ticketid: ticketid,
                country: country,
                company: company,
                email: email,
                jobtitle: jobtitle,
                cloudName: 'dqwrnan7f',
                imagePublicID: 'dex/example-black_iifqhm',
            });
            console.log(socialImage);

            //Make add create request
            let ticket = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                country: country,
                company: company,
                ticketid: ticketid,
                imageurl: socialImage,
                jobtitle: jobtitle,
                iscoming: true
            }

            const response = await fetch('/api/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ticket)
            })

            if (response.ok) {
                toast.success("post created successfully", {
                    theme: "dark",
                    autoClose: 8000
                })
                window?.location.replace('/share')
            }
        }

    }

    return (
        <>
            <Button onClick={onOpen}
                as="a"
                borderRadius="2xl"
                variant="solid"
                bg={bgColor}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                cursor="pointer">
                Get Started
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </Icon>
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                size={'3xl'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Register for the event</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder='First Name' onChange={e => { setFirstName(e.target.value) }} required />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Last Name' onChange={e => { setLastName(e.target.value) }} required />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email Address</FormLabel>
                            <Input placeholder='Email Address' onChange={e => { setEmail(e.target.value) }} required />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Country</FormLabel>
                            <Input placeholder='Country' onChange={e => { setCountry(e.target.value) }} required />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Company</FormLabel>
                            <Input placeholder='Company' onChange={e => { setCompany(e.target.value) }} required />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Job Title</FormLabel>
                            <Input placeholder='Job Title' onChange={e => { setJobTitle(e.target.value) }} required />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default CreateModal