'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7295<T> = T extends (infer U)[]
  ? DeepReadonlyArray7295<U>
  : T extends object
  ? DeepReadonlyObject7295<T>
  : T;

interface DeepReadonlyArray7295<T> extends ReadonlyArray<DeepReadonly7295<T>> {}

type DeepReadonlyObject7295<T> = {
  readonly [P in keyof T]: DeepReadonly7295<T[P]>;
};

type UnionToIntersection7295<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7295<T> = UnionToIntersection7295<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7295<T extends unknown[], V> = [...T, V];

type TuplifyUnion7295<T, L = LastOf7295<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7295<TuplifyUnion7295<Exclude<T, L>>, L>;

type DeepPartial7295<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7295<T[P]> }
  : T;

type Paths7295<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7295<K, Paths7295<T[K], Prev7295[D]>> : never }[keyof T]
  : never;

type Prev7295 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7295<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7295 {
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

type ConfigPaths7295 = Paths7295<NestedConfig7295>;

interface HeavyProps7295 {
  config: DeepPartial7295<NestedConfig7295>;
  path?: ConfigPaths7295;
}

const HeavyComponent7295 = memo(function HeavyComponent7295({ config }: HeavyProps7295) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7295) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7295 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7295: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7295.displayName = 'HeavyComponent7295';
export default HeavyComponent7295;
