'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11751<T> = T extends (infer U)[]
  ? DeepReadonlyArray11751<U>
  : T extends object
  ? DeepReadonlyObject11751<T>
  : T;

interface DeepReadonlyArray11751<T> extends ReadonlyArray<DeepReadonly11751<T>> {}

type DeepReadonlyObject11751<T> = {
  readonly [P in keyof T]: DeepReadonly11751<T[P]>;
};

type UnionToIntersection11751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11751<T> = UnionToIntersection11751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11751<T extends unknown[], V> = [...T, V];

type TuplifyUnion11751<T, L = LastOf11751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11751<TuplifyUnion11751<Exclude<T, L>>, L>;

type DeepPartial11751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11751<T[P]> }
  : T;

type Paths11751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11751<K, Paths11751<T[K], Prev11751[D]>> : never }[keyof T]
  : never;

type Prev11751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11751 {
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

type ConfigPaths11751 = Paths11751<NestedConfig11751>;

interface HeavyProps11751 {
  config: DeepPartial11751<NestedConfig11751>;
  path?: ConfigPaths11751;
}

const HeavyComponent11751 = memo(function HeavyComponent11751({ config }: HeavyProps11751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11751.displayName = 'HeavyComponent11751';
export default HeavyComponent11751;
