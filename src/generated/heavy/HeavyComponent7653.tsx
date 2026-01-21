'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7653<T> = T extends (infer U)[]
  ? DeepReadonlyArray7653<U>
  : T extends object
  ? DeepReadonlyObject7653<T>
  : T;

interface DeepReadonlyArray7653<T> extends ReadonlyArray<DeepReadonly7653<T>> {}

type DeepReadonlyObject7653<T> = {
  readonly [P in keyof T]: DeepReadonly7653<T[P]>;
};

type UnionToIntersection7653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7653<T> = UnionToIntersection7653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7653<T extends unknown[], V> = [...T, V];

type TuplifyUnion7653<T, L = LastOf7653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7653<TuplifyUnion7653<Exclude<T, L>>, L>;

type DeepPartial7653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7653<T[P]> }
  : T;

type Paths7653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7653<K, Paths7653<T[K], Prev7653[D]>> : never }[keyof T]
  : never;

type Prev7653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7653 {
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

type ConfigPaths7653 = Paths7653<NestedConfig7653>;

interface HeavyProps7653 {
  config: DeepPartial7653<NestedConfig7653>;
  path?: ConfigPaths7653;
}

const HeavyComponent7653 = memo(function HeavyComponent7653({ config }: HeavyProps7653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7653.displayName = 'HeavyComponent7653';
export default HeavyComponent7653;
