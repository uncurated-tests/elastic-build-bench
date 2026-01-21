'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1045<T> = T extends (infer U)[]
  ? DeepReadonlyArray1045<U>
  : T extends object
  ? DeepReadonlyObject1045<T>
  : T;

interface DeepReadonlyArray1045<T> extends ReadonlyArray<DeepReadonly1045<T>> {}

type DeepReadonlyObject1045<T> = {
  readonly [P in keyof T]: DeepReadonly1045<T[P]>;
};

type UnionToIntersection1045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1045<T> = UnionToIntersection1045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1045<T extends unknown[], V> = [...T, V];

type TuplifyUnion1045<T, L = LastOf1045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1045<TuplifyUnion1045<Exclude<T, L>>, L>;

type DeepPartial1045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1045<T[P]> }
  : T;

type Paths1045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1045<K, Paths1045<T[K], Prev1045[D]>> : never }[keyof T]
  : never;

type Prev1045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1045 {
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

type ConfigPaths1045 = Paths1045<NestedConfig1045>;

interface HeavyProps1045 {
  config: DeepPartial1045<NestedConfig1045>;
  path?: ConfigPaths1045;
}

const HeavyComponent1045 = memo(function HeavyComponent1045({ config }: HeavyProps1045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1045.displayName = 'HeavyComponent1045';
export default HeavyComponent1045;
