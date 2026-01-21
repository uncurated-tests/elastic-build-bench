'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7200<T> = T extends (infer U)[]
  ? DeepReadonlyArray7200<U>
  : T extends object
  ? DeepReadonlyObject7200<T>
  : T;

interface DeepReadonlyArray7200<T> extends ReadonlyArray<DeepReadonly7200<T>> {}

type DeepReadonlyObject7200<T> = {
  readonly [P in keyof T]: DeepReadonly7200<T[P]>;
};

type UnionToIntersection7200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7200<T> = UnionToIntersection7200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7200<T extends unknown[], V> = [...T, V];

type TuplifyUnion7200<T, L = LastOf7200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7200<TuplifyUnion7200<Exclude<T, L>>, L>;

type DeepPartial7200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7200<T[P]> }
  : T;

type Paths7200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7200<K, Paths7200<T[K], Prev7200[D]>> : never }[keyof T]
  : never;

type Prev7200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7200 {
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

type ConfigPaths7200 = Paths7200<NestedConfig7200>;

interface HeavyProps7200 {
  config: DeepPartial7200<NestedConfig7200>;
  path?: ConfigPaths7200;
}

const HeavyComponent7200 = memo(function HeavyComponent7200({ config }: HeavyProps7200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7200.displayName = 'HeavyComponent7200';
export default HeavyComponent7200;
