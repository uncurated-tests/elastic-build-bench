'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13861<T> = T extends (infer U)[]
  ? DeepReadonlyArray13861<U>
  : T extends object
  ? DeepReadonlyObject13861<T>
  : T;

interface DeepReadonlyArray13861<T> extends ReadonlyArray<DeepReadonly13861<T>> {}

type DeepReadonlyObject13861<T> = {
  readonly [P in keyof T]: DeepReadonly13861<T[P]>;
};

type UnionToIntersection13861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13861<T> = UnionToIntersection13861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13861<T extends unknown[], V> = [...T, V];

type TuplifyUnion13861<T, L = LastOf13861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13861<TuplifyUnion13861<Exclude<T, L>>, L>;

type DeepPartial13861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13861<T[P]> }
  : T;

type Paths13861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13861<K, Paths13861<T[K], Prev13861[D]>> : never }[keyof T]
  : never;

type Prev13861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13861 {
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

type ConfigPaths13861 = Paths13861<NestedConfig13861>;

interface HeavyProps13861 {
  config: DeepPartial13861<NestedConfig13861>;
  path?: ConfigPaths13861;
}

const HeavyComponent13861 = memo(function HeavyComponent13861({ config }: HeavyProps13861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13861.displayName = 'HeavyComponent13861';
export default HeavyComponent13861;
