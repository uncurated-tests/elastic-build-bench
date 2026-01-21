'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13055<T> = T extends (infer U)[]
  ? DeepReadonlyArray13055<U>
  : T extends object
  ? DeepReadonlyObject13055<T>
  : T;

interface DeepReadonlyArray13055<T> extends ReadonlyArray<DeepReadonly13055<T>> {}

type DeepReadonlyObject13055<T> = {
  readonly [P in keyof T]: DeepReadonly13055<T[P]>;
};

type UnionToIntersection13055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13055<T> = UnionToIntersection13055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13055<T extends unknown[], V> = [...T, V];

type TuplifyUnion13055<T, L = LastOf13055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13055<TuplifyUnion13055<Exclude<T, L>>, L>;

type DeepPartial13055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13055<T[P]> }
  : T;

type Paths13055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13055<K, Paths13055<T[K], Prev13055[D]>> : never }[keyof T]
  : never;

type Prev13055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13055 {
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

type ConfigPaths13055 = Paths13055<NestedConfig13055>;

interface HeavyProps13055 {
  config: DeepPartial13055<NestedConfig13055>;
  path?: ConfigPaths13055;
}

const HeavyComponent13055 = memo(function HeavyComponent13055({ config }: HeavyProps13055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13055.displayName = 'HeavyComponent13055';
export default HeavyComponent13055;
