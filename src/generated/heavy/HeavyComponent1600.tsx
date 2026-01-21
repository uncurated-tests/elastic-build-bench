'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1600<T> = T extends (infer U)[]
  ? DeepReadonlyArray1600<U>
  : T extends object
  ? DeepReadonlyObject1600<T>
  : T;

interface DeepReadonlyArray1600<T> extends ReadonlyArray<DeepReadonly1600<T>> {}

type DeepReadonlyObject1600<T> = {
  readonly [P in keyof T]: DeepReadonly1600<T[P]>;
};

type UnionToIntersection1600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1600<T> = UnionToIntersection1600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1600<T extends unknown[], V> = [...T, V];

type TuplifyUnion1600<T, L = LastOf1600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1600<TuplifyUnion1600<Exclude<T, L>>, L>;

type DeepPartial1600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1600<T[P]> }
  : T;

type Paths1600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1600<K, Paths1600<T[K], Prev1600[D]>> : never }[keyof T]
  : never;

type Prev1600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1600 {
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

type ConfigPaths1600 = Paths1600<NestedConfig1600>;

interface HeavyProps1600 {
  config: DeepPartial1600<NestedConfig1600>;
  path?: ConfigPaths1600;
}

const HeavyComponent1600 = memo(function HeavyComponent1600({ config }: HeavyProps1600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1600.displayName = 'HeavyComponent1600';
export default HeavyComponent1600;
