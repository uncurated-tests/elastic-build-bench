'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1209<T> = T extends (infer U)[]
  ? DeepReadonlyArray1209<U>
  : T extends object
  ? DeepReadonlyObject1209<T>
  : T;

interface DeepReadonlyArray1209<T> extends ReadonlyArray<DeepReadonly1209<T>> {}

type DeepReadonlyObject1209<T> = {
  readonly [P in keyof T]: DeepReadonly1209<T[P]>;
};

type UnionToIntersection1209<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1209<T> = UnionToIntersection1209<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1209<T extends unknown[], V> = [...T, V];

type TuplifyUnion1209<T, L = LastOf1209<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1209<TuplifyUnion1209<Exclude<T, L>>, L>;

type DeepPartial1209<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1209<T[P]> }
  : T;

type Paths1209<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1209<K, Paths1209<T[K], Prev1209[D]>> : never }[keyof T]
  : never;

type Prev1209 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1209<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1209 {
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

type ConfigPaths1209 = Paths1209<NestedConfig1209>;

interface HeavyProps1209 {
  config: DeepPartial1209<NestedConfig1209>;
  path?: ConfigPaths1209;
}

const HeavyComponent1209 = memo(function HeavyComponent1209({ config }: HeavyProps1209) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1209) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1209 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1209: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1209.displayName = 'HeavyComponent1209';
export default HeavyComponent1209;
