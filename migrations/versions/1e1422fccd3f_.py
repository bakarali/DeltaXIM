"""empty message

Revision ID: 1e1422fccd3f
Revises: f926ace60b35
Create Date: 2018-07-02 21:53:18.008529

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1e1422fccd3f'
down_revision = 'f926ace60b35'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('producer', sa.Column('poster', sa.String(), nullable=True))
    op.create_index(op.f('ix_producer_poster'), 'producer', ['poster'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_producer_poster'), table_name='producer')
    op.drop_column('producer', 'poster')
    # ### end Alembic commands ###
