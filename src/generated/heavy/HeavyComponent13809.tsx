'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13809<T> = T extends (infer U)[]
  ? DeepReadonlyArray13809<U>
  : T extends object
  ? DeepReadonlyObject13809<T>
  : T;

interface DeepReadonlyArray13809<T> extends ReadonlyArray<DeepReadonly13809<T>> {}

type DeepReadonlyObject13809<T> = {
  readonly [P in keyof T]: DeepReadonly13809<T[P]>;
};

type UnionToIntersection13809<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13809<T> = UnionToIntersection13809<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13809<T extends unknown[], V> = [...T, V];

type TuplifyUnion13809<T, L = LastOf13809<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13809<TuplifyUnion13809<Exclude<T, L>>, L>;

type DeepPartial13809<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13809<T[P]> }
  : T;

type Paths13809<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13809<K, Paths13809<T[K], Prev13809[D]>> : never }[keyof T]
  : never;

type Prev13809 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13809<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13809 {
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

type ConfigPaths13809 = Paths13809<NestedConfig13809>;

interface HeavyProps13809 {
  config: DeepPartial13809<NestedConfig13809>;
  path?: ConfigPaths13809;
}

const HeavyComponent13809 = memo(function HeavyComponent13809({ config }: HeavyProps13809) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13809) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13809 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13809: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13809.displayName = 'HeavyComponent13809';
export default HeavyComponent13809;
