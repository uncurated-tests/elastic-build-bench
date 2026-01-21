'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1723<T> = T extends (infer U)[]
  ? DeepReadonlyArray1723<U>
  : T extends object
  ? DeepReadonlyObject1723<T>
  : T;

interface DeepReadonlyArray1723<T> extends ReadonlyArray<DeepReadonly1723<T>> {}

type DeepReadonlyObject1723<T> = {
  readonly [P in keyof T]: DeepReadonly1723<T[P]>;
};

type UnionToIntersection1723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1723<T> = UnionToIntersection1723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1723<T extends unknown[], V> = [...T, V];

type TuplifyUnion1723<T, L = LastOf1723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1723<TuplifyUnion1723<Exclude<T, L>>, L>;

type DeepPartial1723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1723<T[P]> }
  : T;

type Paths1723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1723<K, Paths1723<T[K], Prev1723[D]>> : never }[keyof T]
  : never;

type Prev1723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1723 {
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

type ConfigPaths1723 = Paths1723<NestedConfig1723>;

interface HeavyProps1723 {
  config: DeepPartial1723<NestedConfig1723>;
  path?: ConfigPaths1723;
}

const HeavyComponent1723 = memo(function HeavyComponent1723({ config }: HeavyProps1723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1723.displayName = 'HeavyComponent1723';
export default HeavyComponent1723;
