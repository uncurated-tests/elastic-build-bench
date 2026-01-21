'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13979<T> = T extends (infer U)[]
  ? DeepReadonlyArray13979<U>
  : T extends object
  ? DeepReadonlyObject13979<T>
  : T;

interface DeepReadonlyArray13979<T> extends ReadonlyArray<DeepReadonly13979<T>> {}

type DeepReadonlyObject13979<T> = {
  readonly [P in keyof T]: DeepReadonly13979<T[P]>;
};

type UnionToIntersection13979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13979<T> = UnionToIntersection13979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13979<T extends unknown[], V> = [...T, V];

type TuplifyUnion13979<T, L = LastOf13979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13979<TuplifyUnion13979<Exclude<T, L>>, L>;

type DeepPartial13979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13979<T[P]> }
  : T;

type Paths13979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13979<K, Paths13979<T[K], Prev13979[D]>> : never }[keyof T]
  : never;

type Prev13979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13979 {
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

type ConfigPaths13979 = Paths13979<NestedConfig13979>;

interface HeavyProps13979 {
  config: DeepPartial13979<NestedConfig13979>;
  path?: ConfigPaths13979;
}

const HeavyComponent13979 = memo(function HeavyComponent13979({ config }: HeavyProps13979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13979.displayName = 'HeavyComponent13979';
export default HeavyComponent13979;
