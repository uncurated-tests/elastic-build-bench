'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3236<T> = T extends (infer U)[]
  ? DeepReadonlyArray3236<U>
  : T extends object
  ? DeepReadonlyObject3236<T>
  : T;

interface DeepReadonlyArray3236<T> extends ReadonlyArray<DeepReadonly3236<T>> {}

type DeepReadonlyObject3236<T> = {
  readonly [P in keyof T]: DeepReadonly3236<T[P]>;
};

type UnionToIntersection3236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3236<T> = UnionToIntersection3236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3236<T extends unknown[], V> = [...T, V];

type TuplifyUnion3236<T, L = LastOf3236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3236<TuplifyUnion3236<Exclude<T, L>>, L>;

type DeepPartial3236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3236<T[P]> }
  : T;

type Paths3236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3236<K, Paths3236<T[K], Prev3236[D]>> : never }[keyof T]
  : never;

type Prev3236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3236 {
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

type ConfigPaths3236 = Paths3236<NestedConfig3236>;

interface HeavyProps3236 {
  config: DeepPartial3236<NestedConfig3236>;
  path?: ConfigPaths3236;
}

const HeavyComponent3236 = memo(function HeavyComponent3236({ config }: HeavyProps3236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3236.displayName = 'HeavyComponent3236';
export default HeavyComponent3236;
