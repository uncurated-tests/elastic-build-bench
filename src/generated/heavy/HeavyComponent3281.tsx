'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3281<T> = T extends (infer U)[]
  ? DeepReadonlyArray3281<U>
  : T extends object
  ? DeepReadonlyObject3281<T>
  : T;

interface DeepReadonlyArray3281<T> extends ReadonlyArray<DeepReadonly3281<T>> {}

type DeepReadonlyObject3281<T> = {
  readonly [P in keyof T]: DeepReadonly3281<T[P]>;
};

type UnionToIntersection3281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3281<T> = UnionToIntersection3281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3281<T extends unknown[], V> = [...T, V];

type TuplifyUnion3281<T, L = LastOf3281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3281<TuplifyUnion3281<Exclude<T, L>>, L>;

type DeepPartial3281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3281<T[P]> }
  : T;

type Paths3281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3281<K, Paths3281<T[K], Prev3281[D]>> : never }[keyof T]
  : never;

type Prev3281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3281 {
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

type ConfigPaths3281 = Paths3281<NestedConfig3281>;

interface HeavyProps3281 {
  config: DeepPartial3281<NestedConfig3281>;
  path?: ConfigPaths3281;
}

const HeavyComponent3281 = memo(function HeavyComponent3281({ config }: HeavyProps3281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3281.displayName = 'HeavyComponent3281';
export default HeavyComponent3281;
