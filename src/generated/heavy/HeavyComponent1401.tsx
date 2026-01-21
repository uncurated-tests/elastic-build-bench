'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1401<T> = T extends (infer U)[]
  ? DeepReadonlyArray1401<U>
  : T extends object
  ? DeepReadonlyObject1401<T>
  : T;

interface DeepReadonlyArray1401<T> extends ReadonlyArray<DeepReadonly1401<T>> {}

type DeepReadonlyObject1401<T> = {
  readonly [P in keyof T]: DeepReadonly1401<T[P]>;
};

type UnionToIntersection1401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1401<T> = UnionToIntersection1401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1401<T extends unknown[], V> = [...T, V];

type TuplifyUnion1401<T, L = LastOf1401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1401<TuplifyUnion1401<Exclude<T, L>>, L>;

type DeepPartial1401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1401<T[P]> }
  : T;

type Paths1401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1401<K, Paths1401<T[K], Prev1401[D]>> : never }[keyof T]
  : never;

type Prev1401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1401 {
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

type ConfigPaths1401 = Paths1401<NestedConfig1401>;

interface HeavyProps1401 {
  config: DeepPartial1401<NestedConfig1401>;
  path?: ConfigPaths1401;
}

const HeavyComponent1401 = memo(function HeavyComponent1401({ config }: HeavyProps1401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1401.displayName = 'HeavyComponent1401';
export default HeavyComponent1401;
