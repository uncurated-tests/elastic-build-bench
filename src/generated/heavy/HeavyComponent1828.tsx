'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1828<T> = T extends (infer U)[]
  ? DeepReadonlyArray1828<U>
  : T extends object
  ? DeepReadonlyObject1828<T>
  : T;

interface DeepReadonlyArray1828<T> extends ReadonlyArray<DeepReadonly1828<T>> {}

type DeepReadonlyObject1828<T> = {
  readonly [P in keyof T]: DeepReadonly1828<T[P]>;
};

type UnionToIntersection1828<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1828<T> = UnionToIntersection1828<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1828<T extends unknown[], V> = [...T, V];

type TuplifyUnion1828<T, L = LastOf1828<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1828<TuplifyUnion1828<Exclude<T, L>>, L>;

type DeepPartial1828<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1828<T[P]> }
  : T;

type Paths1828<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1828<K, Paths1828<T[K], Prev1828[D]>> : never }[keyof T]
  : never;

type Prev1828 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1828<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1828 {
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

type ConfigPaths1828 = Paths1828<NestedConfig1828>;

interface HeavyProps1828 {
  config: DeepPartial1828<NestedConfig1828>;
  path?: ConfigPaths1828;
}

const HeavyComponent1828 = memo(function HeavyComponent1828({ config }: HeavyProps1828) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1828) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1828 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1828: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1828.displayName = 'HeavyComponent1828';
export default HeavyComponent1828;
