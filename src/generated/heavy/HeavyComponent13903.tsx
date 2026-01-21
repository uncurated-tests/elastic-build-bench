'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13903<T> = T extends (infer U)[]
  ? DeepReadonlyArray13903<U>
  : T extends object
  ? DeepReadonlyObject13903<T>
  : T;

interface DeepReadonlyArray13903<T> extends ReadonlyArray<DeepReadonly13903<T>> {}

type DeepReadonlyObject13903<T> = {
  readonly [P in keyof T]: DeepReadonly13903<T[P]>;
};

type UnionToIntersection13903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13903<T> = UnionToIntersection13903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13903<T extends unknown[], V> = [...T, V];

type TuplifyUnion13903<T, L = LastOf13903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13903<TuplifyUnion13903<Exclude<T, L>>, L>;

type DeepPartial13903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13903<T[P]> }
  : T;

type Paths13903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13903<K, Paths13903<T[K], Prev13903[D]>> : never }[keyof T]
  : never;

type Prev13903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13903 {
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

type ConfigPaths13903 = Paths13903<NestedConfig13903>;

interface HeavyProps13903 {
  config: DeepPartial13903<NestedConfig13903>;
  path?: ConfigPaths13903;
}

const HeavyComponent13903 = memo(function HeavyComponent13903({ config }: HeavyProps13903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13903.displayName = 'HeavyComponent13903';
export default HeavyComponent13903;
