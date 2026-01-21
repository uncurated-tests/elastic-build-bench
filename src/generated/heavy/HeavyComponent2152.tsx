'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2152<T> = T extends (infer U)[]
  ? DeepReadonlyArray2152<U>
  : T extends object
  ? DeepReadonlyObject2152<T>
  : T;

interface DeepReadonlyArray2152<T> extends ReadonlyArray<DeepReadonly2152<T>> {}

type DeepReadonlyObject2152<T> = {
  readonly [P in keyof T]: DeepReadonly2152<T[P]>;
};

type UnionToIntersection2152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2152<T> = UnionToIntersection2152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2152<T extends unknown[], V> = [...T, V];

type TuplifyUnion2152<T, L = LastOf2152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2152<TuplifyUnion2152<Exclude<T, L>>, L>;

type DeepPartial2152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2152<T[P]> }
  : T;

type Paths2152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2152<K, Paths2152<T[K], Prev2152[D]>> : never }[keyof T]
  : never;

type Prev2152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2152 {
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

type ConfigPaths2152 = Paths2152<NestedConfig2152>;

interface HeavyProps2152 {
  config: DeepPartial2152<NestedConfig2152>;
  path?: ConfigPaths2152;
}

const HeavyComponent2152 = memo(function HeavyComponent2152({ config }: HeavyProps2152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2152.displayName = 'HeavyComponent2152';
export default HeavyComponent2152;
