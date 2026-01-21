'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2657<T> = T extends (infer U)[]
  ? DeepReadonlyArray2657<U>
  : T extends object
  ? DeepReadonlyObject2657<T>
  : T;

interface DeepReadonlyArray2657<T> extends ReadonlyArray<DeepReadonly2657<T>> {}

type DeepReadonlyObject2657<T> = {
  readonly [P in keyof T]: DeepReadonly2657<T[P]>;
};

type UnionToIntersection2657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2657<T> = UnionToIntersection2657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2657<T extends unknown[], V> = [...T, V];

type TuplifyUnion2657<T, L = LastOf2657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2657<TuplifyUnion2657<Exclude<T, L>>, L>;

type DeepPartial2657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2657<T[P]> }
  : T;

type Paths2657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2657<K, Paths2657<T[K], Prev2657[D]>> : never }[keyof T]
  : never;

type Prev2657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2657 {
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

type ConfigPaths2657 = Paths2657<NestedConfig2657>;

interface HeavyProps2657 {
  config: DeepPartial2657<NestedConfig2657>;
  path?: ConfigPaths2657;
}

const HeavyComponent2657 = memo(function HeavyComponent2657({ config }: HeavyProps2657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2657.displayName = 'HeavyComponent2657';
export default HeavyComponent2657;
