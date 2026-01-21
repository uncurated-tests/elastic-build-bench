'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1158<T> = T extends (infer U)[]
  ? DeepReadonlyArray1158<U>
  : T extends object
  ? DeepReadonlyObject1158<T>
  : T;

interface DeepReadonlyArray1158<T> extends ReadonlyArray<DeepReadonly1158<T>> {}

type DeepReadonlyObject1158<T> = {
  readonly [P in keyof T]: DeepReadonly1158<T[P]>;
};

type UnionToIntersection1158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1158<T> = UnionToIntersection1158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1158<T extends unknown[], V> = [...T, V];

type TuplifyUnion1158<T, L = LastOf1158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1158<TuplifyUnion1158<Exclude<T, L>>, L>;

type DeepPartial1158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1158<T[P]> }
  : T;

type Paths1158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1158<K, Paths1158<T[K], Prev1158[D]>> : never }[keyof T]
  : never;

type Prev1158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1158 {
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

type ConfigPaths1158 = Paths1158<NestedConfig1158>;

interface HeavyProps1158 {
  config: DeepPartial1158<NestedConfig1158>;
  path?: ConfigPaths1158;
}

const HeavyComponent1158 = memo(function HeavyComponent1158({ config }: HeavyProps1158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1158.displayName = 'HeavyComponent1158';
export default HeavyComponent1158;
