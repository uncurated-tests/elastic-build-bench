'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1585<T> = T extends (infer U)[]
  ? DeepReadonlyArray1585<U>
  : T extends object
  ? DeepReadonlyObject1585<T>
  : T;

interface DeepReadonlyArray1585<T> extends ReadonlyArray<DeepReadonly1585<T>> {}

type DeepReadonlyObject1585<T> = {
  readonly [P in keyof T]: DeepReadonly1585<T[P]>;
};

type UnionToIntersection1585<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1585<T> = UnionToIntersection1585<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1585<T extends unknown[], V> = [...T, V];

type TuplifyUnion1585<T, L = LastOf1585<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1585<TuplifyUnion1585<Exclude<T, L>>, L>;

type DeepPartial1585<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1585<T[P]> }
  : T;

type Paths1585<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1585<K, Paths1585<T[K], Prev1585[D]>> : never }[keyof T]
  : never;

type Prev1585 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1585<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1585 {
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

type ConfigPaths1585 = Paths1585<NestedConfig1585>;

interface HeavyProps1585 {
  config: DeepPartial1585<NestedConfig1585>;
  path?: ConfigPaths1585;
}

const HeavyComponent1585 = memo(function HeavyComponent1585({ config }: HeavyProps1585) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1585) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1585 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1585: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1585.displayName = 'HeavyComponent1585';
export default HeavyComponent1585;
