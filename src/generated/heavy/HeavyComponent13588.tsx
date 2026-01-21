'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13588<T> = T extends (infer U)[]
  ? DeepReadonlyArray13588<U>
  : T extends object
  ? DeepReadonlyObject13588<T>
  : T;

interface DeepReadonlyArray13588<T> extends ReadonlyArray<DeepReadonly13588<T>> {}

type DeepReadonlyObject13588<T> = {
  readonly [P in keyof T]: DeepReadonly13588<T[P]>;
};

type UnionToIntersection13588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13588<T> = UnionToIntersection13588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13588<T extends unknown[], V> = [...T, V];

type TuplifyUnion13588<T, L = LastOf13588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13588<TuplifyUnion13588<Exclude<T, L>>, L>;

type DeepPartial13588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13588<T[P]> }
  : T;

type Paths13588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13588<K, Paths13588<T[K], Prev13588[D]>> : never }[keyof T]
  : never;

type Prev13588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13588 {
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

type ConfigPaths13588 = Paths13588<NestedConfig13588>;

interface HeavyProps13588 {
  config: DeepPartial13588<NestedConfig13588>;
  path?: ConfigPaths13588;
}

const HeavyComponent13588 = memo(function HeavyComponent13588({ config }: HeavyProps13588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13588.displayName = 'HeavyComponent13588';
export default HeavyComponent13588;
