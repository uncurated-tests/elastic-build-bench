'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13822<T> = T extends (infer U)[]
  ? DeepReadonlyArray13822<U>
  : T extends object
  ? DeepReadonlyObject13822<T>
  : T;

interface DeepReadonlyArray13822<T> extends ReadonlyArray<DeepReadonly13822<T>> {}

type DeepReadonlyObject13822<T> = {
  readonly [P in keyof T]: DeepReadonly13822<T[P]>;
};

type UnionToIntersection13822<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13822<T> = UnionToIntersection13822<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13822<T extends unknown[], V> = [...T, V];

type TuplifyUnion13822<T, L = LastOf13822<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13822<TuplifyUnion13822<Exclude<T, L>>, L>;

type DeepPartial13822<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13822<T[P]> }
  : T;

type Paths13822<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13822<K, Paths13822<T[K], Prev13822[D]>> : never }[keyof T]
  : never;

type Prev13822 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13822<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13822 {
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

type ConfigPaths13822 = Paths13822<NestedConfig13822>;

interface HeavyProps13822 {
  config: DeepPartial13822<NestedConfig13822>;
  path?: ConfigPaths13822;
}

const HeavyComponent13822 = memo(function HeavyComponent13822({ config }: HeavyProps13822) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13822) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13822 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13822: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13822.displayName = 'HeavyComponent13822';
export default HeavyComponent13822;
