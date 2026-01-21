'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1713<T> = T extends (infer U)[]
  ? DeepReadonlyArray1713<U>
  : T extends object
  ? DeepReadonlyObject1713<T>
  : T;

interface DeepReadonlyArray1713<T> extends ReadonlyArray<DeepReadonly1713<T>> {}

type DeepReadonlyObject1713<T> = {
  readonly [P in keyof T]: DeepReadonly1713<T[P]>;
};

type UnionToIntersection1713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1713<T> = UnionToIntersection1713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1713<T extends unknown[], V> = [...T, V];

type TuplifyUnion1713<T, L = LastOf1713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1713<TuplifyUnion1713<Exclude<T, L>>, L>;

type DeepPartial1713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1713<T[P]> }
  : T;

type Paths1713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1713<K, Paths1713<T[K], Prev1713[D]>> : never }[keyof T]
  : never;

type Prev1713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1713 {
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

type ConfigPaths1713 = Paths1713<NestedConfig1713>;

interface HeavyProps1713 {
  config: DeepPartial1713<NestedConfig1713>;
  path?: ConfigPaths1713;
}

const HeavyComponent1713 = memo(function HeavyComponent1713({ config }: HeavyProps1713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1713.displayName = 'HeavyComponent1713';
export default HeavyComponent1713;
