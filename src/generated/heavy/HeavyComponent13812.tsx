'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13812<T> = T extends (infer U)[]
  ? DeepReadonlyArray13812<U>
  : T extends object
  ? DeepReadonlyObject13812<T>
  : T;

interface DeepReadonlyArray13812<T> extends ReadonlyArray<DeepReadonly13812<T>> {}

type DeepReadonlyObject13812<T> = {
  readonly [P in keyof T]: DeepReadonly13812<T[P]>;
};

type UnionToIntersection13812<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13812<T> = UnionToIntersection13812<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13812<T extends unknown[], V> = [...T, V];

type TuplifyUnion13812<T, L = LastOf13812<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13812<TuplifyUnion13812<Exclude<T, L>>, L>;

type DeepPartial13812<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13812<T[P]> }
  : T;

type Paths13812<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13812<K, Paths13812<T[K], Prev13812[D]>> : never }[keyof T]
  : never;

type Prev13812 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13812<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13812 {
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

type ConfigPaths13812 = Paths13812<NestedConfig13812>;

interface HeavyProps13812 {
  config: DeepPartial13812<NestedConfig13812>;
  path?: ConfigPaths13812;
}

const HeavyComponent13812 = memo(function HeavyComponent13812({ config }: HeavyProps13812) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13812) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13812 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13812: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13812.displayName = 'HeavyComponent13812';
export default HeavyComponent13812;
