'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7580<T> = T extends (infer U)[]
  ? DeepReadonlyArray7580<U>
  : T extends object
  ? DeepReadonlyObject7580<T>
  : T;

interface DeepReadonlyArray7580<T> extends ReadonlyArray<DeepReadonly7580<T>> {}

type DeepReadonlyObject7580<T> = {
  readonly [P in keyof T]: DeepReadonly7580<T[P]>;
};

type UnionToIntersection7580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7580<T> = UnionToIntersection7580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7580<T extends unknown[], V> = [...T, V];

type TuplifyUnion7580<T, L = LastOf7580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7580<TuplifyUnion7580<Exclude<T, L>>, L>;

type DeepPartial7580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7580<T[P]> }
  : T;

type Paths7580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7580<K, Paths7580<T[K], Prev7580[D]>> : never }[keyof T]
  : never;

type Prev7580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7580 {
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

type ConfigPaths7580 = Paths7580<NestedConfig7580>;

interface HeavyProps7580 {
  config: DeepPartial7580<NestedConfig7580>;
  path?: ConfigPaths7580;
}

const HeavyComponent7580 = memo(function HeavyComponent7580({ config }: HeavyProps7580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7580.displayName = 'HeavyComponent7580';
export default HeavyComponent7580;
