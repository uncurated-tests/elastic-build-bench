'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7987<T> = T extends (infer U)[]
  ? DeepReadonlyArray7987<U>
  : T extends object
  ? DeepReadonlyObject7987<T>
  : T;

interface DeepReadonlyArray7987<T> extends ReadonlyArray<DeepReadonly7987<T>> {}

type DeepReadonlyObject7987<T> = {
  readonly [P in keyof T]: DeepReadonly7987<T[P]>;
};

type UnionToIntersection7987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7987<T> = UnionToIntersection7987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7987<T extends unknown[], V> = [...T, V];

type TuplifyUnion7987<T, L = LastOf7987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7987<TuplifyUnion7987<Exclude<T, L>>, L>;

type DeepPartial7987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7987<T[P]> }
  : T;

type Paths7987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7987<K, Paths7987<T[K], Prev7987[D]>> : never }[keyof T]
  : never;

type Prev7987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7987 {
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

type ConfigPaths7987 = Paths7987<NestedConfig7987>;

interface HeavyProps7987 {
  config: DeepPartial7987<NestedConfig7987>;
  path?: ConfigPaths7987;
}

const HeavyComponent7987 = memo(function HeavyComponent7987({ config }: HeavyProps7987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7987.displayName = 'HeavyComponent7987';
export default HeavyComponent7987;
