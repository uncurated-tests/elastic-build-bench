'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1665<T> = T extends (infer U)[]
  ? DeepReadonlyArray1665<U>
  : T extends object
  ? DeepReadonlyObject1665<T>
  : T;

interface DeepReadonlyArray1665<T> extends ReadonlyArray<DeepReadonly1665<T>> {}

type DeepReadonlyObject1665<T> = {
  readonly [P in keyof T]: DeepReadonly1665<T[P]>;
};

type UnionToIntersection1665<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1665<T> = UnionToIntersection1665<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1665<T extends unknown[], V> = [...T, V];

type TuplifyUnion1665<T, L = LastOf1665<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1665<TuplifyUnion1665<Exclude<T, L>>, L>;

type DeepPartial1665<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1665<T[P]> }
  : T;

type Paths1665<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1665<K, Paths1665<T[K], Prev1665[D]>> : never }[keyof T]
  : never;

type Prev1665 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1665<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1665 {
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

type ConfigPaths1665 = Paths1665<NestedConfig1665>;

interface HeavyProps1665 {
  config: DeepPartial1665<NestedConfig1665>;
  path?: ConfigPaths1665;
}

const HeavyComponent1665 = memo(function HeavyComponent1665({ config }: HeavyProps1665) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1665) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1665 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1665: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1665.displayName = 'HeavyComponent1665';
export default HeavyComponent1665;
