'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7402<T> = T extends (infer U)[]
  ? DeepReadonlyArray7402<U>
  : T extends object
  ? DeepReadonlyObject7402<T>
  : T;

interface DeepReadonlyArray7402<T> extends ReadonlyArray<DeepReadonly7402<T>> {}

type DeepReadonlyObject7402<T> = {
  readonly [P in keyof T]: DeepReadonly7402<T[P]>;
};

type UnionToIntersection7402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7402<T> = UnionToIntersection7402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7402<T extends unknown[], V> = [...T, V];

type TuplifyUnion7402<T, L = LastOf7402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7402<TuplifyUnion7402<Exclude<T, L>>, L>;

type DeepPartial7402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7402<T[P]> }
  : T;

type Paths7402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7402<K, Paths7402<T[K], Prev7402[D]>> : never }[keyof T]
  : never;

type Prev7402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7402 {
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

type ConfigPaths7402 = Paths7402<NestedConfig7402>;

interface HeavyProps7402 {
  config: DeepPartial7402<NestedConfig7402>;
  path?: ConfigPaths7402;
}

const HeavyComponent7402 = memo(function HeavyComponent7402({ config }: HeavyProps7402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7402.displayName = 'HeavyComponent7402';
export default HeavyComponent7402;
