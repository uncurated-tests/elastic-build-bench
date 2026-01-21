'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly17<T> = T extends (infer U)[]
  ? DeepReadonlyArray17<U>
  : T extends object
  ? DeepReadonlyObject17<T>
  : T;

interface DeepReadonlyArray17<T> extends ReadonlyArray<DeepReadonly17<T>> {}

type DeepReadonlyObject17<T> = {
  readonly [P in keyof T]: DeepReadonly17<T[P]>;
};

type UnionToIntersection17<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf17<T> = UnionToIntersection17<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push17<T extends unknown[], V> = [...T, V];

type TuplifyUnion17<T, L = LastOf17<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push17<TuplifyUnion17<Exclude<T, L>>, L>;

type DeepPartial17<T> = T extends object
  ? { [P in keyof T]?: DeepPartial17<T[P]> }
  : T;

type Paths17<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join17<K, Paths17<T[K], Prev17[D]>> : never }[keyof T]
  : never;

type Prev17 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join17<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig17 {
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

type ConfigPaths17 = Paths17<NestedConfig17>;

interface HeavyProps17 {
  config: DeepPartial17<NestedConfig17>;
  path?: ConfigPaths17;
}

const HeavyComponent17 = memo(function HeavyComponent17({ config }: HeavyProps17) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 17) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-17 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H17: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent17.displayName = 'HeavyComponent17';
export default HeavyComponent17;
