'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13491<T> = T extends (infer U)[]
  ? DeepReadonlyArray13491<U>
  : T extends object
  ? DeepReadonlyObject13491<T>
  : T;

interface DeepReadonlyArray13491<T> extends ReadonlyArray<DeepReadonly13491<T>> {}

type DeepReadonlyObject13491<T> = {
  readonly [P in keyof T]: DeepReadonly13491<T[P]>;
};

type UnionToIntersection13491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13491<T> = UnionToIntersection13491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13491<T extends unknown[], V> = [...T, V];

type TuplifyUnion13491<T, L = LastOf13491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13491<TuplifyUnion13491<Exclude<T, L>>, L>;

type DeepPartial13491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13491<T[P]> }
  : T;

type Paths13491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13491<K, Paths13491<T[K], Prev13491[D]>> : never }[keyof T]
  : never;

type Prev13491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13491 {
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

type ConfigPaths13491 = Paths13491<NestedConfig13491>;

interface HeavyProps13491 {
  config: DeepPartial13491<NestedConfig13491>;
  path?: ConfigPaths13491;
}

const HeavyComponent13491 = memo(function HeavyComponent13491({ config }: HeavyProps13491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13491.displayName = 'HeavyComponent13491';
export default HeavyComponent13491;
