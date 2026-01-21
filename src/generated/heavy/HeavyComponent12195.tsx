'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12195<T> = T extends (infer U)[]
  ? DeepReadonlyArray12195<U>
  : T extends object
  ? DeepReadonlyObject12195<T>
  : T;

interface DeepReadonlyArray12195<T> extends ReadonlyArray<DeepReadonly12195<T>> {}

type DeepReadonlyObject12195<T> = {
  readonly [P in keyof T]: DeepReadonly12195<T[P]>;
};

type UnionToIntersection12195<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12195<T> = UnionToIntersection12195<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12195<T extends unknown[], V> = [...T, V];

type TuplifyUnion12195<T, L = LastOf12195<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12195<TuplifyUnion12195<Exclude<T, L>>, L>;

type DeepPartial12195<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12195<T[P]> }
  : T;

type Paths12195<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12195<K, Paths12195<T[K], Prev12195[D]>> : never }[keyof T]
  : never;

type Prev12195 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12195<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12195 {
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

type ConfigPaths12195 = Paths12195<NestedConfig12195>;

interface HeavyProps12195 {
  config: DeepPartial12195<NestedConfig12195>;
  path?: ConfigPaths12195;
}

const HeavyComponent12195 = memo(function HeavyComponent12195({ config }: HeavyProps12195) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12195) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12195 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12195: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12195.displayName = 'HeavyComponent12195';
export default HeavyComponent12195;
