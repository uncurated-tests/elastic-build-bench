'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1000<T> = T extends (infer U)[]
  ? DeepReadonlyArray1000<U>
  : T extends object
  ? DeepReadonlyObject1000<T>
  : T;

interface DeepReadonlyArray1000<T> extends ReadonlyArray<DeepReadonly1000<T>> {}

type DeepReadonlyObject1000<T> = {
  readonly [P in keyof T]: DeepReadonly1000<T[P]>;
};

type UnionToIntersection1000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1000<T> = UnionToIntersection1000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1000<T extends unknown[], V> = [...T, V];

type TuplifyUnion1000<T, L = LastOf1000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1000<TuplifyUnion1000<Exclude<T, L>>, L>;

type DeepPartial1000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1000<T[P]> }
  : T;

type Paths1000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1000<K, Paths1000<T[K], Prev1000[D]>> : never }[keyof T]
  : never;

type Prev1000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1000 {
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

type ConfigPaths1000 = Paths1000<NestedConfig1000>;

interface HeavyProps1000 {
  config: DeepPartial1000<NestedConfig1000>;
  path?: ConfigPaths1000;
}

const HeavyComponent1000 = memo(function HeavyComponent1000({ config }: HeavyProps1000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1000.displayName = 'HeavyComponent1000';
export default HeavyComponent1000;
