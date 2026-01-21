'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1018<T> = T extends (infer U)[]
  ? DeepReadonlyArray1018<U>
  : T extends object
  ? DeepReadonlyObject1018<T>
  : T;

interface DeepReadonlyArray1018<T> extends ReadonlyArray<DeepReadonly1018<T>> {}

type DeepReadonlyObject1018<T> = {
  readonly [P in keyof T]: DeepReadonly1018<T[P]>;
};

type UnionToIntersection1018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1018<T> = UnionToIntersection1018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1018<T extends unknown[], V> = [...T, V];

type TuplifyUnion1018<T, L = LastOf1018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1018<TuplifyUnion1018<Exclude<T, L>>, L>;

type DeepPartial1018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1018<T[P]> }
  : T;

type Paths1018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1018<K, Paths1018<T[K], Prev1018[D]>> : never }[keyof T]
  : never;

type Prev1018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1018 {
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

type ConfigPaths1018 = Paths1018<NestedConfig1018>;

interface HeavyProps1018 {
  config: DeepPartial1018<NestedConfig1018>;
  path?: ConfigPaths1018;
}

const HeavyComponent1018 = memo(function HeavyComponent1018({ config }: HeavyProps1018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1018.displayName = 'HeavyComponent1018';
export default HeavyComponent1018;
