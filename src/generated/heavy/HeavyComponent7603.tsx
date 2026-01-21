'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7603<T> = T extends (infer U)[]
  ? DeepReadonlyArray7603<U>
  : T extends object
  ? DeepReadonlyObject7603<T>
  : T;

interface DeepReadonlyArray7603<T> extends ReadonlyArray<DeepReadonly7603<T>> {}

type DeepReadonlyObject7603<T> = {
  readonly [P in keyof T]: DeepReadonly7603<T[P]>;
};

type UnionToIntersection7603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7603<T> = UnionToIntersection7603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7603<T extends unknown[], V> = [...T, V];

type TuplifyUnion7603<T, L = LastOf7603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7603<TuplifyUnion7603<Exclude<T, L>>, L>;

type DeepPartial7603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7603<T[P]> }
  : T;

type Paths7603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7603<K, Paths7603<T[K], Prev7603[D]>> : never }[keyof T]
  : never;

type Prev7603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7603 {
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

type ConfigPaths7603 = Paths7603<NestedConfig7603>;

interface HeavyProps7603 {
  config: DeepPartial7603<NestedConfig7603>;
  path?: ConfigPaths7603;
}

const HeavyComponent7603 = memo(function HeavyComponent7603({ config }: HeavyProps7603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7603.displayName = 'HeavyComponent7603';
export default HeavyComponent7603;
