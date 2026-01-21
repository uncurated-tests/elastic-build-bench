'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7786<T> = T extends (infer U)[]
  ? DeepReadonlyArray7786<U>
  : T extends object
  ? DeepReadonlyObject7786<T>
  : T;

interface DeepReadonlyArray7786<T> extends ReadonlyArray<DeepReadonly7786<T>> {}

type DeepReadonlyObject7786<T> = {
  readonly [P in keyof T]: DeepReadonly7786<T[P]>;
};

type UnionToIntersection7786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7786<T> = UnionToIntersection7786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7786<T extends unknown[], V> = [...T, V];

type TuplifyUnion7786<T, L = LastOf7786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7786<TuplifyUnion7786<Exclude<T, L>>, L>;

type DeepPartial7786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7786<T[P]> }
  : T;

type Paths7786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7786<K, Paths7786<T[K], Prev7786[D]>> : never }[keyof T]
  : never;

type Prev7786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7786 {
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

type ConfigPaths7786 = Paths7786<NestedConfig7786>;

interface HeavyProps7786 {
  config: DeepPartial7786<NestedConfig7786>;
  path?: ConfigPaths7786;
}

const HeavyComponent7786 = memo(function HeavyComponent7786({ config }: HeavyProps7786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7786.displayName = 'HeavyComponent7786';
export default HeavyComponent7786;
