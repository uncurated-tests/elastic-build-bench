'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13950<T> = T extends (infer U)[]
  ? DeepReadonlyArray13950<U>
  : T extends object
  ? DeepReadonlyObject13950<T>
  : T;

interface DeepReadonlyArray13950<T> extends ReadonlyArray<DeepReadonly13950<T>> {}

type DeepReadonlyObject13950<T> = {
  readonly [P in keyof T]: DeepReadonly13950<T[P]>;
};

type UnionToIntersection13950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13950<T> = UnionToIntersection13950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13950<T extends unknown[], V> = [...T, V];

type TuplifyUnion13950<T, L = LastOf13950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13950<TuplifyUnion13950<Exclude<T, L>>, L>;

type DeepPartial13950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13950<T[P]> }
  : T;

type Paths13950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13950<K, Paths13950<T[K], Prev13950[D]>> : never }[keyof T]
  : never;

type Prev13950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13950 {
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

type ConfigPaths13950 = Paths13950<NestedConfig13950>;

interface HeavyProps13950 {
  config: DeepPartial13950<NestedConfig13950>;
  path?: ConfigPaths13950;
}

const HeavyComponent13950 = memo(function HeavyComponent13950({ config }: HeavyProps13950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13950.displayName = 'HeavyComponent13950';
export default HeavyComponent13950;
