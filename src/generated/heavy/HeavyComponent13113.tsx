'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13113<T> = T extends (infer U)[]
  ? DeepReadonlyArray13113<U>
  : T extends object
  ? DeepReadonlyObject13113<T>
  : T;

interface DeepReadonlyArray13113<T> extends ReadonlyArray<DeepReadonly13113<T>> {}

type DeepReadonlyObject13113<T> = {
  readonly [P in keyof T]: DeepReadonly13113<T[P]>;
};

type UnionToIntersection13113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13113<T> = UnionToIntersection13113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13113<T extends unknown[], V> = [...T, V];

type TuplifyUnion13113<T, L = LastOf13113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13113<TuplifyUnion13113<Exclude<T, L>>, L>;

type DeepPartial13113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13113<T[P]> }
  : T;

type Paths13113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13113<K, Paths13113<T[K], Prev13113[D]>> : never }[keyof T]
  : never;

type Prev13113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13113 {
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

type ConfigPaths13113 = Paths13113<NestedConfig13113>;

interface HeavyProps13113 {
  config: DeepPartial13113<NestedConfig13113>;
  path?: ConfigPaths13113;
}

const HeavyComponent13113 = memo(function HeavyComponent13113({ config }: HeavyProps13113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13113.displayName = 'HeavyComponent13113';
export default HeavyComponent13113;
