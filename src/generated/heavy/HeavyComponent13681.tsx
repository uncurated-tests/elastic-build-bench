'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13681<T> = T extends (infer U)[]
  ? DeepReadonlyArray13681<U>
  : T extends object
  ? DeepReadonlyObject13681<T>
  : T;

interface DeepReadonlyArray13681<T> extends ReadonlyArray<DeepReadonly13681<T>> {}

type DeepReadonlyObject13681<T> = {
  readonly [P in keyof T]: DeepReadonly13681<T[P]>;
};

type UnionToIntersection13681<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13681<T> = UnionToIntersection13681<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13681<T extends unknown[], V> = [...T, V];

type TuplifyUnion13681<T, L = LastOf13681<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13681<TuplifyUnion13681<Exclude<T, L>>, L>;

type DeepPartial13681<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13681<T[P]> }
  : T;

type Paths13681<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13681<K, Paths13681<T[K], Prev13681[D]>> : never }[keyof T]
  : never;

type Prev13681 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13681<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13681 {
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

type ConfigPaths13681 = Paths13681<NestedConfig13681>;

interface HeavyProps13681 {
  config: DeepPartial13681<NestedConfig13681>;
  path?: ConfigPaths13681;
}

const HeavyComponent13681 = memo(function HeavyComponent13681({ config }: HeavyProps13681) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13681) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13681 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13681: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13681.displayName = 'HeavyComponent13681';
export default HeavyComponent13681;
