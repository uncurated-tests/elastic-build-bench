'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7105<T> = T extends (infer U)[]
  ? DeepReadonlyArray7105<U>
  : T extends object
  ? DeepReadonlyObject7105<T>
  : T;

interface DeepReadonlyArray7105<T> extends ReadonlyArray<DeepReadonly7105<T>> {}

type DeepReadonlyObject7105<T> = {
  readonly [P in keyof T]: DeepReadonly7105<T[P]>;
};

type UnionToIntersection7105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7105<T> = UnionToIntersection7105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7105<T extends unknown[], V> = [...T, V];

type TuplifyUnion7105<T, L = LastOf7105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7105<TuplifyUnion7105<Exclude<T, L>>, L>;

type DeepPartial7105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7105<T[P]> }
  : T;

type Paths7105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7105<K, Paths7105<T[K], Prev7105[D]>> : never }[keyof T]
  : never;

type Prev7105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7105 {
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

type ConfigPaths7105 = Paths7105<NestedConfig7105>;

interface HeavyProps7105 {
  config: DeepPartial7105<NestedConfig7105>;
  path?: ConfigPaths7105;
}

const HeavyComponent7105 = memo(function HeavyComponent7105({ config }: HeavyProps7105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7105.displayName = 'HeavyComponent7105';
export default HeavyComponent7105;
