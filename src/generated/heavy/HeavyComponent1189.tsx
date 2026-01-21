'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1189<T> = T extends (infer U)[]
  ? DeepReadonlyArray1189<U>
  : T extends object
  ? DeepReadonlyObject1189<T>
  : T;

interface DeepReadonlyArray1189<T> extends ReadonlyArray<DeepReadonly1189<T>> {}

type DeepReadonlyObject1189<T> = {
  readonly [P in keyof T]: DeepReadonly1189<T[P]>;
};

type UnionToIntersection1189<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1189<T> = UnionToIntersection1189<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1189<T extends unknown[], V> = [...T, V];

type TuplifyUnion1189<T, L = LastOf1189<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1189<TuplifyUnion1189<Exclude<T, L>>, L>;

type DeepPartial1189<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1189<T[P]> }
  : T;

type Paths1189<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1189<K, Paths1189<T[K], Prev1189[D]>> : never }[keyof T]
  : never;

type Prev1189 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1189<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1189 {
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

type ConfigPaths1189 = Paths1189<NestedConfig1189>;

interface HeavyProps1189 {
  config: DeepPartial1189<NestedConfig1189>;
  path?: ConfigPaths1189;
}

const HeavyComponent1189 = memo(function HeavyComponent1189({ config }: HeavyProps1189) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1189) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1189 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1189: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1189.displayName = 'HeavyComponent1189';
export default HeavyComponent1189;
