'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1726<T> = T extends (infer U)[]
  ? DeepReadonlyArray1726<U>
  : T extends object
  ? DeepReadonlyObject1726<T>
  : T;

interface DeepReadonlyArray1726<T> extends ReadonlyArray<DeepReadonly1726<T>> {}

type DeepReadonlyObject1726<T> = {
  readonly [P in keyof T]: DeepReadonly1726<T[P]>;
};

type UnionToIntersection1726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1726<T> = UnionToIntersection1726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1726<T extends unknown[], V> = [...T, V];

type TuplifyUnion1726<T, L = LastOf1726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1726<TuplifyUnion1726<Exclude<T, L>>, L>;

type DeepPartial1726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1726<T[P]> }
  : T;

type Paths1726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1726<K, Paths1726<T[K], Prev1726[D]>> : never }[keyof T]
  : never;

type Prev1726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1726 {
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

type ConfigPaths1726 = Paths1726<NestedConfig1726>;

interface HeavyProps1726 {
  config: DeepPartial1726<NestedConfig1726>;
  path?: ConfigPaths1726;
}

const HeavyComponent1726 = memo(function HeavyComponent1726({ config }: HeavyProps1726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1726.displayName = 'HeavyComponent1726';
export default HeavyComponent1726;
