'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13596<T> = T extends (infer U)[]
  ? DeepReadonlyArray13596<U>
  : T extends object
  ? DeepReadonlyObject13596<T>
  : T;

interface DeepReadonlyArray13596<T> extends ReadonlyArray<DeepReadonly13596<T>> {}

type DeepReadonlyObject13596<T> = {
  readonly [P in keyof T]: DeepReadonly13596<T[P]>;
};

type UnionToIntersection13596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13596<T> = UnionToIntersection13596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13596<T extends unknown[], V> = [...T, V];

type TuplifyUnion13596<T, L = LastOf13596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13596<TuplifyUnion13596<Exclude<T, L>>, L>;

type DeepPartial13596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13596<T[P]> }
  : T;

type Paths13596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13596<K, Paths13596<T[K], Prev13596[D]>> : never }[keyof T]
  : never;

type Prev13596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13596 {
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

type ConfigPaths13596 = Paths13596<NestedConfig13596>;

interface HeavyProps13596 {
  config: DeepPartial13596<NestedConfig13596>;
  path?: ConfigPaths13596;
}

const HeavyComponent13596 = memo(function HeavyComponent13596({ config }: HeavyProps13596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13596.displayName = 'HeavyComponent13596';
export default HeavyComponent13596;
