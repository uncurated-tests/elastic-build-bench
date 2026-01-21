'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7417<T> = T extends (infer U)[]
  ? DeepReadonlyArray7417<U>
  : T extends object
  ? DeepReadonlyObject7417<T>
  : T;

interface DeepReadonlyArray7417<T> extends ReadonlyArray<DeepReadonly7417<T>> {}

type DeepReadonlyObject7417<T> = {
  readonly [P in keyof T]: DeepReadonly7417<T[P]>;
};

type UnionToIntersection7417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7417<T> = UnionToIntersection7417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7417<T extends unknown[], V> = [...T, V];

type TuplifyUnion7417<T, L = LastOf7417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7417<TuplifyUnion7417<Exclude<T, L>>, L>;

type DeepPartial7417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7417<T[P]> }
  : T;

type Paths7417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7417<K, Paths7417<T[K], Prev7417[D]>> : never }[keyof T]
  : never;

type Prev7417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7417 {
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

type ConfigPaths7417 = Paths7417<NestedConfig7417>;

interface HeavyProps7417 {
  config: DeepPartial7417<NestedConfig7417>;
  path?: ConfigPaths7417;
}

const HeavyComponent7417 = memo(function HeavyComponent7417({ config }: HeavyProps7417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7417.displayName = 'HeavyComponent7417';
export default HeavyComponent7417;
