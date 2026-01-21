'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2967<T> = T extends (infer U)[]
  ? DeepReadonlyArray2967<U>
  : T extends object
  ? DeepReadonlyObject2967<T>
  : T;

interface DeepReadonlyArray2967<T> extends ReadonlyArray<DeepReadonly2967<T>> {}

type DeepReadonlyObject2967<T> = {
  readonly [P in keyof T]: DeepReadonly2967<T[P]>;
};

type UnionToIntersection2967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2967<T> = UnionToIntersection2967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2967<T extends unknown[], V> = [...T, V];

type TuplifyUnion2967<T, L = LastOf2967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2967<TuplifyUnion2967<Exclude<T, L>>, L>;

type DeepPartial2967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2967<T[P]> }
  : T;

type Paths2967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2967<K, Paths2967<T[K], Prev2967[D]>> : never }[keyof T]
  : never;

type Prev2967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2967 {
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

type ConfigPaths2967 = Paths2967<NestedConfig2967>;

interface HeavyProps2967 {
  config: DeepPartial2967<NestedConfig2967>;
  path?: ConfigPaths2967;
}

const HeavyComponent2967 = memo(function HeavyComponent2967({ config }: HeavyProps2967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2967.displayName = 'HeavyComponent2967';
export default HeavyComponent2967;
