'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1331<T> = T extends (infer U)[]
  ? DeepReadonlyArray1331<U>
  : T extends object
  ? DeepReadonlyObject1331<T>
  : T;

interface DeepReadonlyArray1331<T> extends ReadonlyArray<DeepReadonly1331<T>> {}

type DeepReadonlyObject1331<T> = {
  readonly [P in keyof T]: DeepReadonly1331<T[P]>;
};

type UnionToIntersection1331<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1331<T> = UnionToIntersection1331<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1331<T extends unknown[], V> = [...T, V];

type TuplifyUnion1331<T, L = LastOf1331<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1331<TuplifyUnion1331<Exclude<T, L>>, L>;

type DeepPartial1331<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1331<T[P]> }
  : T;

type Paths1331<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1331<K, Paths1331<T[K], Prev1331[D]>> : never }[keyof T]
  : never;

type Prev1331 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1331<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1331 {
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

type ConfigPaths1331 = Paths1331<NestedConfig1331>;

interface HeavyProps1331 {
  config: DeepPartial1331<NestedConfig1331>;
  path?: ConfigPaths1331;
}

const HeavyComponent1331 = memo(function HeavyComponent1331({ config }: HeavyProps1331) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1331) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1331 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1331: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1331.displayName = 'HeavyComponent1331';
export default HeavyComponent1331;
