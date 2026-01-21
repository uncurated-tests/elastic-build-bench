'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7902<T> = T extends (infer U)[]
  ? DeepReadonlyArray7902<U>
  : T extends object
  ? DeepReadonlyObject7902<T>
  : T;

interface DeepReadonlyArray7902<T> extends ReadonlyArray<DeepReadonly7902<T>> {}

type DeepReadonlyObject7902<T> = {
  readonly [P in keyof T]: DeepReadonly7902<T[P]>;
};

type UnionToIntersection7902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7902<T> = UnionToIntersection7902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7902<T extends unknown[], V> = [...T, V];

type TuplifyUnion7902<T, L = LastOf7902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7902<TuplifyUnion7902<Exclude<T, L>>, L>;

type DeepPartial7902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7902<T[P]> }
  : T;

type Paths7902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7902<K, Paths7902<T[K], Prev7902[D]>> : never }[keyof T]
  : never;

type Prev7902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7902 {
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

type ConfigPaths7902 = Paths7902<NestedConfig7902>;

interface HeavyProps7902 {
  config: DeepPartial7902<NestedConfig7902>;
  path?: ConfigPaths7902;
}

const HeavyComponent7902 = memo(function HeavyComponent7902({ config }: HeavyProps7902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7902.displayName = 'HeavyComponent7902';
export default HeavyComponent7902;
