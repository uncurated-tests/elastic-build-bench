'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7756<T> = T extends (infer U)[]
  ? DeepReadonlyArray7756<U>
  : T extends object
  ? DeepReadonlyObject7756<T>
  : T;

interface DeepReadonlyArray7756<T> extends ReadonlyArray<DeepReadonly7756<T>> {}

type DeepReadonlyObject7756<T> = {
  readonly [P in keyof T]: DeepReadonly7756<T[P]>;
};

type UnionToIntersection7756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7756<T> = UnionToIntersection7756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7756<T extends unknown[], V> = [...T, V];

type TuplifyUnion7756<T, L = LastOf7756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7756<TuplifyUnion7756<Exclude<T, L>>, L>;

type DeepPartial7756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7756<T[P]> }
  : T;

type Paths7756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7756<K, Paths7756<T[K], Prev7756[D]>> : never }[keyof T]
  : never;

type Prev7756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7756 {
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

type ConfigPaths7756 = Paths7756<NestedConfig7756>;

interface HeavyProps7756 {
  config: DeepPartial7756<NestedConfig7756>;
  path?: ConfigPaths7756;
}

const HeavyComponent7756 = memo(function HeavyComponent7756({ config }: HeavyProps7756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7756.displayName = 'HeavyComponent7756';
export default HeavyComponent7756;
