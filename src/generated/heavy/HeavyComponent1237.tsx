'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1237<T> = T extends (infer U)[]
  ? DeepReadonlyArray1237<U>
  : T extends object
  ? DeepReadonlyObject1237<T>
  : T;

interface DeepReadonlyArray1237<T> extends ReadonlyArray<DeepReadonly1237<T>> {}

type DeepReadonlyObject1237<T> = {
  readonly [P in keyof T]: DeepReadonly1237<T[P]>;
};

type UnionToIntersection1237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1237<T> = UnionToIntersection1237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1237<T extends unknown[], V> = [...T, V];

type TuplifyUnion1237<T, L = LastOf1237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1237<TuplifyUnion1237<Exclude<T, L>>, L>;

type DeepPartial1237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1237<T[P]> }
  : T;

type Paths1237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1237<K, Paths1237<T[K], Prev1237[D]>> : never }[keyof T]
  : never;

type Prev1237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1237 {
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

type ConfigPaths1237 = Paths1237<NestedConfig1237>;

interface HeavyProps1237 {
  config: DeepPartial1237<NestedConfig1237>;
  path?: ConfigPaths1237;
}

const HeavyComponent1237 = memo(function HeavyComponent1237({ config }: HeavyProps1237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1237.displayName = 'HeavyComponent1237';
export default HeavyComponent1237;
