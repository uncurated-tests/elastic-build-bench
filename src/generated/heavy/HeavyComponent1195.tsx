'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1195<T> = T extends (infer U)[]
  ? DeepReadonlyArray1195<U>
  : T extends object
  ? DeepReadonlyObject1195<T>
  : T;

interface DeepReadonlyArray1195<T> extends ReadonlyArray<DeepReadonly1195<T>> {}

type DeepReadonlyObject1195<T> = {
  readonly [P in keyof T]: DeepReadonly1195<T[P]>;
};

type UnionToIntersection1195<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1195<T> = UnionToIntersection1195<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1195<T extends unknown[], V> = [...T, V];

type TuplifyUnion1195<T, L = LastOf1195<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1195<TuplifyUnion1195<Exclude<T, L>>, L>;

type DeepPartial1195<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1195<T[P]> }
  : T;

type Paths1195<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1195<K, Paths1195<T[K], Prev1195[D]>> : never }[keyof T]
  : never;

type Prev1195 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1195<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1195 {
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

type ConfigPaths1195 = Paths1195<NestedConfig1195>;

interface HeavyProps1195 {
  config: DeepPartial1195<NestedConfig1195>;
  path?: ConfigPaths1195;
}

const HeavyComponent1195 = memo(function HeavyComponent1195({ config }: HeavyProps1195) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1195) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1195 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1195: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1195.displayName = 'HeavyComponent1195';
export default HeavyComponent1195;
