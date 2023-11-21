from faker import Faker


faker = Faker(locale="es_AR")

print(faker.last_name())
print(faker.email())
print(faker.password())
print(faker.url())
print(faker.license_plate())


# faker.name(): cria um nome falso
# faker.email(): cria um e-mail falso;
# faker.password(): cria uma senha falsa;
# faker.address(): cria um endereço falso;
# faker.credit_card_number(): cria um número de cartão de crédito falso;
# faker.phone_number(): cria um número de telefone falso;
# faker.company(): cria um nome de empresa falso;
# faker.date(): cria uma data falsa;
# faker.cpf(): cria um CPF falso.
