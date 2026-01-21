'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13607<T> = T extends (infer U)[]
  ? DeepReadonlyArray13607<U>
  : T extends object
  ? DeepReadonlyObject13607<T>
  : T;

interface DeepReadonlyArray13607<T> extends ReadonlyArray<DeepReadonly13607<T>> {}

type DeepReadonlyObject13607<T> = {
  readonly [P in keyof T]: DeepReadonly13607<T[P]>;
};

type UnionToIntersection13607<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13607<T> = UnionToIntersection13607<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13607<T extends unknown[], V> = [...T, V];

type TuplifyUnion13607<T, L = LastOf13607<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13607<TuplifyUnion13607<Exclude<T, L>>, L>;

type DeepPartial13607<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13607<T[P]> }
  : T;

type Paths13607<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13607<K, Paths13607<T[K], Prev13607[D]>> : never }[keyof T]
  : never;

type Prev13607 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13607<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13607 {
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

type ConfigPaths13607 = Paths13607<NestedConfig13607>;

interface HeavyProps13607 {
  config: DeepPartial13607<NestedConfig13607>;
  path?: ConfigPaths13607;
}

const HeavyComponent13607 = memo(function HeavyComponent13607({ config }: HeavyProps13607) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13607) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13607 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13607: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13607.displayName = 'HeavyComponent13607';
export default HeavyComponent13607;
