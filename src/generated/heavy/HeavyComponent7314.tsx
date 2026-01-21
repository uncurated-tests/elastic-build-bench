'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7314<T> = T extends (infer U)[]
  ? DeepReadonlyArray7314<U>
  : T extends object
  ? DeepReadonlyObject7314<T>
  : T;

interface DeepReadonlyArray7314<T> extends ReadonlyArray<DeepReadonly7314<T>> {}

type DeepReadonlyObject7314<T> = {
  readonly [P in keyof T]: DeepReadonly7314<T[P]>;
};

type UnionToIntersection7314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7314<T> = UnionToIntersection7314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7314<T extends unknown[], V> = [...T, V];

type TuplifyUnion7314<T, L = LastOf7314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7314<TuplifyUnion7314<Exclude<T, L>>, L>;

type DeepPartial7314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7314<T[P]> }
  : T;

type Paths7314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7314<K, Paths7314<T[K], Prev7314[D]>> : never }[keyof T]
  : never;

type Prev7314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7314 {
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

type ConfigPaths7314 = Paths7314<NestedConfig7314>;

interface HeavyProps7314 {
  config: DeepPartial7314<NestedConfig7314>;
  path?: ConfigPaths7314;
}

const HeavyComponent7314 = memo(function HeavyComponent7314({ config }: HeavyProps7314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7314.displayName = 'HeavyComponent7314';
export default HeavyComponent7314;
