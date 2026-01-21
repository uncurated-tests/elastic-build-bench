'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13118<T> = T extends (infer U)[]
  ? DeepReadonlyArray13118<U>
  : T extends object
  ? DeepReadonlyObject13118<T>
  : T;

interface DeepReadonlyArray13118<T> extends ReadonlyArray<DeepReadonly13118<T>> {}

type DeepReadonlyObject13118<T> = {
  readonly [P in keyof T]: DeepReadonly13118<T[P]>;
};

type UnionToIntersection13118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13118<T> = UnionToIntersection13118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13118<T extends unknown[], V> = [...T, V];

type TuplifyUnion13118<T, L = LastOf13118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13118<TuplifyUnion13118<Exclude<T, L>>, L>;

type DeepPartial13118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13118<T[P]> }
  : T;

type Paths13118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13118<K, Paths13118<T[K], Prev13118[D]>> : never }[keyof T]
  : never;

type Prev13118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13118 {
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

type ConfigPaths13118 = Paths13118<NestedConfig13118>;

interface HeavyProps13118 {
  config: DeepPartial13118<NestedConfig13118>;
  path?: ConfigPaths13118;
}

const HeavyComponent13118 = memo(function HeavyComponent13118({ config }: HeavyProps13118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13118.displayName = 'HeavyComponent13118';
export default HeavyComponent13118;
