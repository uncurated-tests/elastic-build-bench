'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7004<T> = T extends (infer U)[]
  ? DeepReadonlyArray7004<U>
  : T extends object
  ? DeepReadonlyObject7004<T>
  : T;

interface DeepReadonlyArray7004<T> extends ReadonlyArray<DeepReadonly7004<T>> {}

type DeepReadonlyObject7004<T> = {
  readonly [P in keyof T]: DeepReadonly7004<T[P]>;
};

type UnionToIntersection7004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7004<T> = UnionToIntersection7004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7004<T extends unknown[], V> = [...T, V];

type TuplifyUnion7004<T, L = LastOf7004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7004<TuplifyUnion7004<Exclude<T, L>>, L>;

type DeepPartial7004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7004<T[P]> }
  : T;

type Paths7004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7004<K, Paths7004<T[K], Prev7004[D]>> : never }[keyof T]
  : never;

type Prev7004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7004 {
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

type ConfigPaths7004 = Paths7004<NestedConfig7004>;

interface HeavyProps7004 {
  config: DeepPartial7004<NestedConfig7004>;
  path?: ConfigPaths7004;
}

const HeavyComponent7004 = memo(function HeavyComponent7004({ config }: HeavyProps7004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7004.displayName = 'HeavyComponent7004';
export default HeavyComponent7004;
