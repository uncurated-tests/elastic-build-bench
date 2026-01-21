'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1167<T> = T extends (infer U)[]
  ? DeepReadonlyArray1167<U>
  : T extends object
  ? DeepReadonlyObject1167<T>
  : T;

interface DeepReadonlyArray1167<T> extends ReadonlyArray<DeepReadonly1167<T>> {}

type DeepReadonlyObject1167<T> = {
  readonly [P in keyof T]: DeepReadonly1167<T[P]>;
};

type UnionToIntersection1167<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1167<T> = UnionToIntersection1167<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1167<T extends unknown[], V> = [...T, V];

type TuplifyUnion1167<T, L = LastOf1167<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1167<TuplifyUnion1167<Exclude<T, L>>, L>;

type DeepPartial1167<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1167<T[P]> }
  : T;

type Paths1167<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1167<K, Paths1167<T[K], Prev1167[D]>> : never }[keyof T]
  : never;

type Prev1167 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1167<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1167 {
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

type ConfigPaths1167 = Paths1167<NestedConfig1167>;

interface HeavyProps1167 {
  config: DeepPartial1167<NestedConfig1167>;
  path?: ConfigPaths1167;
}

const HeavyComponent1167 = memo(function HeavyComponent1167({ config }: HeavyProps1167) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1167) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1167 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1167: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1167.displayName = 'HeavyComponent1167';
export default HeavyComponent1167;
