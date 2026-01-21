'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13355<T> = T extends (infer U)[]
  ? DeepReadonlyArray13355<U>
  : T extends object
  ? DeepReadonlyObject13355<T>
  : T;

interface DeepReadonlyArray13355<T> extends ReadonlyArray<DeepReadonly13355<T>> {}

type DeepReadonlyObject13355<T> = {
  readonly [P in keyof T]: DeepReadonly13355<T[P]>;
};

type UnionToIntersection13355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13355<T> = UnionToIntersection13355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13355<T extends unknown[], V> = [...T, V];

type TuplifyUnion13355<T, L = LastOf13355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13355<TuplifyUnion13355<Exclude<T, L>>, L>;

type DeepPartial13355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13355<T[P]> }
  : T;

type Paths13355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13355<K, Paths13355<T[K], Prev13355[D]>> : never }[keyof T]
  : never;

type Prev13355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13355 {
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

type ConfigPaths13355 = Paths13355<NestedConfig13355>;

interface HeavyProps13355 {
  config: DeepPartial13355<NestedConfig13355>;
  path?: ConfigPaths13355;
}

const HeavyComponent13355 = memo(function HeavyComponent13355({ config }: HeavyProps13355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13355.displayName = 'HeavyComponent13355';
export default HeavyComponent13355;
