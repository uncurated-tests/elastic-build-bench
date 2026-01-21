'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3310<T> = T extends (infer U)[]
  ? DeepReadonlyArray3310<U>
  : T extends object
  ? DeepReadonlyObject3310<T>
  : T;

interface DeepReadonlyArray3310<T> extends ReadonlyArray<DeepReadonly3310<T>> {}

type DeepReadonlyObject3310<T> = {
  readonly [P in keyof T]: DeepReadonly3310<T[P]>;
};

type UnionToIntersection3310<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3310<T> = UnionToIntersection3310<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3310<T extends unknown[], V> = [...T, V];

type TuplifyUnion3310<T, L = LastOf3310<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3310<TuplifyUnion3310<Exclude<T, L>>, L>;

type DeepPartial3310<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3310<T[P]> }
  : T;

type Paths3310<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3310<K, Paths3310<T[K], Prev3310[D]>> : never }[keyof T]
  : never;

type Prev3310 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3310<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3310 {
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

type ConfigPaths3310 = Paths3310<NestedConfig3310>;

interface HeavyProps3310 {
  config: DeepPartial3310<NestedConfig3310>;
  path?: ConfigPaths3310;
}

const HeavyComponent3310 = memo(function HeavyComponent3310({ config }: HeavyProps3310) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3310) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3310 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3310: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3310.displayName = 'HeavyComponent3310';
export default HeavyComponent3310;
