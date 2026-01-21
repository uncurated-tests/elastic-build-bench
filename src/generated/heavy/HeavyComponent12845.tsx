'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12845<T> = T extends (infer U)[]
  ? DeepReadonlyArray12845<U>
  : T extends object
  ? DeepReadonlyObject12845<T>
  : T;

interface DeepReadonlyArray12845<T> extends ReadonlyArray<DeepReadonly12845<T>> {}

type DeepReadonlyObject12845<T> = {
  readonly [P in keyof T]: DeepReadonly12845<T[P]>;
};

type UnionToIntersection12845<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12845<T> = UnionToIntersection12845<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12845<T extends unknown[], V> = [...T, V];

type TuplifyUnion12845<T, L = LastOf12845<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12845<TuplifyUnion12845<Exclude<T, L>>, L>;

type DeepPartial12845<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12845<T[P]> }
  : T;

type Paths12845<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12845<K, Paths12845<T[K], Prev12845[D]>> : never }[keyof T]
  : never;

type Prev12845 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12845<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12845 {
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

type ConfigPaths12845 = Paths12845<NestedConfig12845>;

interface HeavyProps12845 {
  config: DeepPartial12845<NestedConfig12845>;
  path?: ConfigPaths12845;
}

const HeavyComponent12845 = memo(function HeavyComponent12845({ config }: HeavyProps12845) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12845) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12845 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12845: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12845.displayName = 'HeavyComponent12845';
export default HeavyComponent12845;
