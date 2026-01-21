'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13186<T> = T extends (infer U)[]
  ? DeepReadonlyArray13186<U>
  : T extends object
  ? DeepReadonlyObject13186<T>
  : T;

interface DeepReadonlyArray13186<T> extends ReadonlyArray<DeepReadonly13186<T>> {}

type DeepReadonlyObject13186<T> = {
  readonly [P in keyof T]: DeepReadonly13186<T[P]>;
};

type UnionToIntersection13186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13186<T> = UnionToIntersection13186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13186<T extends unknown[], V> = [...T, V];

type TuplifyUnion13186<T, L = LastOf13186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13186<TuplifyUnion13186<Exclude<T, L>>, L>;

type DeepPartial13186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13186<T[P]> }
  : T;

type Paths13186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13186<K, Paths13186<T[K], Prev13186[D]>> : never }[keyof T]
  : never;

type Prev13186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13186 {
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

type ConfigPaths13186 = Paths13186<NestedConfig13186>;

interface HeavyProps13186 {
  config: DeepPartial13186<NestedConfig13186>;
  path?: ConfigPaths13186;
}

const HeavyComponent13186 = memo(function HeavyComponent13186({ config }: HeavyProps13186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13186.displayName = 'HeavyComponent13186';
export default HeavyComponent13186;
