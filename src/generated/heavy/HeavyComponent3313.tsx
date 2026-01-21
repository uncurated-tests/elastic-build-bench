'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3313<T> = T extends (infer U)[]
  ? DeepReadonlyArray3313<U>
  : T extends object
  ? DeepReadonlyObject3313<T>
  : T;

interface DeepReadonlyArray3313<T> extends ReadonlyArray<DeepReadonly3313<T>> {}

type DeepReadonlyObject3313<T> = {
  readonly [P in keyof T]: DeepReadonly3313<T[P]>;
};

type UnionToIntersection3313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3313<T> = UnionToIntersection3313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3313<T extends unknown[], V> = [...T, V];

type TuplifyUnion3313<T, L = LastOf3313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3313<TuplifyUnion3313<Exclude<T, L>>, L>;

type DeepPartial3313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3313<T[P]> }
  : T;

type Paths3313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3313<K, Paths3313<T[K], Prev3313[D]>> : never }[keyof T]
  : never;

type Prev3313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3313 {
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

type ConfigPaths3313 = Paths3313<NestedConfig3313>;

interface HeavyProps3313 {
  config: DeepPartial3313<NestedConfig3313>;
  path?: ConfigPaths3313;
}

const HeavyComponent3313 = memo(function HeavyComponent3313({ config }: HeavyProps3313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3313.displayName = 'HeavyComponent3313';
export default HeavyComponent3313;
