'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7794<T> = T extends (infer U)[]
  ? DeepReadonlyArray7794<U>
  : T extends object
  ? DeepReadonlyObject7794<T>
  : T;

interface DeepReadonlyArray7794<T> extends ReadonlyArray<DeepReadonly7794<T>> {}

type DeepReadonlyObject7794<T> = {
  readonly [P in keyof T]: DeepReadonly7794<T[P]>;
};

type UnionToIntersection7794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7794<T> = UnionToIntersection7794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7794<T extends unknown[], V> = [...T, V];

type TuplifyUnion7794<T, L = LastOf7794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7794<TuplifyUnion7794<Exclude<T, L>>, L>;

type DeepPartial7794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7794<T[P]> }
  : T;

type Paths7794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7794<K, Paths7794<T[K], Prev7794[D]>> : never }[keyof T]
  : never;

type Prev7794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7794 {
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

type ConfigPaths7794 = Paths7794<NestedConfig7794>;

interface HeavyProps7794 {
  config: DeepPartial7794<NestedConfig7794>;
  path?: ConfigPaths7794;
}

const HeavyComponent7794 = memo(function HeavyComponent7794({ config }: HeavyProps7794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7794.displayName = 'HeavyComponent7794';
export default HeavyComponent7794;
