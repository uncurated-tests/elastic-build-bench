'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13539<T> = T extends (infer U)[]
  ? DeepReadonlyArray13539<U>
  : T extends object
  ? DeepReadonlyObject13539<T>
  : T;

interface DeepReadonlyArray13539<T> extends ReadonlyArray<DeepReadonly13539<T>> {}

type DeepReadonlyObject13539<T> = {
  readonly [P in keyof T]: DeepReadonly13539<T[P]>;
};

type UnionToIntersection13539<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13539<T> = UnionToIntersection13539<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13539<T extends unknown[], V> = [...T, V];

type TuplifyUnion13539<T, L = LastOf13539<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13539<TuplifyUnion13539<Exclude<T, L>>, L>;

type DeepPartial13539<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13539<T[P]> }
  : T;

type Paths13539<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13539<K, Paths13539<T[K], Prev13539[D]>> : never }[keyof T]
  : never;

type Prev13539 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13539<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13539 {
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

type ConfigPaths13539 = Paths13539<NestedConfig13539>;

interface HeavyProps13539 {
  config: DeepPartial13539<NestedConfig13539>;
  path?: ConfigPaths13539;
}

const HeavyComponent13539 = memo(function HeavyComponent13539({ config }: HeavyProps13539) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13539) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13539 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13539: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13539.displayName = 'HeavyComponent13539';
export default HeavyComponent13539;
