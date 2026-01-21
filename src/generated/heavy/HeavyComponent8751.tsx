'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8751<T> = T extends (infer U)[]
  ? DeepReadonlyArray8751<U>
  : T extends object
  ? DeepReadonlyObject8751<T>
  : T;

interface DeepReadonlyArray8751<T> extends ReadonlyArray<DeepReadonly8751<T>> {}

type DeepReadonlyObject8751<T> = {
  readonly [P in keyof T]: DeepReadonly8751<T[P]>;
};

type UnionToIntersection8751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8751<T> = UnionToIntersection8751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8751<T extends unknown[], V> = [...T, V];

type TuplifyUnion8751<T, L = LastOf8751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8751<TuplifyUnion8751<Exclude<T, L>>, L>;

type DeepPartial8751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8751<T[P]> }
  : T;

type Paths8751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8751<K, Paths8751<T[K], Prev8751[D]>> : never }[keyof T]
  : never;

type Prev8751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8751 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths8751 = Paths8751<NestedConfig8751>;

interface HeavyProps8751 {
  config: DeepPartial8751<NestedConfig8751>;
  path?: ConfigPaths8751;
}

const HeavyComponent8751 = memo(function HeavyComponent8751({ config }: HeavyProps8751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8751.displayName = 'HeavyComponent8751';
export default HeavyComponent8751;
