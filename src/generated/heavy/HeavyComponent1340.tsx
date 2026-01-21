'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1340<T> = T extends (infer U)[]
  ? DeepReadonlyArray1340<U>
  : T extends object
  ? DeepReadonlyObject1340<T>
  : T;

interface DeepReadonlyArray1340<T> extends ReadonlyArray<DeepReadonly1340<T>> {}

type DeepReadonlyObject1340<T> = {
  readonly [P in keyof T]: DeepReadonly1340<T[P]>;
};

type UnionToIntersection1340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1340<T> = UnionToIntersection1340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1340<T extends unknown[], V> = [...T, V];

type TuplifyUnion1340<T, L = LastOf1340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1340<TuplifyUnion1340<Exclude<T, L>>, L>;

type DeepPartial1340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1340<T[P]> }
  : T;

type Paths1340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1340<K, Paths1340<T[K], Prev1340[D]>> : never }[keyof T]
  : never;

type Prev1340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1340 {
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

type ConfigPaths1340 = Paths1340<NestedConfig1340>;

interface HeavyProps1340 {
  config: DeepPartial1340<NestedConfig1340>;
  path?: ConfigPaths1340;
}

const HeavyComponent1340 = memo(function HeavyComponent1340({ config }: HeavyProps1340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1340.displayName = 'HeavyComponent1340';
export default HeavyComponent1340;
