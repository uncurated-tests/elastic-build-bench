'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1738<T> = T extends (infer U)[]
  ? DeepReadonlyArray1738<U>
  : T extends object
  ? DeepReadonlyObject1738<T>
  : T;

interface DeepReadonlyArray1738<T> extends ReadonlyArray<DeepReadonly1738<T>> {}

type DeepReadonlyObject1738<T> = {
  readonly [P in keyof T]: DeepReadonly1738<T[P]>;
};

type UnionToIntersection1738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1738<T> = UnionToIntersection1738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1738<T extends unknown[], V> = [...T, V];

type TuplifyUnion1738<T, L = LastOf1738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1738<TuplifyUnion1738<Exclude<T, L>>, L>;

type DeepPartial1738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1738<T[P]> }
  : T;

type Paths1738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1738<K, Paths1738<T[K], Prev1738[D]>> : never }[keyof T]
  : never;

type Prev1738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1738 {
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

type ConfigPaths1738 = Paths1738<NestedConfig1738>;

interface HeavyProps1738 {
  config: DeepPartial1738<NestedConfig1738>;
  path?: ConfigPaths1738;
}

const HeavyComponent1738 = memo(function HeavyComponent1738({ config }: HeavyProps1738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1738.displayName = 'HeavyComponent1738';
export default HeavyComponent1738;
