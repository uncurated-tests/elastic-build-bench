'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1595<T> = T extends (infer U)[]
  ? DeepReadonlyArray1595<U>
  : T extends object
  ? DeepReadonlyObject1595<T>
  : T;

interface DeepReadonlyArray1595<T> extends ReadonlyArray<DeepReadonly1595<T>> {}

type DeepReadonlyObject1595<T> = {
  readonly [P in keyof T]: DeepReadonly1595<T[P]>;
};

type UnionToIntersection1595<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1595<T> = UnionToIntersection1595<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1595<T extends unknown[], V> = [...T, V];

type TuplifyUnion1595<T, L = LastOf1595<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1595<TuplifyUnion1595<Exclude<T, L>>, L>;

type DeepPartial1595<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1595<T[P]> }
  : T;

type Paths1595<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1595<K, Paths1595<T[K], Prev1595[D]>> : never }[keyof T]
  : never;

type Prev1595 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1595<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1595 {
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

type ConfigPaths1595 = Paths1595<NestedConfig1595>;

interface HeavyProps1595 {
  config: DeepPartial1595<NestedConfig1595>;
  path?: ConfigPaths1595;
}

const HeavyComponent1595 = memo(function HeavyComponent1595({ config }: HeavyProps1595) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1595) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1595 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1595: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1595.displayName = 'HeavyComponent1595';
export default HeavyComponent1595;
