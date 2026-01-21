'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1258<T> = T extends (infer U)[]
  ? DeepReadonlyArray1258<U>
  : T extends object
  ? DeepReadonlyObject1258<T>
  : T;

interface DeepReadonlyArray1258<T> extends ReadonlyArray<DeepReadonly1258<T>> {}

type DeepReadonlyObject1258<T> = {
  readonly [P in keyof T]: DeepReadonly1258<T[P]>;
};

type UnionToIntersection1258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1258<T> = UnionToIntersection1258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1258<T extends unknown[], V> = [...T, V];

type TuplifyUnion1258<T, L = LastOf1258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1258<TuplifyUnion1258<Exclude<T, L>>, L>;

type DeepPartial1258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1258<T[P]> }
  : T;

type Paths1258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1258<K, Paths1258<T[K], Prev1258[D]>> : never }[keyof T]
  : never;

type Prev1258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1258 {
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

type ConfigPaths1258 = Paths1258<NestedConfig1258>;

interface HeavyProps1258 {
  config: DeepPartial1258<NestedConfig1258>;
  path?: ConfigPaths1258;
}

const HeavyComponent1258 = memo(function HeavyComponent1258({ config }: HeavyProps1258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1258.displayName = 'HeavyComponent1258';
export default HeavyComponent1258;
