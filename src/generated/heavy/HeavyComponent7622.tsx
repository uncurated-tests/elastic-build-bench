'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7622<T> = T extends (infer U)[]
  ? DeepReadonlyArray7622<U>
  : T extends object
  ? DeepReadonlyObject7622<T>
  : T;

interface DeepReadonlyArray7622<T> extends ReadonlyArray<DeepReadonly7622<T>> {}

type DeepReadonlyObject7622<T> = {
  readonly [P in keyof T]: DeepReadonly7622<T[P]>;
};

type UnionToIntersection7622<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7622<T> = UnionToIntersection7622<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7622<T extends unknown[], V> = [...T, V];

type TuplifyUnion7622<T, L = LastOf7622<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7622<TuplifyUnion7622<Exclude<T, L>>, L>;

type DeepPartial7622<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7622<T[P]> }
  : T;

type Paths7622<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7622<K, Paths7622<T[K], Prev7622[D]>> : never }[keyof T]
  : never;

type Prev7622 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7622<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7622 {
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

type ConfigPaths7622 = Paths7622<NestedConfig7622>;

interface HeavyProps7622 {
  config: DeepPartial7622<NestedConfig7622>;
  path?: ConfigPaths7622;
}

const HeavyComponent7622 = memo(function HeavyComponent7622({ config }: HeavyProps7622) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7622) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7622 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7622: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7622.displayName = 'HeavyComponent7622';
export default HeavyComponent7622;
