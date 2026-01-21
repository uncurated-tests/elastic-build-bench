'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1178<T> = T extends (infer U)[]
  ? DeepReadonlyArray1178<U>
  : T extends object
  ? DeepReadonlyObject1178<T>
  : T;

interface DeepReadonlyArray1178<T> extends ReadonlyArray<DeepReadonly1178<T>> {}

type DeepReadonlyObject1178<T> = {
  readonly [P in keyof T]: DeepReadonly1178<T[P]>;
};

type UnionToIntersection1178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1178<T> = UnionToIntersection1178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1178<T extends unknown[], V> = [...T, V];

type TuplifyUnion1178<T, L = LastOf1178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1178<TuplifyUnion1178<Exclude<T, L>>, L>;

type DeepPartial1178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1178<T[P]> }
  : T;

type Paths1178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1178<K, Paths1178<T[K], Prev1178[D]>> : never }[keyof T]
  : never;

type Prev1178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1178 {
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

type ConfigPaths1178 = Paths1178<NestedConfig1178>;

interface HeavyProps1178 {
  config: DeepPartial1178<NestedConfig1178>;
  path?: ConfigPaths1178;
}

const HeavyComponent1178 = memo(function HeavyComponent1178({ config }: HeavyProps1178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1178.displayName = 'HeavyComponent1178';
export default HeavyComponent1178;
