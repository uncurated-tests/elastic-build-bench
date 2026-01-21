'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7841<T> = T extends (infer U)[]
  ? DeepReadonlyArray7841<U>
  : T extends object
  ? DeepReadonlyObject7841<T>
  : T;

interface DeepReadonlyArray7841<T> extends ReadonlyArray<DeepReadonly7841<T>> {}

type DeepReadonlyObject7841<T> = {
  readonly [P in keyof T]: DeepReadonly7841<T[P]>;
};

type UnionToIntersection7841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7841<T> = UnionToIntersection7841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7841<T extends unknown[], V> = [...T, V];

type TuplifyUnion7841<T, L = LastOf7841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7841<TuplifyUnion7841<Exclude<T, L>>, L>;

type DeepPartial7841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7841<T[P]> }
  : T;

type Paths7841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7841<K, Paths7841<T[K], Prev7841[D]>> : never }[keyof T]
  : never;

type Prev7841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7841 {
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

type ConfigPaths7841 = Paths7841<NestedConfig7841>;

interface HeavyProps7841 {
  config: DeepPartial7841<NestedConfig7841>;
  path?: ConfigPaths7841;
}

const HeavyComponent7841 = memo(function HeavyComponent7841({ config }: HeavyProps7841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7841.displayName = 'HeavyComponent7841';
export default HeavyComponent7841;
