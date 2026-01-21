'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7722<T> = T extends (infer U)[]
  ? DeepReadonlyArray7722<U>
  : T extends object
  ? DeepReadonlyObject7722<T>
  : T;

interface DeepReadonlyArray7722<T> extends ReadonlyArray<DeepReadonly7722<T>> {}

type DeepReadonlyObject7722<T> = {
  readonly [P in keyof T]: DeepReadonly7722<T[P]>;
};

type UnionToIntersection7722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7722<T> = UnionToIntersection7722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7722<T extends unknown[], V> = [...T, V];

type TuplifyUnion7722<T, L = LastOf7722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7722<TuplifyUnion7722<Exclude<T, L>>, L>;

type DeepPartial7722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7722<T[P]> }
  : T;

type Paths7722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7722<K, Paths7722<T[K], Prev7722[D]>> : never }[keyof T]
  : never;

type Prev7722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7722 {
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

type ConfigPaths7722 = Paths7722<NestedConfig7722>;

interface HeavyProps7722 {
  config: DeepPartial7722<NestedConfig7722>;
  path?: ConfigPaths7722;
}

const HeavyComponent7722 = memo(function HeavyComponent7722({ config }: HeavyProps7722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7722.displayName = 'HeavyComponent7722';
export default HeavyComponent7722;
