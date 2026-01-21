'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7863<T> = T extends (infer U)[]
  ? DeepReadonlyArray7863<U>
  : T extends object
  ? DeepReadonlyObject7863<T>
  : T;

interface DeepReadonlyArray7863<T> extends ReadonlyArray<DeepReadonly7863<T>> {}

type DeepReadonlyObject7863<T> = {
  readonly [P in keyof T]: DeepReadonly7863<T[P]>;
};

type UnionToIntersection7863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7863<T> = UnionToIntersection7863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7863<T extends unknown[], V> = [...T, V];

type TuplifyUnion7863<T, L = LastOf7863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7863<TuplifyUnion7863<Exclude<T, L>>, L>;

type DeepPartial7863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7863<T[P]> }
  : T;

type Paths7863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7863<K, Paths7863<T[K], Prev7863[D]>> : never }[keyof T]
  : never;

type Prev7863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7863 {
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

type ConfigPaths7863 = Paths7863<NestedConfig7863>;

interface HeavyProps7863 {
  config: DeepPartial7863<NestedConfig7863>;
  path?: ConfigPaths7863;
}

const HeavyComponent7863 = memo(function HeavyComponent7863({ config }: HeavyProps7863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7863.displayName = 'HeavyComponent7863';
export default HeavyComponent7863;
