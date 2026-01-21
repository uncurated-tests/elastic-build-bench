'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13751<T> = T extends (infer U)[]
  ? DeepReadonlyArray13751<U>
  : T extends object
  ? DeepReadonlyObject13751<T>
  : T;

interface DeepReadonlyArray13751<T> extends ReadonlyArray<DeepReadonly13751<T>> {}

type DeepReadonlyObject13751<T> = {
  readonly [P in keyof T]: DeepReadonly13751<T[P]>;
};

type UnionToIntersection13751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13751<T> = UnionToIntersection13751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13751<T extends unknown[], V> = [...T, V];

type TuplifyUnion13751<T, L = LastOf13751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13751<TuplifyUnion13751<Exclude<T, L>>, L>;

type DeepPartial13751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13751<T[P]> }
  : T;

type Paths13751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13751<K, Paths13751<T[K], Prev13751[D]>> : never }[keyof T]
  : never;

type Prev13751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13751 {
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

type ConfigPaths13751 = Paths13751<NestedConfig13751>;

interface HeavyProps13751 {
  config: DeepPartial13751<NestedConfig13751>;
  path?: ConfigPaths13751;
}

const HeavyComponent13751 = memo(function HeavyComponent13751({ config }: HeavyProps13751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13751.displayName = 'HeavyComponent13751';
export default HeavyComponent13751;
