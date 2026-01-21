'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12641<T> = T extends (infer U)[]
  ? DeepReadonlyArray12641<U>
  : T extends object
  ? DeepReadonlyObject12641<T>
  : T;

interface DeepReadonlyArray12641<T> extends ReadonlyArray<DeepReadonly12641<T>> {}

type DeepReadonlyObject12641<T> = {
  readonly [P in keyof T]: DeepReadonly12641<T[P]>;
};

type UnionToIntersection12641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12641<T> = UnionToIntersection12641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12641<T extends unknown[], V> = [...T, V];

type TuplifyUnion12641<T, L = LastOf12641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12641<TuplifyUnion12641<Exclude<T, L>>, L>;

type DeepPartial12641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12641<T[P]> }
  : T;

type Paths12641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12641<K, Paths12641<T[K], Prev12641[D]>> : never }[keyof T]
  : never;

type Prev12641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12641 {
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

type ConfigPaths12641 = Paths12641<NestedConfig12641>;

interface HeavyProps12641 {
  config: DeepPartial12641<NestedConfig12641>;
  path?: ConfigPaths12641;
}

const HeavyComponent12641 = memo(function HeavyComponent12641({ config }: HeavyProps12641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12641.displayName = 'HeavyComponent12641';
export default HeavyComponent12641;
