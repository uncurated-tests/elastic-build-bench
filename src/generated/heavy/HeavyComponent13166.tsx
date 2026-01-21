'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13166<T> = T extends (infer U)[]
  ? DeepReadonlyArray13166<U>
  : T extends object
  ? DeepReadonlyObject13166<T>
  : T;

interface DeepReadonlyArray13166<T> extends ReadonlyArray<DeepReadonly13166<T>> {}

type DeepReadonlyObject13166<T> = {
  readonly [P in keyof T]: DeepReadonly13166<T[P]>;
};

type UnionToIntersection13166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13166<T> = UnionToIntersection13166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13166<T extends unknown[], V> = [...T, V];

type TuplifyUnion13166<T, L = LastOf13166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13166<TuplifyUnion13166<Exclude<T, L>>, L>;

type DeepPartial13166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13166<T[P]> }
  : T;

type Paths13166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13166<K, Paths13166<T[K], Prev13166[D]>> : never }[keyof T]
  : never;

type Prev13166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13166 {
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

type ConfigPaths13166 = Paths13166<NestedConfig13166>;

interface HeavyProps13166 {
  config: DeepPartial13166<NestedConfig13166>;
  path?: ConfigPaths13166;
}

const HeavyComponent13166 = memo(function HeavyComponent13166({ config }: HeavyProps13166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13166.displayName = 'HeavyComponent13166';
export default HeavyComponent13166;
