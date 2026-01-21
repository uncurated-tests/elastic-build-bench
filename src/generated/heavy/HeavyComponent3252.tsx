'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3252<T> = T extends (infer U)[]
  ? DeepReadonlyArray3252<U>
  : T extends object
  ? DeepReadonlyObject3252<T>
  : T;

interface DeepReadonlyArray3252<T> extends ReadonlyArray<DeepReadonly3252<T>> {}

type DeepReadonlyObject3252<T> = {
  readonly [P in keyof T]: DeepReadonly3252<T[P]>;
};

type UnionToIntersection3252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3252<T> = UnionToIntersection3252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3252<T extends unknown[], V> = [...T, V];

type TuplifyUnion3252<T, L = LastOf3252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3252<TuplifyUnion3252<Exclude<T, L>>, L>;

type DeepPartial3252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3252<T[P]> }
  : T;

type Paths3252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3252<K, Paths3252<T[K], Prev3252[D]>> : never }[keyof T]
  : never;

type Prev3252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3252 {
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

type ConfigPaths3252 = Paths3252<NestedConfig3252>;

interface HeavyProps3252 {
  config: DeepPartial3252<NestedConfig3252>;
  path?: ConfigPaths3252;
}

const HeavyComponent3252 = memo(function HeavyComponent3252({ config }: HeavyProps3252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3252.displayName = 'HeavyComponent3252';
export default HeavyComponent3252;
