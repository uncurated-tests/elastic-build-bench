'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3983<T> = T extends (infer U)[]
  ? DeepReadonlyArray3983<U>
  : T extends object
  ? DeepReadonlyObject3983<T>
  : T;

interface DeepReadonlyArray3983<T> extends ReadonlyArray<DeepReadonly3983<T>> {}

type DeepReadonlyObject3983<T> = {
  readonly [P in keyof T]: DeepReadonly3983<T[P]>;
};

type UnionToIntersection3983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3983<T> = UnionToIntersection3983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3983<T extends unknown[], V> = [...T, V];

type TuplifyUnion3983<T, L = LastOf3983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3983<TuplifyUnion3983<Exclude<T, L>>, L>;

type DeepPartial3983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3983<T[P]> }
  : T;

type Paths3983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3983<K, Paths3983<T[K], Prev3983[D]>> : never }[keyof T]
  : never;

type Prev3983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3983 {
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

type ConfigPaths3983 = Paths3983<NestedConfig3983>;

interface HeavyProps3983 {
  config: DeepPartial3983<NestedConfig3983>;
  path?: ConfigPaths3983;
}

const HeavyComponent3983 = memo(function HeavyComponent3983({ config }: HeavyProps3983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3983.displayName = 'HeavyComponent3983';
export default HeavyComponent3983;
