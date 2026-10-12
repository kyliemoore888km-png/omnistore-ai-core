from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from models import UserRole, SubscriptionTier, OrderStatus


class UserBase(BaseModel):
    email: EmailStr
    full_name: str


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    email: Optional[EmailStr] = None


class UserResponse(UserBase):
    id: str
    role: UserRole
    team_id: Optional[str]
    is_active: bool
    mfa_enabled: bool
    created_at: datetime

    class Config:
        from_attributes = True


class TeamBase(BaseModel):
    name: str
    slug: str


class TeamCreate(TeamBase):
    pass


class TeamResponse(TeamBase):
    id: str
    subscription_tier: SubscriptionTier
    max_users: int
    max_stores: int
    created_at: datetime

    class Config:
        from_attributes = True


class StoreBase(BaseModel):
    name: str
    platform: str


class StoreCreate(StoreBase):
    api_key: str
    api_secret: str


class StoreResponse(StoreBase):
    id: str
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True


class ProductBase(BaseModel):
    sku: str
    name: str
    description: Optional[str]
    price: float
    cost: float
    stock_quantity: int
    reorder_level: int


class ProductCreate(ProductBase):
    pass


class ProductResponse(ProductBase):
    id: str
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True


class OrderItemBase(BaseModel):
    product_id: str
    quantity: int
    price: float


class OrderBase(BaseModel):
    customer_email: str
    customer_name: str
    total_amount: float
    shipping_address: str


class OrderCreate(OrderBase):
    items: List[OrderItemBase]


class OrderResponse(OrderBase):
    id: str
    order_number: str
    status: OrderStatus
    created_at: datetime

    class Config:
        from_attributes = True


class SubscriptionResponse(BaseModel):
    id: str
    tier: SubscriptionTier
    status: str
    monthly_cost: float
    renewal_date: Optional[datetime]

    class Config:
        from_attributes = True


class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    mfa_code: Optional[str] = None


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str
    user: UserResponse
