'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7158<T> = T extends (infer U)[]
  ? DeepReadonlyArray7158<U>
  : T extends object
  ? DeepReadonlyObject7158<T>
  : T;

interface DeepReadonlyArray7158<T> extends ReadonlyArray<DeepReadonly7158<T>> {}

type DeepReadonlyObject7158<T> = {
  readonly [P in keyof T]: DeepReadonly7158<T[P]>;
};

type UnionToIntersection7158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7158<T> = UnionToIntersection7158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7158<T extends unknown[], V> = [...T, V];

type TuplifyUnion7158<T, L = LastOf7158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7158<TuplifyUnion7158<Exclude<T, L>>, L>;

type DeepPartial7158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7158<T[P]> }
  : T;

type Paths7158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7158<K, Paths7158<T[K], Prev7158[D]>> : never }[keyof T]
  : never;

type Prev7158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7158 {
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

type ConfigPaths7158 = Paths7158<NestedConfig7158>;

interface HeavyProps7158 {
  config: DeepPartial7158<NestedConfig7158>;
  path?: ConfigPaths7158;
}

const HeavyComponent7158 = memo(function HeavyComponent7158({ config }: HeavyProps7158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7158.displayName = 'HeavyComponent7158';
export default HeavyComponent7158;
