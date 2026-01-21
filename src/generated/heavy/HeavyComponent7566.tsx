'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7566<T> = T extends (infer U)[]
  ? DeepReadonlyArray7566<U>
  : T extends object
  ? DeepReadonlyObject7566<T>
  : T;

interface DeepReadonlyArray7566<T> extends ReadonlyArray<DeepReadonly7566<T>> {}

type DeepReadonlyObject7566<T> = {
  readonly [P in keyof T]: DeepReadonly7566<T[P]>;
};

type UnionToIntersection7566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7566<T> = UnionToIntersection7566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7566<T extends unknown[], V> = [...T, V];

type TuplifyUnion7566<T, L = LastOf7566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7566<TuplifyUnion7566<Exclude<T, L>>, L>;

type DeepPartial7566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7566<T[P]> }
  : T;

type Paths7566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7566<K, Paths7566<T[K], Prev7566[D]>> : never }[keyof T]
  : never;

type Prev7566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7566 {
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

type ConfigPaths7566 = Paths7566<NestedConfig7566>;

interface HeavyProps7566 {
  config: DeepPartial7566<NestedConfig7566>;
  path?: ConfigPaths7566;
}

const HeavyComponent7566 = memo(function HeavyComponent7566({ config }: HeavyProps7566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7566.displayName = 'HeavyComponent7566';
export default HeavyComponent7566;
