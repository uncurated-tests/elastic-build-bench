'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7283<T> = T extends (infer U)[]
  ? DeepReadonlyArray7283<U>
  : T extends object
  ? DeepReadonlyObject7283<T>
  : T;

interface DeepReadonlyArray7283<T> extends ReadonlyArray<DeepReadonly7283<T>> {}

type DeepReadonlyObject7283<T> = {
  readonly [P in keyof T]: DeepReadonly7283<T[P]>;
};

type UnionToIntersection7283<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7283<T> = UnionToIntersection7283<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7283<T extends unknown[], V> = [...T, V];

type TuplifyUnion7283<T, L = LastOf7283<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7283<TuplifyUnion7283<Exclude<T, L>>, L>;

type DeepPartial7283<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7283<T[P]> }
  : T;

type Paths7283<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7283<K, Paths7283<T[K], Prev7283[D]>> : never }[keyof T]
  : never;

type Prev7283 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7283<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7283 {
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

type ConfigPaths7283 = Paths7283<NestedConfig7283>;

interface HeavyProps7283 {
  config: DeepPartial7283<NestedConfig7283>;
  path?: ConfigPaths7283;
}

const HeavyComponent7283 = memo(function HeavyComponent7283({ config }: HeavyProps7283) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7283) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7283 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7283: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7283.displayName = 'HeavyComponent7283';
export default HeavyComponent7283;
