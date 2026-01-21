'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1420<T> = T extends (infer U)[]
  ? DeepReadonlyArray1420<U>
  : T extends object
  ? DeepReadonlyObject1420<T>
  : T;

interface DeepReadonlyArray1420<T> extends ReadonlyArray<DeepReadonly1420<T>> {}

type DeepReadonlyObject1420<T> = {
  readonly [P in keyof T]: DeepReadonly1420<T[P]>;
};

type UnionToIntersection1420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1420<T> = UnionToIntersection1420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1420<T extends unknown[], V> = [...T, V];

type TuplifyUnion1420<T, L = LastOf1420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1420<TuplifyUnion1420<Exclude<T, L>>, L>;

type DeepPartial1420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1420<T[P]> }
  : T;

type Paths1420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1420<K, Paths1420<T[K], Prev1420[D]>> : never }[keyof T]
  : never;

type Prev1420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1420 {
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

type ConfigPaths1420 = Paths1420<NestedConfig1420>;

interface HeavyProps1420 {
  config: DeepPartial1420<NestedConfig1420>;
  path?: ConfigPaths1420;
}

const HeavyComponent1420 = memo(function HeavyComponent1420({ config }: HeavyProps1420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1420.displayName = 'HeavyComponent1420';
export default HeavyComponent1420;
