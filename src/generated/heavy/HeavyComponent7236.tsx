'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7236<T> = T extends (infer U)[]
  ? DeepReadonlyArray7236<U>
  : T extends object
  ? DeepReadonlyObject7236<T>
  : T;

interface DeepReadonlyArray7236<T> extends ReadonlyArray<DeepReadonly7236<T>> {}

type DeepReadonlyObject7236<T> = {
  readonly [P in keyof T]: DeepReadonly7236<T[P]>;
};

type UnionToIntersection7236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7236<T> = UnionToIntersection7236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7236<T extends unknown[], V> = [...T, V];

type TuplifyUnion7236<T, L = LastOf7236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7236<TuplifyUnion7236<Exclude<T, L>>, L>;

type DeepPartial7236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7236<T[P]> }
  : T;

type Paths7236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7236<K, Paths7236<T[K], Prev7236[D]>> : never }[keyof T]
  : never;

type Prev7236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7236 {
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

type ConfigPaths7236 = Paths7236<NestedConfig7236>;

interface HeavyProps7236 {
  config: DeepPartial7236<NestedConfig7236>;
  path?: ConfigPaths7236;
}

const HeavyComponent7236 = memo(function HeavyComponent7236({ config }: HeavyProps7236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7236.displayName = 'HeavyComponent7236';
export default HeavyComponent7236;
