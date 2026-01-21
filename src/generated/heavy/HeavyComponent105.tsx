'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly105<T> = T extends (infer U)[]
  ? DeepReadonlyArray105<U>
  : T extends object
  ? DeepReadonlyObject105<T>
  : T;

interface DeepReadonlyArray105<T> extends ReadonlyArray<DeepReadonly105<T>> {}

type DeepReadonlyObject105<T> = {
  readonly [P in keyof T]: DeepReadonly105<T[P]>;
};

type UnionToIntersection105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf105<T> = UnionToIntersection105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push105<T extends unknown[], V> = [...T, V];

type TuplifyUnion105<T, L = LastOf105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push105<TuplifyUnion105<Exclude<T, L>>, L>;

type DeepPartial105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial105<T[P]> }
  : T;

type Paths105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join105<K, Paths105<T[K], Prev105[D]>> : never }[keyof T]
  : never;

type Prev105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig105 {
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

type ConfigPaths105 = Paths105<NestedConfig105>;

interface HeavyProps105 {
  config: DeepPartial105<NestedConfig105>;
  path?: ConfigPaths105;
}

const HeavyComponent105 = memo(function HeavyComponent105({ config }: HeavyProps105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent105.displayName = 'HeavyComponent105';
export default HeavyComponent105;
