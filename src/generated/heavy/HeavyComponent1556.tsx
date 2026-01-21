'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1556<T> = T extends (infer U)[]
  ? DeepReadonlyArray1556<U>
  : T extends object
  ? DeepReadonlyObject1556<T>
  : T;

interface DeepReadonlyArray1556<T> extends ReadonlyArray<DeepReadonly1556<T>> {}

type DeepReadonlyObject1556<T> = {
  readonly [P in keyof T]: DeepReadonly1556<T[P]>;
};

type UnionToIntersection1556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1556<T> = UnionToIntersection1556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1556<T extends unknown[], V> = [...T, V];

type TuplifyUnion1556<T, L = LastOf1556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1556<TuplifyUnion1556<Exclude<T, L>>, L>;

type DeepPartial1556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1556<T[P]> }
  : T;

type Paths1556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1556<K, Paths1556<T[K], Prev1556[D]>> : never }[keyof T]
  : never;

type Prev1556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1556 {
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

type ConfigPaths1556 = Paths1556<NestedConfig1556>;

interface HeavyProps1556 {
  config: DeepPartial1556<NestedConfig1556>;
  path?: ConfigPaths1556;
}

const HeavyComponent1556 = memo(function HeavyComponent1556({ config }: HeavyProps1556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1556.displayName = 'HeavyComponent1556';
export default HeavyComponent1556;
