'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13704<T> = T extends (infer U)[]
  ? DeepReadonlyArray13704<U>
  : T extends object
  ? DeepReadonlyObject13704<T>
  : T;

interface DeepReadonlyArray13704<T> extends ReadonlyArray<DeepReadonly13704<T>> {}

type DeepReadonlyObject13704<T> = {
  readonly [P in keyof T]: DeepReadonly13704<T[P]>;
};

type UnionToIntersection13704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13704<T> = UnionToIntersection13704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13704<T extends unknown[], V> = [...T, V];

type TuplifyUnion13704<T, L = LastOf13704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13704<TuplifyUnion13704<Exclude<T, L>>, L>;

type DeepPartial13704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13704<T[P]> }
  : T;

type Paths13704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13704<K, Paths13704<T[K], Prev13704[D]>> : never }[keyof T]
  : never;

type Prev13704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13704 {
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

type ConfigPaths13704 = Paths13704<NestedConfig13704>;

interface HeavyProps13704 {
  config: DeepPartial13704<NestedConfig13704>;
  path?: ConfigPaths13704;
}

const HeavyComponent13704 = memo(function HeavyComponent13704({ config }: HeavyProps13704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13704.displayName = 'HeavyComponent13704';
export default HeavyComponent13704;
