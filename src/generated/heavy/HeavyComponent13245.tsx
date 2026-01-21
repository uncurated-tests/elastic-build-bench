'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13245<T> = T extends (infer U)[]
  ? DeepReadonlyArray13245<U>
  : T extends object
  ? DeepReadonlyObject13245<T>
  : T;

interface DeepReadonlyArray13245<T> extends ReadonlyArray<DeepReadonly13245<T>> {}

type DeepReadonlyObject13245<T> = {
  readonly [P in keyof T]: DeepReadonly13245<T[P]>;
};

type UnionToIntersection13245<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13245<T> = UnionToIntersection13245<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13245<T extends unknown[], V> = [...T, V];

type TuplifyUnion13245<T, L = LastOf13245<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13245<TuplifyUnion13245<Exclude<T, L>>, L>;

type DeepPartial13245<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13245<T[P]> }
  : T;

type Paths13245<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13245<K, Paths13245<T[K], Prev13245[D]>> : never }[keyof T]
  : never;

type Prev13245 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13245<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13245 {
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

type ConfigPaths13245 = Paths13245<NestedConfig13245>;

interface HeavyProps13245 {
  config: DeepPartial13245<NestedConfig13245>;
  path?: ConfigPaths13245;
}

const HeavyComponent13245 = memo(function HeavyComponent13245({ config }: HeavyProps13245) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13245) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13245 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13245: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13245.displayName = 'HeavyComponent13245';
export default HeavyComponent13245;
