'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2758<T> = T extends (infer U)[]
  ? DeepReadonlyArray2758<U>
  : T extends object
  ? DeepReadonlyObject2758<T>
  : T;

interface DeepReadonlyArray2758<T> extends ReadonlyArray<DeepReadonly2758<T>> {}

type DeepReadonlyObject2758<T> = {
  readonly [P in keyof T]: DeepReadonly2758<T[P]>;
};

type UnionToIntersection2758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2758<T> = UnionToIntersection2758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2758<T extends unknown[], V> = [...T, V];

type TuplifyUnion2758<T, L = LastOf2758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2758<TuplifyUnion2758<Exclude<T, L>>, L>;

type DeepPartial2758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2758<T[P]> }
  : T;

type Paths2758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2758<K, Paths2758<T[K], Prev2758[D]>> : never }[keyof T]
  : never;

type Prev2758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2758 {
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

type ConfigPaths2758 = Paths2758<NestedConfig2758>;

interface HeavyProps2758 {
  config: DeepPartial2758<NestedConfig2758>;
  path?: ConfigPaths2758;
}

const HeavyComponent2758 = memo(function HeavyComponent2758({ config }: HeavyProps2758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2758.displayName = 'HeavyComponent2758';
export default HeavyComponent2758;
