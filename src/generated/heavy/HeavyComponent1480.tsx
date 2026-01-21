'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1480<T> = T extends (infer U)[]
  ? DeepReadonlyArray1480<U>
  : T extends object
  ? DeepReadonlyObject1480<T>
  : T;

interface DeepReadonlyArray1480<T> extends ReadonlyArray<DeepReadonly1480<T>> {}

type DeepReadonlyObject1480<T> = {
  readonly [P in keyof T]: DeepReadonly1480<T[P]>;
};

type UnionToIntersection1480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1480<T> = UnionToIntersection1480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1480<T extends unknown[], V> = [...T, V];

type TuplifyUnion1480<T, L = LastOf1480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1480<TuplifyUnion1480<Exclude<T, L>>, L>;

type DeepPartial1480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1480<T[P]> }
  : T;

type Paths1480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1480<K, Paths1480<T[K], Prev1480[D]>> : never }[keyof T]
  : never;

type Prev1480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1480 {
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

type ConfigPaths1480 = Paths1480<NestedConfig1480>;

interface HeavyProps1480 {
  config: DeepPartial1480<NestedConfig1480>;
  path?: ConfigPaths1480;
}

const HeavyComponent1480 = memo(function HeavyComponent1480({ config }: HeavyProps1480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1480.displayName = 'HeavyComponent1480';
export default HeavyComponent1480;
