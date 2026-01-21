'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12400<T> = T extends (infer U)[]
  ? DeepReadonlyArray12400<U>
  : T extends object
  ? DeepReadonlyObject12400<T>
  : T;

interface DeepReadonlyArray12400<T> extends ReadonlyArray<DeepReadonly12400<T>> {}

type DeepReadonlyObject12400<T> = {
  readonly [P in keyof T]: DeepReadonly12400<T[P]>;
};

type UnionToIntersection12400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12400<T> = UnionToIntersection12400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12400<T extends unknown[], V> = [...T, V];

type TuplifyUnion12400<T, L = LastOf12400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12400<TuplifyUnion12400<Exclude<T, L>>, L>;

type DeepPartial12400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12400<T[P]> }
  : T;

type Paths12400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12400<K, Paths12400<T[K], Prev12400[D]>> : never }[keyof T]
  : never;

type Prev12400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12400 {
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

type ConfigPaths12400 = Paths12400<NestedConfig12400>;

interface HeavyProps12400 {
  config: DeepPartial12400<NestedConfig12400>;
  path?: ConfigPaths12400;
}

const HeavyComponent12400 = memo(function HeavyComponent12400({ config }: HeavyProps12400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12400.displayName = 'HeavyComponent12400';
export default HeavyComponent12400;
