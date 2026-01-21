'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7926<T> = T extends (infer U)[]
  ? DeepReadonlyArray7926<U>
  : T extends object
  ? DeepReadonlyObject7926<T>
  : T;

interface DeepReadonlyArray7926<T> extends ReadonlyArray<DeepReadonly7926<T>> {}

type DeepReadonlyObject7926<T> = {
  readonly [P in keyof T]: DeepReadonly7926<T[P]>;
};

type UnionToIntersection7926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7926<T> = UnionToIntersection7926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7926<T extends unknown[], V> = [...T, V];

type TuplifyUnion7926<T, L = LastOf7926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7926<TuplifyUnion7926<Exclude<T, L>>, L>;

type DeepPartial7926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7926<T[P]> }
  : T;

type Paths7926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7926<K, Paths7926<T[K], Prev7926[D]>> : never }[keyof T]
  : never;

type Prev7926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7926 {
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

type ConfigPaths7926 = Paths7926<NestedConfig7926>;

interface HeavyProps7926 {
  config: DeepPartial7926<NestedConfig7926>;
  path?: ConfigPaths7926;
}

const HeavyComponent7926 = memo(function HeavyComponent7926({ config }: HeavyProps7926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7926.displayName = 'HeavyComponent7926';
export default HeavyComponent7926;
