'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7777<T> = T extends (infer U)[]
  ? DeepReadonlyArray7777<U>
  : T extends object
  ? DeepReadonlyObject7777<T>
  : T;

interface DeepReadonlyArray7777<T> extends ReadonlyArray<DeepReadonly7777<T>> {}

type DeepReadonlyObject7777<T> = {
  readonly [P in keyof T]: DeepReadonly7777<T[P]>;
};

type UnionToIntersection7777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7777<T> = UnionToIntersection7777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7777<T extends unknown[], V> = [...T, V];

type TuplifyUnion7777<T, L = LastOf7777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7777<TuplifyUnion7777<Exclude<T, L>>, L>;

type DeepPartial7777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7777<T[P]> }
  : T;

type Paths7777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7777<K, Paths7777<T[K], Prev7777[D]>> : never }[keyof T]
  : never;

type Prev7777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7777 {
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

type ConfigPaths7777 = Paths7777<NestedConfig7777>;

interface HeavyProps7777 {
  config: DeepPartial7777<NestedConfig7777>;
  path?: ConfigPaths7777;
}

const HeavyComponent7777 = memo(function HeavyComponent7777({ config }: HeavyProps7777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7777.displayName = 'HeavyComponent7777';
export default HeavyComponent7777;
