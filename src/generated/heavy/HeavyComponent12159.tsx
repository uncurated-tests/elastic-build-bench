'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12159<T> = T extends (infer U)[]
  ? DeepReadonlyArray12159<U>
  : T extends object
  ? DeepReadonlyObject12159<T>
  : T;

interface DeepReadonlyArray12159<T> extends ReadonlyArray<DeepReadonly12159<T>> {}

type DeepReadonlyObject12159<T> = {
  readonly [P in keyof T]: DeepReadonly12159<T[P]>;
};

type UnionToIntersection12159<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12159<T> = UnionToIntersection12159<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12159<T extends unknown[], V> = [...T, V];

type TuplifyUnion12159<T, L = LastOf12159<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12159<TuplifyUnion12159<Exclude<T, L>>, L>;

type DeepPartial12159<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12159<T[P]> }
  : T;

type Paths12159<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12159<K, Paths12159<T[K], Prev12159[D]>> : never }[keyof T]
  : never;

type Prev12159 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12159<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12159 {
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

type ConfigPaths12159 = Paths12159<NestedConfig12159>;

interface HeavyProps12159 {
  config: DeepPartial12159<NestedConfig12159>;
  path?: ConfigPaths12159;
}

const HeavyComponent12159 = memo(function HeavyComponent12159({ config }: HeavyProps12159) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12159) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12159 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12159: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12159.displayName = 'HeavyComponent12159';
export default HeavyComponent12159;
