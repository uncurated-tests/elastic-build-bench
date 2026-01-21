'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12549<T> = T extends (infer U)[]
  ? DeepReadonlyArray12549<U>
  : T extends object
  ? DeepReadonlyObject12549<T>
  : T;

interface DeepReadonlyArray12549<T> extends ReadonlyArray<DeepReadonly12549<T>> {}

type DeepReadonlyObject12549<T> = {
  readonly [P in keyof T]: DeepReadonly12549<T[P]>;
};

type UnionToIntersection12549<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12549<T> = UnionToIntersection12549<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12549<T extends unknown[], V> = [...T, V];

type TuplifyUnion12549<T, L = LastOf12549<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12549<TuplifyUnion12549<Exclude<T, L>>, L>;

type DeepPartial12549<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12549<T[P]> }
  : T;

type Paths12549<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12549<K, Paths12549<T[K], Prev12549[D]>> : never }[keyof T]
  : never;

type Prev12549 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12549<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12549 {
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

type ConfigPaths12549 = Paths12549<NestedConfig12549>;

interface HeavyProps12549 {
  config: DeepPartial12549<NestedConfig12549>;
  path?: ConfigPaths12549;
}

const HeavyComponent12549 = memo(function HeavyComponent12549({ config }: HeavyProps12549) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12549) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12549 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12549: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12549.displayName = 'HeavyComponent12549';
export default HeavyComponent12549;
