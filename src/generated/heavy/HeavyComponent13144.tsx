'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13144<T> = T extends (infer U)[]
  ? DeepReadonlyArray13144<U>
  : T extends object
  ? DeepReadonlyObject13144<T>
  : T;

interface DeepReadonlyArray13144<T> extends ReadonlyArray<DeepReadonly13144<T>> {}

type DeepReadonlyObject13144<T> = {
  readonly [P in keyof T]: DeepReadonly13144<T[P]>;
};

type UnionToIntersection13144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13144<T> = UnionToIntersection13144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13144<T extends unknown[], V> = [...T, V];

type TuplifyUnion13144<T, L = LastOf13144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13144<TuplifyUnion13144<Exclude<T, L>>, L>;

type DeepPartial13144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13144<T[P]> }
  : T;

type Paths13144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13144<K, Paths13144<T[K], Prev13144[D]>> : never }[keyof T]
  : never;

type Prev13144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13144 {
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

type ConfigPaths13144 = Paths13144<NestedConfig13144>;

interface HeavyProps13144 {
  config: DeepPartial13144<NestedConfig13144>;
  path?: ConfigPaths13144;
}

const HeavyComponent13144 = memo(function HeavyComponent13144({ config }: HeavyProps13144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13144.displayName = 'HeavyComponent13144';
export default HeavyComponent13144;
