'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13902<T> = T extends (infer U)[]
  ? DeepReadonlyArray13902<U>
  : T extends object
  ? DeepReadonlyObject13902<T>
  : T;

interface DeepReadonlyArray13902<T> extends ReadonlyArray<DeepReadonly13902<T>> {}

type DeepReadonlyObject13902<T> = {
  readonly [P in keyof T]: DeepReadonly13902<T[P]>;
};

type UnionToIntersection13902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13902<T> = UnionToIntersection13902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13902<T extends unknown[], V> = [...T, V];

type TuplifyUnion13902<T, L = LastOf13902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13902<TuplifyUnion13902<Exclude<T, L>>, L>;

type DeepPartial13902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13902<T[P]> }
  : T;

type Paths13902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13902<K, Paths13902<T[K], Prev13902[D]>> : never }[keyof T]
  : never;

type Prev13902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13902 {
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

type ConfigPaths13902 = Paths13902<NestedConfig13902>;

interface HeavyProps13902 {
  config: DeepPartial13902<NestedConfig13902>;
  path?: ConfigPaths13902;
}

const HeavyComponent13902 = memo(function HeavyComponent13902({ config }: HeavyProps13902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13902.displayName = 'HeavyComponent13902';
export default HeavyComponent13902;
