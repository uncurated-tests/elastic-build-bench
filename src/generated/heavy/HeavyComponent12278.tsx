'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12278<T> = T extends (infer U)[]
  ? DeepReadonlyArray12278<U>
  : T extends object
  ? DeepReadonlyObject12278<T>
  : T;

interface DeepReadonlyArray12278<T> extends ReadonlyArray<DeepReadonly12278<T>> {}

type DeepReadonlyObject12278<T> = {
  readonly [P in keyof T]: DeepReadonly12278<T[P]>;
};

type UnionToIntersection12278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12278<T> = UnionToIntersection12278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12278<T extends unknown[], V> = [...T, V];

type TuplifyUnion12278<T, L = LastOf12278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12278<TuplifyUnion12278<Exclude<T, L>>, L>;

type DeepPartial12278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12278<T[P]> }
  : T;

type Paths12278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12278<K, Paths12278<T[K], Prev12278[D]>> : never }[keyof T]
  : never;

type Prev12278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12278 {
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

type ConfigPaths12278 = Paths12278<NestedConfig12278>;

interface HeavyProps12278 {
  config: DeepPartial12278<NestedConfig12278>;
  path?: ConfigPaths12278;
}

const HeavyComponent12278 = memo(function HeavyComponent12278({ config }: HeavyProps12278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12278.displayName = 'HeavyComponent12278';
export default HeavyComponent12278;
