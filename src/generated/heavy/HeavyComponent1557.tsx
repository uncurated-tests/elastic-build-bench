'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1557<T> = T extends (infer U)[]
  ? DeepReadonlyArray1557<U>
  : T extends object
  ? DeepReadonlyObject1557<T>
  : T;

interface DeepReadonlyArray1557<T> extends ReadonlyArray<DeepReadonly1557<T>> {}

type DeepReadonlyObject1557<T> = {
  readonly [P in keyof T]: DeepReadonly1557<T[P]>;
};

type UnionToIntersection1557<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1557<T> = UnionToIntersection1557<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1557<T extends unknown[], V> = [...T, V];

type TuplifyUnion1557<T, L = LastOf1557<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1557<TuplifyUnion1557<Exclude<T, L>>, L>;

type DeepPartial1557<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1557<T[P]> }
  : T;

type Paths1557<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1557<K, Paths1557<T[K], Prev1557[D]>> : never }[keyof T]
  : never;

type Prev1557 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1557<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1557 {
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

type ConfigPaths1557 = Paths1557<NestedConfig1557>;

interface HeavyProps1557 {
  config: DeepPartial1557<NestedConfig1557>;
  path?: ConfigPaths1557;
}

const HeavyComponent1557 = memo(function HeavyComponent1557({ config }: HeavyProps1557) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1557) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1557 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1557: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1557.displayName = 'HeavyComponent1557';
export default HeavyComponent1557;
