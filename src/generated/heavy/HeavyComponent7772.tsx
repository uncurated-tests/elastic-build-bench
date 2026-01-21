'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7772<T> = T extends (infer U)[]
  ? DeepReadonlyArray7772<U>
  : T extends object
  ? DeepReadonlyObject7772<T>
  : T;

interface DeepReadonlyArray7772<T> extends ReadonlyArray<DeepReadonly7772<T>> {}

type DeepReadonlyObject7772<T> = {
  readonly [P in keyof T]: DeepReadonly7772<T[P]>;
};

type UnionToIntersection7772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7772<T> = UnionToIntersection7772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7772<T extends unknown[], V> = [...T, V];

type TuplifyUnion7772<T, L = LastOf7772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7772<TuplifyUnion7772<Exclude<T, L>>, L>;

type DeepPartial7772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7772<T[P]> }
  : T;

type Paths7772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7772<K, Paths7772<T[K], Prev7772[D]>> : never }[keyof T]
  : never;

type Prev7772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7772 {
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

type ConfigPaths7772 = Paths7772<NestedConfig7772>;

interface HeavyProps7772 {
  config: DeepPartial7772<NestedConfig7772>;
  path?: ConfigPaths7772;
}

const HeavyComponent7772 = memo(function HeavyComponent7772({ config }: HeavyProps7772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7772.displayName = 'HeavyComponent7772';
export default HeavyComponent7772;
