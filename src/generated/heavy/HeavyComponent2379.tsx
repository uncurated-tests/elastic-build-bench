'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2379<T> = T extends (infer U)[]
  ? DeepReadonlyArray2379<U>
  : T extends object
  ? DeepReadonlyObject2379<T>
  : T;

interface DeepReadonlyArray2379<T> extends ReadonlyArray<DeepReadonly2379<T>> {}

type DeepReadonlyObject2379<T> = {
  readonly [P in keyof T]: DeepReadonly2379<T[P]>;
};

type UnionToIntersection2379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2379<T> = UnionToIntersection2379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2379<T extends unknown[], V> = [...T, V];

type TuplifyUnion2379<T, L = LastOf2379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2379<TuplifyUnion2379<Exclude<T, L>>, L>;

type DeepPartial2379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2379<T[P]> }
  : T;

type Paths2379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2379<K, Paths2379<T[K], Prev2379[D]>> : never }[keyof T]
  : never;

type Prev2379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2379 {
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

type ConfigPaths2379 = Paths2379<NestedConfig2379>;

interface HeavyProps2379 {
  config: DeepPartial2379<NestedConfig2379>;
  path?: ConfigPaths2379;
}

const HeavyComponent2379 = memo(function HeavyComponent2379({ config }: HeavyProps2379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2379.displayName = 'HeavyComponent2379';
export default HeavyComponent2379;
