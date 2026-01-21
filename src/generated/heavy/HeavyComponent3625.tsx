'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3625<T> = T extends (infer U)[]
  ? DeepReadonlyArray3625<U>
  : T extends object
  ? DeepReadonlyObject3625<T>
  : T;

interface DeepReadonlyArray3625<T> extends ReadonlyArray<DeepReadonly3625<T>> {}

type DeepReadonlyObject3625<T> = {
  readonly [P in keyof T]: DeepReadonly3625<T[P]>;
};

type UnionToIntersection3625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3625<T> = UnionToIntersection3625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3625<T extends unknown[], V> = [...T, V];

type TuplifyUnion3625<T, L = LastOf3625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3625<TuplifyUnion3625<Exclude<T, L>>, L>;

type DeepPartial3625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3625<T[P]> }
  : T;

type Paths3625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3625<K, Paths3625<T[K], Prev3625[D]>> : never }[keyof T]
  : never;

type Prev3625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3625 {
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

type ConfigPaths3625 = Paths3625<NestedConfig3625>;

interface HeavyProps3625 {
  config: DeepPartial3625<NestedConfig3625>;
  path?: ConfigPaths3625;
}

const HeavyComponent3625 = memo(function HeavyComponent3625({ config }: HeavyProps3625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3625.displayName = 'HeavyComponent3625';
export default HeavyComponent3625;
