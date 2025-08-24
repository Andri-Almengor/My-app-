import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingEffectProps {
  strings: string[]; // Textos a mostrar
  typeSpeed?: number; // Velocidad de escritura
  backSpeed?: number; // Velocidad al borrar
  loop?: boolean; // Habilitar o deshabilitar el loop
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  typeSpeed = 70,
  backSpeed = 70,
  loop = true,
}) => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings,
        typeSpeed,
        backSpeed,
        loop,
      };

      const typedInstance = new Typed(typedRef.current, options);

      return () => {
        // Limpiar la instancia para evitar fugas de memoria
        typedInstance.destroy();
      };
    }
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={typedRef} />;
};

export default TypingEffect;
