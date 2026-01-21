'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7901<T> = T extends (infer U)[]
  ? DeepReadonlyArray7901<U>
  : T extends object
  ? DeepReadonlyObject7901<T>
  : T;

interface DeepReadonlyArray7901<T> extends ReadonlyArray<DeepReadonly7901<T>> {}

type DeepReadonlyObject7901<T> = {
  readonly [P in keyof T]: DeepReadonly7901<T[P]>;
};

type UnionToIntersection7901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7901<T> = UnionToIntersection7901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7901<T extends unknown[], V> = [...T, V];

type TuplifyUnion7901<T, L = LastOf7901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7901<TuplifyUnion7901<Exclude<T, L>>, L>;

type DeepPartial7901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7901<T[P]> }
  : T;

type Paths7901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7901<K, Paths7901<T[K], Prev7901[D]>> : never }[keyof T]
  : never;

type Prev7901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7901 {
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

type ConfigPaths7901 = Paths7901<NestedConfig7901>;

interface HeavyProps7901 {
  config: DeepPartial7901<NestedConfig7901>;
  path?: ConfigPaths7901;
}

const HeavyComponent7901 = memo(function HeavyComponent7901({ config }: HeavyProps7901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7901.displayName = 'HeavyComponent7901';
export default HeavyComponent7901;
