'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1385<T> = T extends (infer U)[]
  ? DeepReadonlyArray1385<U>
  : T extends object
  ? DeepReadonlyObject1385<T>
  : T;

interface DeepReadonlyArray1385<T> extends ReadonlyArray<DeepReadonly1385<T>> {}

type DeepReadonlyObject1385<T> = {
  readonly [P in keyof T]: DeepReadonly1385<T[P]>;
};

type UnionToIntersection1385<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1385<T> = UnionToIntersection1385<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1385<T extends unknown[], V> = [...T, V];

type TuplifyUnion1385<T, L = LastOf1385<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1385<TuplifyUnion1385<Exclude<T, L>>, L>;

type DeepPartial1385<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1385<T[P]> }
  : T;

type Paths1385<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1385<K, Paths1385<T[K], Prev1385[D]>> : never }[keyof T]
  : never;

type Prev1385 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1385<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1385 {
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

type ConfigPaths1385 = Paths1385<NestedConfig1385>;

interface HeavyProps1385 {
  config: DeepPartial1385<NestedConfig1385>;
  path?: ConfigPaths1385;
}

const HeavyComponent1385 = memo(function HeavyComponent1385({ config }: HeavyProps1385) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1385) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1385 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1385: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1385.displayName = 'HeavyComponent1385';
export default HeavyComponent1385;
