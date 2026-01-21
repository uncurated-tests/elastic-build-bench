'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3751<T> = T extends (infer U)[]
  ? DeepReadonlyArray3751<U>
  : T extends object
  ? DeepReadonlyObject3751<T>
  : T;

interface DeepReadonlyArray3751<T> extends ReadonlyArray<DeepReadonly3751<T>> {}

type DeepReadonlyObject3751<T> = {
  readonly [P in keyof T]: DeepReadonly3751<T[P]>;
};

type UnionToIntersection3751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3751<T> = UnionToIntersection3751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3751<T extends unknown[], V> = [...T, V];

type TuplifyUnion3751<T, L = LastOf3751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3751<TuplifyUnion3751<Exclude<T, L>>, L>;

type DeepPartial3751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3751<T[P]> }
  : T;

type Paths3751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3751<K, Paths3751<T[K], Prev3751[D]>> : never }[keyof T]
  : never;

type Prev3751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3751 {
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

type ConfigPaths3751 = Paths3751<NestedConfig3751>;

interface HeavyProps3751 {
  config: DeepPartial3751<NestedConfig3751>;
  path?: ConfigPaths3751;
}

const HeavyComponent3751 = memo(function HeavyComponent3751({ config }: HeavyProps3751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3751.displayName = 'HeavyComponent3751';
export default HeavyComponent3751;
