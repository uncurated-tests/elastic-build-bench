'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1897<T> = T extends (infer U)[]
  ? DeepReadonlyArray1897<U>
  : T extends object
  ? DeepReadonlyObject1897<T>
  : T;

interface DeepReadonlyArray1897<T> extends ReadonlyArray<DeepReadonly1897<T>> {}

type DeepReadonlyObject1897<T> = {
  readonly [P in keyof T]: DeepReadonly1897<T[P]>;
};

type UnionToIntersection1897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1897<T> = UnionToIntersection1897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1897<T extends unknown[], V> = [...T, V];

type TuplifyUnion1897<T, L = LastOf1897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1897<TuplifyUnion1897<Exclude<T, L>>, L>;

type DeepPartial1897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1897<T[P]> }
  : T;

type Paths1897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1897<K, Paths1897<T[K], Prev1897[D]>> : never }[keyof T]
  : never;

type Prev1897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1897 {
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

type ConfigPaths1897 = Paths1897<NestedConfig1897>;

interface HeavyProps1897 {
  config: DeepPartial1897<NestedConfig1897>;
  path?: ConfigPaths1897;
}

const HeavyComponent1897 = memo(function HeavyComponent1897({ config }: HeavyProps1897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1897.displayName = 'HeavyComponent1897';
export default HeavyComponent1897;
