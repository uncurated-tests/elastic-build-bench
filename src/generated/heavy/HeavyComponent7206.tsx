'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7206<T> = T extends (infer U)[]
  ? DeepReadonlyArray7206<U>
  : T extends object
  ? DeepReadonlyObject7206<T>
  : T;

interface DeepReadonlyArray7206<T> extends ReadonlyArray<DeepReadonly7206<T>> {}

type DeepReadonlyObject7206<T> = {
  readonly [P in keyof T]: DeepReadonly7206<T[P]>;
};

type UnionToIntersection7206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7206<T> = UnionToIntersection7206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7206<T extends unknown[], V> = [...T, V];

type TuplifyUnion7206<T, L = LastOf7206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7206<TuplifyUnion7206<Exclude<T, L>>, L>;

type DeepPartial7206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7206<T[P]> }
  : T;

type Paths7206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7206<K, Paths7206<T[K], Prev7206[D]>> : never }[keyof T]
  : never;

type Prev7206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7206 {
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

type ConfigPaths7206 = Paths7206<NestedConfig7206>;

interface HeavyProps7206 {
  config: DeepPartial7206<NestedConfig7206>;
  path?: ConfigPaths7206;
}

const HeavyComponent7206 = memo(function HeavyComponent7206({ config }: HeavyProps7206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7206.displayName = 'HeavyComponent7206';
export default HeavyComponent7206;
