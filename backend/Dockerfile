# Use official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory to /code
WORKDIR /code

# Install system dependencies required for OpenCV
# libgl1-mesa-glx and libglib2.0-0 are needed for cv2 to work in slim containers
RUN apt-get update && apt-get install -y \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Copy the file requirements.txt to the container at /code/requirements.txt
COPY requirements.txt /code/requirements.txt

# Install the dependencies in requirements.txt
# --no-cache-dir reduces image size
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy the current directory contents into the container at /code/app
# We copy 'app' specifically to match the structure expected by uvicorn
COPY app /code/app

# Make port 7860 available to the world outside this container
EXPOSE 7860

# Run uvicorn when the container launches
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7860"]
