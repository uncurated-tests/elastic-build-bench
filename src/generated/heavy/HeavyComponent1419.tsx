'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1419<T> = T extends (infer U)[]
  ? DeepReadonlyArray1419<U>
  : T extends object
  ? DeepReadonlyObject1419<T>
  : T;

interface DeepReadonlyArray1419<T> extends ReadonlyArray<DeepReadonly1419<T>> {}

type DeepReadonlyObject1419<T> = {
  readonly [P in keyof T]: DeepReadonly1419<T[P]>;
};

type UnionToIntersection1419<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1419<T> = UnionToIntersection1419<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1419<T extends unknown[], V> = [...T, V];

type TuplifyUnion1419<T, L = LastOf1419<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1419<TuplifyUnion1419<Exclude<T, L>>, L>;

type DeepPartial1419<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1419<T[P]> }
  : T;

type Paths1419<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1419<K, Paths1419<T[K], Prev1419[D]>> : never }[keyof T]
  : never;

type Prev1419 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1419<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1419 {
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

type ConfigPaths1419 = Paths1419<NestedConfig1419>;

interface HeavyProps1419 {
  config: DeepPartial1419<NestedConfig1419>;
  path?: ConfigPaths1419;
}

const HeavyComponent1419 = memo(function HeavyComponent1419({ config }: HeavyProps1419) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1419) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1419 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1419: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1419.displayName = 'HeavyComponent1419';
export default HeavyComponent1419;
