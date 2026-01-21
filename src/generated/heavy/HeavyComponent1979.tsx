'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1979<T> = T extends (infer U)[]
  ? DeepReadonlyArray1979<U>
  : T extends object
  ? DeepReadonlyObject1979<T>
  : T;

interface DeepReadonlyArray1979<T> extends ReadonlyArray<DeepReadonly1979<T>> {}

type DeepReadonlyObject1979<T> = {
  readonly [P in keyof T]: DeepReadonly1979<T[P]>;
};

type UnionToIntersection1979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1979<T> = UnionToIntersection1979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1979<T extends unknown[], V> = [...T, V];

type TuplifyUnion1979<T, L = LastOf1979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1979<TuplifyUnion1979<Exclude<T, L>>, L>;

type DeepPartial1979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1979<T[P]> }
  : T;

type Paths1979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1979<K, Paths1979<T[K], Prev1979[D]>> : never }[keyof T]
  : never;

type Prev1979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1979 {
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

type ConfigPaths1979 = Paths1979<NestedConfig1979>;

interface HeavyProps1979 {
  config: DeepPartial1979<NestedConfig1979>;
  path?: ConfigPaths1979;
}

const HeavyComponent1979 = memo(function HeavyComponent1979({ config }: HeavyProps1979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1979.displayName = 'HeavyComponent1979';
export default HeavyComponent1979;
