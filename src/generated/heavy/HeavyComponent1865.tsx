'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1865<T> = T extends (infer U)[]
  ? DeepReadonlyArray1865<U>
  : T extends object
  ? DeepReadonlyObject1865<T>
  : T;

interface DeepReadonlyArray1865<T> extends ReadonlyArray<DeepReadonly1865<T>> {}

type DeepReadonlyObject1865<T> = {
  readonly [P in keyof T]: DeepReadonly1865<T[P]>;
};

type UnionToIntersection1865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1865<T> = UnionToIntersection1865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1865<T extends unknown[], V> = [...T, V];

type TuplifyUnion1865<T, L = LastOf1865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1865<TuplifyUnion1865<Exclude<T, L>>, L>;

type DeepPartial1865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1865<T[P]> }
  : T;

type Paths1865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1865<K, Paths1865<T[K], Prev1865[D]>> : never }[keyof T]
  : never;

type Prev1865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1865 {
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

type ConfigPaths1865 = Paths1865<NestedConfig1865>;

interface HeavyProps1865 {
  config: DeepPartial1865<NestedConfig1865>;
  path?: ConfigPaths1865;
}

const HeavyComponent1865 = memo(function HeavyComponent1865({ config }: HeavyProps1865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1865.displayName = 'HeavyComponent1865';
export default HeavyComponent1865;
