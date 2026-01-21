'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1153<T> = T extends (infer U)[]
  ? DeepReadonlyArray1153<U>
  : T extends object
  ? DeepReadonlyObject1153<T>
  : T;

interface DeepReadonlyArray1153<T> extends ReadonlyArray<DeepReadonly1153<T>> {}

type DeepReadonlyObject1153<T> = {
  readonly [P in keyof T]: DeepReadonly1153<T[P]>;
};

type UnionToIntersection1153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1153<T> = UnionToIntersection1153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1153<T extends unknown[], V> = [...T, V];

type TuplifyUnion1153<T, L = LastOf1153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1153<TuplifyUnion1153<Exclude<T, L>>, L>;

type DeepPartial1153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1153<T[P]> }
  : T;

type Paths1153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1153<K, Paths1153<T[K], Prev1153[D]>> : never }[keyof T]
  : never;

type Prev1153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1153 {
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

type ConfigPaths1153 = Paths1153<NestedConfig1153>;

interface HeavyProps1153 {
  config: DeepPartial1153<NestedConfig1153>;
  path?: ConfigPaths1153;
}

const HeavyComponent1153 = memo(function HeavyComponent1153({ config }: HeavyProps1153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1153.displayName = 'HeavyComponent1153';
export default HeavyComponent1153;
