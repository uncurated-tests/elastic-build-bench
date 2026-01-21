'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7606<T> = T extends (infer U)[]
  ? DeepReadonlyArray7606<U>
  : T extends object
  ? DeepReadonlyObject7606<T>
  : T;

interface DeepReadonlyArray7606<T> extends ReadonlyArray<DeepReadonly7606<T>> {}

type DeepReadonlyObject7606<T> = {
  readonly [P in keyof T]: DeepReadonly7606<T[P]>;
};

type UnionToIntersection7606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7606<T> = UnionToIntersection7606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7606<T extends unknown[], V> = [...T, V];

type TuplifyUnion7606<T, L = LastOf7606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7606<TuplifyUnion7606<Exclude<T, L>>, L>;

type DeepPartial7606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7606<T[P]> }
  : T;

type Paths7606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7606<K, Paths7606<T[K], Prev7606[D]>> : never }[keyof T]
  : never;

type Prev7606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7606 {
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

type ConfigPaths7606 = Paths7606<NestedConfig7606>;

interface HeavyProps7606 {
  config: DeepPartial7606<NestedConfig7606>;
  path?: ConfigPaths7606;
}

const HeavyComponent7606 = memo(function HeavyComponent7606({ config }: HeavyProps7606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7606.displayName = 'HeavyComponent7606';
export default HeavyComponent7606;
