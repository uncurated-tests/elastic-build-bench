'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7280<T> = T extends (infer U)[]
  ? DeepReadonlyArray7280<U>
  : T extends object
  ? DeepReadonlyObject7280<T>
  : T;

interface DeepReadonlyArray7280<T> extends ReadonlyArray<DeepReadonly7280<T>> {}

type DeepReadonlyObject7280<T> = {
  readonly [P in keyof T]: DeepReadonly7280<T[P]>;
};

type UnionToIntersection7280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7280<T> = UnionToIntersection7280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7280<T extends unknown[], V> = [...T, V];

type TuplifyUnion7280<T, L = LastOf7280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7280<TuplifyUnion7280<Exclude<T, L>>, L>;

type DeepPartial7280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7280<T[P]> }
  : T;

type Paths7280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7280<K, Paths7280<T[K], Prev7280[D]>> : never }[keyof T]
  : never;

type Prev7280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7280 {
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

type ConfigPaths7280 = Paths7280<NestedConfig7280>;

interface HeavyProps7280 {
  config: DeepPartial7280<NestedConfig7280>;
  path?: ConfigPaths7280;
}

const HeavyComponent7280 = memo(function HeavyComponent7280({ config }: HeavyProps7280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7280.displayName = 'HeavyComponent7280';
export default HeavyComponent7280;
