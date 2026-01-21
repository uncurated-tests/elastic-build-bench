'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7086<T> = T extends (infer U)[]
  ? DeepReadonlyArray7086<U>
  : T extends object
  ? DeepReadonlyObject7086<T>
  : T;

interface DeepReadonlyArray7086<T> extends ReadonlyArray<DeepReadonly7086<T>> {}

type DeepReadonlyObject7086<T> = {
  readonly [P in keyof T]: DeepReadonly7086<T[P]>;
};

type UnionToIntersection7086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7086<T> = UnionToIntersection7086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7086<T extends unknown[], V> = [...T, V];

type TuplifyUnion7086<T, L = LastOf7086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7086<TuplifyUnion7086<Exclude<T, L>>, L>;

type DeepPartial7086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7086<T[P]> }
  : T;

type Paths7086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7086<K, Paths7086<T[K], Prev7086[D]>> : never }[keyof T]
  : never;

type Prev7086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7086 {
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

type ConfigPaths7086 = Paths7086<NestedConfig7086>;

interface HeavyProps7086 {
  config: DeepPartial7086<NestedConfig7086>;
  path?: ConfigPaths7086;
}

const HeavyComponent7086 = memo(function HeavyComponent7086({ config }: HeavyProps7086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7086.displayName = 'HeavyComponent7086';
export default HeavyComponent7086;
