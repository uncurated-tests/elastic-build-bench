'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1786<T> = T extends (infer U)[]
  ? DeepReadonlyArray1786<U>
  : T extends object
  ? DeepReadonlyObject1786<T>
  : T;

interface DeepReadonlyArray1786<T> extends ReadonlyArray<DeepReadonly1786<T>> {}

type DeepReadonlyObject1786<T> = {
  readonly [P in keyof T]: DeepReadonly1786<T[P]>;
};

type UnionToIntersection1786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1786<T> = UnionToIntersection1786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1786<T extends unknown[], V> = [...T, V];

type TuplifyUnion1786<T, L = LastOf1786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1786<TuplifyUnion1786<Exclude<T, L>>, L>;

type DeepPartial1786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1786<T[P]> }
  : T;

type Paths1786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1786<K, Paths1786<T[K], Prev1786[D]>> : never }[keyof T]
  : never;

type Prev1786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1786 {
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

type ConfigPaths1786 = Paths1786<NestedConfig1786>;

interface HeavyProps1786 {
  config: DeepPartial1786<NestedConfig1786>;
  path?: ConfigPaths1786;
}

const HeavyComponent1786 = memo(function HeavyComponent1786({ config }: HeavyProps1786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1786.displayName = 'HeavyComponent1786';
export default HeavyComponent1786;
