'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12217<T> = T extends (infer U)[]
  ? DeepReadonlyArray12217<U>
  : T extends object
  ? DeepReadonlyObject12217<T>
  : T;

interface DeepReadonlyArray12217<T> extends ReadonlyArray<DeepReadonly12217<T>> {}

type DeepReadonlyObject12217<T> = {
  readonly [P in keyof T]: DeepReadonly12217<T[P]>;
};

type UnionToIntersection12217<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12217<T> = UnionToIntersection12217<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12217<T extends unknown[], V> = [...T, V];

type TuplifyUnion12217<T, L = LastOf12217<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12217<TuplifyUnion12217<Exclude<T, L>>, L>;

type DeepPartial12217<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12217<T[P]> }
  : T;

type Paths12217<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12217<K, Paths12217<T[K], Prev12217[D]>> : never }[keyof T]
  : never;

type Prev12217 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12217<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12217 {
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

type ConfigPaths12217 = Paths12217<NestedConfig12217>;

interface HeavyProps12217 {
  config: DeepPartial12217<NestedConfig12217>;
  path?: ConfigPaths12217;
}

const HeavyComponent12217 = memo(function HeavyComponent12217({ config }: HeavyProps12217) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12217) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12217 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12217: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12217.displayName = 'HeavyComponent12217';
export default HeavyComponent12217;
