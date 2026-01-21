'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13126<T> = T extends (infer U)[]
  ? DeepReadonlyArray13126<U>
  : T extends object
  ? DeepReadonlyObject13126<T>
  : T;

interface DeepReadonlyArray13126<T> extends ReadonlyArray<DeepReadonly13126<T>> {}

type DeepReadonlyObject13126<T> = {
  readonly [P in keyof T]: DeepReadonly13126<T[P]>;
};

type UnionToIntersection13126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13126<T> = UnionToIntersection13126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13126<T extends unknown[], V> = [...T, V];

type TuplifyUnion13126<T, L = LastOf13126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13126<TuplifyUnion13126<Exclude<T, L>>, L>;

type DeepPartial13126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13126<T[P]> }
  : T;

type Paths13126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13126<K, Paths13126<T[K], Prev13126[D]>> : never }[keyof T]
  : never;

type Prev13126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13126 {
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

type ConfigPaths13126 = Paths13126<NestedConfig13126>;

interface HeavyProps13126 {
  config: DeepPartial13126<NestedConfig13126>;
  path?: ConfigPaths13126;
}

const HeavyComponent13126 = memo(function HeavyComponent13126({ config }: HeavyProps13126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13126.displayName = 'HeavyComponent13126';
export default HeavyComponent13126;
