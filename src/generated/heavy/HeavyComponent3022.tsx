'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3022<T> = T extends (infer U)[]
  ? DeepReadonlyArray3022<U>
  : T extends object
  ? DeepReadonlyObject3022<T>
  : T;

interface DeepReadonlyArray3022<T> extends ReadonlyArray<DeepReadonly3022<T>> {}

type DeepReadonlyObject3022<T> = {
  readonly [P in keyof T]: DeepReadonly3022<T[P]>;
};

type UnionToIntersection3022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3022<T> = UnionToIntersection3022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3022<T extends unknown[], V> = [...T, V];

type TuplifyUnion3022<T, L = LastOf3022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3022<TuplifyUnion3022<Exclude<T, L>>, L>;

type DeepPartial3022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3022<T[P]> }
  : T;

type Paths3022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3022<K, Paths3022<T[K], Prev3022[D]>> : never }[keyof T]
  : never;

type Prev3022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3022 {
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

type ConfigPaths3022 = Paths3022<NestedConfig3022>;

interface HeavyProps3022 {
  config: DeepPartial3022<NestedConfig3022>;
  path?: ConfigPaths3022;
}

const HeavyComponent3022 = memo(function HeavyComponent3022({ config }: HeavyProps3022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3022.displayName = 'HeavyComponent3022';
export default HeavyComponent3022;
