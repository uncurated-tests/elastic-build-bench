'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1150<T> = T extends (infer U)[]
  ? DeepReadonlyArray1150<U>
  : T extends object
  ? DeepReadonlyObject1150<T>
  : T;

interface DeepReadonlyArray1150<T> extends ReadonlyArray<DeepReadonly1150<T>> {}

type DeepReadonlyObject1150<T> = {
  readonly [P in keyof T]: DeepReadonly1150<T[P]>;
};

type UnionToIntersection1150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1150<T> = UnionToIntersection1150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1150<T extends unknown[], V> = [...T, V];

type TuplifyUnion1150<T, L = LastOf1150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1150<TuplifyUnion1150<Exclude<T, L>>, L>;

type DeepPartial1150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1150<T[P]> }
  : T;

type Paths1150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1150<K, Paths1150<T[K], Prev1150[D]>> : never }[keyof T]
  : never;

type Prev1150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1150 {
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

type ConfigPaths1150 = Paths1150<NestedConfig1150>;

interface HeavyProps1150 {
  config: DeepPartial1150<NestedConfig1150>;
  path?: ConfigPaths1150;
}

const HeavyComponent1150 = memo(function HeavyComponent1150({ config }: HeavyProps1150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1150.displayName = 'HeavyComponent1150';
export default HeavyComponent1150;
