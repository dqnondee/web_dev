def monkey_trouble(a_smile, b_smile):
  if (a_smile and not b_smile) or (not a_smile and b_smile):
    return False
  else:
    return True