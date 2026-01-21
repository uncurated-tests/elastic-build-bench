'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1756<T> = T extends (infer U)[]
  ? DeepReadonlyArray1756<U>
  : T extends object
  ? DeepReadonlyObject1756<T>
  : T;

interface DeepReadonlyArray1756<T> extends ReadonlyArray<DeepReadonly1756<T>> {}

type DeepReadonlyObject1756<T> = {
  readonly [P in keyof T]: DeepReadonly1756<T[P]>;
};

type UnionToIntersection1756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1756<T> = UnionToIntersection1756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1756<T extends unknown[], V> = [...T, V];

type TuplifyUnion1756<T, L = LastOf1756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1756<TuplifyUnion1756<Exclude<T, L>>, L>;

type DeepPartial1756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1756<T[P]> }
  : T;

type Paths1756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1756<K, Paths1756<T[K], Prev1756[D]>> : never }[keyof T]
  : never;

type Prev1756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1756 {
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

type ConfigPaths1756 = Paths1756<NestedConfig1756>;

interface HeavyProps1756 {
  config: DeepPartial1756<NestedConfig1756>;
  path?: ConfigPaths1756;
}

const HeavyComponent1756 = memo(function HeavyComponent1756({ config }: HeavyProps1756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1756.displayName = 'HeavyComponent1756';
export default HeavyComponent1756;
