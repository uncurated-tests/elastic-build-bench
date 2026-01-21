'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7114<T> = T extends (infer U)[]
  ? DeepReadonlyArray7114<U>
  : T extends object
  ? DeepReadonlyObject7114<T>
  : T;

interface DeepReadonlyArray7114<T> extends ReadonlyArray<DeepReadonly7114<T>> {}

type DeepReadonlyObject7114<T> = {
  readonly [P in keyof T]: DeepReadonly7114<T[P]>;
};

type UnionToIntersection7114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7114<T> = UnionToIntersection7114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7114<T extends unknown[], V> = [...T, V];

type TuplifyUnion7114<T, L = LastOf7114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7114<TuplifyUnion7114<Exclude<T, L>>, L>;

type DeepPartial7114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7114<T[P]> }
  : T;

type Paths7114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7114<K, Paths7114<T[K], Prev7114[D]>> : never }[keyof T]
  : never;

type Prev7114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7114 {
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

type ConfigPaths7114 = Paths7114<NestedConfig7114>;

interface HeavyProps7114 {
  config: DeepPartial7114<NestedConfig7114>;
  path?: ConfigPaths7114;
}

const HeavyComponent7114 = memo(function HeavyComponent7114({ config }: HeavyProps7114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7114.displayName = 'HeavyComponent7114';
export default HeavyComponent7114;
