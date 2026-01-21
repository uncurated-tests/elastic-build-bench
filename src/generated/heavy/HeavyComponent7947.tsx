'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7947<T> = T extends (infer U)[]
  ? DeepReadonlyArray7947<U>
  : T extends object
  ? DeepReadonlyObject7947<T>
  : T;

interface DeepReadonlyArray7947<T> extends ReadonlyArray<DeepReadonly7947<T>> {}

type DeepReadonlyObject7947<T> = {
  readonly [P in keyof T]: DeepReadonly7947<T[P]>;
};

type UnionToIntersection7947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7947<T> = UnionToIntersection7947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7947<T extends unknown[], V> = [...T, V];

type TuplifyUnion7947<T, L = LastOf7947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7947<TuplifyUnion7947<Exclude<T, L>>, L>;

type DeepPartial7947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7947<T[P]> }
  : T;

type Paths7947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7947<K, Paths7947<T[K], Prev7947[D]>> : never }[keyof T]
  : never;

type Prev7947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7947 {
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

type ConfigPaths7947 = Paths7947<NestedConfig7947>;

interface HeavyProps7947 {
  config: DeepPartial7947<NestedConfig7947>;
  path?: ConfigPaths7947;
}

const HeavyComponent7947 = memo(function HeavyComponent7947({ config }: HeavyProps7947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7947.displayName = 'HeavyComponent7947';
export default HeavyComponent7947;
