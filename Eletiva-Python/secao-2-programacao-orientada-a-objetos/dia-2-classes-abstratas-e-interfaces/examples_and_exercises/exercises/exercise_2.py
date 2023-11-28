class Customer:
    def __init__(self, name: str, phone: str) -> None:
        self.name = name
        self.phone = phone


class Address:
    def __init__(
            self,
            street: str,
            number: int,
            city: str,
            state: str
            ) -> None:
        self.street = street
        self.number = number
        self.city = city
        self.state = state


class Deliverable:
    def delivery(self, customer: Customer, address: Address):
        pass


class Mail(Deliverable):
    def delivery(self, customer: Customer, address: Address):
        return (
            f"O pacote para {customer.name}, Telefone: {customer.phone} "
            + "foi entregue com sucesso"
            + f" no endereco: {address.street}, Número: {address.number}"
            + f", Cidade: {address.city}, Estado: {address.state}"
        )


class ShippingCompany(Deliverable):
    def delivery(self, customer: Customer, address: Address):
        return (
            f"A carga para {customer.name}, Telefone: {customer.phone} "
            + "foi entregue com sucesso"
            + f" no endereco: {address.street}, Número: {address.number}"
            + f", Cidade: {address.city}, Estado: {address.state}"
        )


def main():
    mail = Mail()
    shipping = ShippingCompany()
    customer = Customer("Rick", "67-95176-4954")
    address = Address("rua batata", 121, "Batata city", "Batatopolis")
    print(mail.delivery(customer, address))
    print(shipping.delivery(customer, address))


if __name__ == "__main__":
    main()
