import os
from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

'''
setup_db(app)
    binds a flask application and a SQLAlchemy service
'''


def setup_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL')
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db_drop_and_create_all()


origins = db.Table('origins',
                   db.Column('origin_id', db.Integer, db.ForeignKey('country.id')),
                   db.Column('destination_id', db.Integer, db.ForeignKey('country.id'))
                   )


class Country(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    alias = db.Column(db.String(10))
    destinations = db.relationship('Country',
                                   secondary=origins,
                                   primaryjoin=(origins.c.origin_id == id),
                                   secondaryjoin=(origins.c.destination_id == id),
                                   backref=db.backref('origins', lazy='dynamic'),
                                   lazy='dynamic')
    users = db.relationship('User', backref='country')

    def __init__(self, id, name, alias):
        self.id = id
        self.name = name
        self.alias = alias  # TODO change to country code

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def add_destination(self, destination):
        if destination not in self.destinations:
            self.destinations.append(destination)
            db.session.commit()

    '''
        update()
            updates a new model into a database
            the model must exist in the database
    '''

    def update(self):
        db.session.commit()

    def short(self):
        return {
            'id': self.id,
            'name': self.name,
            'alias': self.alias,
        }

    def long(self):
        return {
            'id': self.id,
            'name': self.name,
            'alias': self.alias,
            'destinations': [destination.short() for destination in self.destinations],
        }

    def __repr__(self):
        return f'<Country {self.id} {self.name} {self.alias}>'


class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.String(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(80))
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'))

    def __init__(self, user_id, name, email, country_id):
        self.user_id = user_id
        self.name = name
        self.email = email
        self.country_id = country_id

    def insert(self):
        db.session.add(self)
        db.session.commit()

    '''
        update()
            updates a new model into a database
            the model must exist in the database
    '''

    def update(self):
        db.session.commit()

    def short(self):
        return {
            'id': self.user_id,
            'name': self.name,
            'email': self.email,
            'country_id': self.country_id,
        }

    def __repr__(self):
        return f'<User {self.id} {self.name} {self.email} {self.country_id}>'


'''
db_drop_and_create_all()
    drops the database tables and starts fresh
    can be used to initialize a clean database
    !!NOTE you can change the database_filename variable to have multiple verisons of a database
'''


def db_drop_and_create_all():
    # db.drop_all()
    db.create_all()
