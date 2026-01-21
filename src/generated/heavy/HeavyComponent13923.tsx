'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13923<T> = T extends (infer U)[]
  ? DeepReadonlyArray13923<U>
  : T extends object
  ? DeepReadonlyObject13923<T>
  : T;

interface DeepReadonlyArray13923<T> extends ReadonlyArray<DeepReadonly13923<T>> {}

type DeepReadonlyObject13923<T> = {
  readonly [P in keyof T]: DeepReadonly13923<T[P]>;
};

type UnionToIntersection13923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13923<T> = UnionToIntersection13923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13923<T extends unknown[], V> = [...T, V];

type TuplifyUnion13923<T, L = LastOf13923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13923<TuplifyUnion13923<Exclude<T, L>>, L>;

type DeepPartial13923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13923<T[P]> }
  : T;

type Paths13923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13923<K, Paths13923<T[K], Prev13923[D]>> : never }[keyof T]
  : never;

type Prev13923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13923 {
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

type ConfigPaths13923 = Paths13923<NestedConfig13923>;

interface HeavyProps13923 {
  config: DeepPartial13923<NestedConfig13923>;
  path?: ConfigPaths13923;
}

const HeavyComponent13923 = memo(function HeavyComponent13923({ config }: HeavyProps13923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13923.displayName = 'HeavyComponent13923';
export default HeavyComponent13923;
