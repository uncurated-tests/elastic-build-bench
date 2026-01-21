'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13827<T> = T extends (infer U)[]
  ? DeepReadonlyArray13827<U>
  : T extends object
  ? DeepReadonlyObject13827<T>
  : T;

interface DeepReadonlyArray13827<T> extends ReadonlyArray<DeepReadonly13827<T>> {}

type DeepReadonlyObject13827<T> = {
  readonly [P in keyof T]: DeepReadonly13827<T[P]>;
};

type UnionToIntersection13827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13827<T> = UnionToIntersection13827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13827<T extends unknown[], V> = [...T, V];

type TuplifyUnion13827<T, L = LastOf13827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13827<TuplifyUnion13827<Exclude<T, L>>, L>;

type DeepPartial13827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13827<T[P]> }
  : T;

type Paths13827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13827<K, Paths13827<T[K], Prev13827[D]>> : never }[keyof T]
  : never;

type Prev13827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13827 {
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

type ConfigPaths13827 = Paths13827<NestedConfig13827>;

interface HeavyProps13827 {
  config: DeepPartial13827<NestedConfig13827>;
  path?: ConfigPaths13827;
}

const HeavyComponent13827 = memo(function HeavyComponent13827({ config }: HeavyProps13827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13827.displayName = 'HeavyComponent13827';
export default HeavyComponent13827;
