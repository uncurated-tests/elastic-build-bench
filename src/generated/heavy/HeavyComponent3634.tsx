'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3634<T> = T extends (infer U)[]
  ? DeepReadonlyArray3634<U>
  : T extends object
  ? DeepReadonlyObject3634<T>
  : T;

interface DeepReadonlyArray3634<T> extends ReadonlyArray<DeepReadonly3634<T>> {}

type DeepReadonlyObject3634<T> = {
  readonly [P in keyof T]: DeepReadonly3634<T[P]>;
};

type UnionToIntersection3634<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3634<T> = UnionToIntersection3634<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3634<T extends unknown[], V> = [...T, V];

type TuplifyUnion3634<T, L = LastOf3634<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3634<TuplifyUnion3634<Exclude<T, L>>, L>;

type DeepPartial3634<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3634<T[P]> }
  : T;

type Paths3634<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3634<K, Paths3634<T[K], Prev3634[D]>> : never }[keyof T]
  : never;

type Prev3634 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3634<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3634 {
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

type ConfigPaths3634 = Paths3634<NestedConfig3634>;

interface HeavyProps3634 {
  config: DeepPartial3634<NestedConfig3634>;
  path?: ConfigPaths3634;
}

const HeavyComponent3634 = memo(function HeavyComponent3634({ config }: HeavyProps3634) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3634) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3634 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3634: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3634.displayName = 'HeavyComponent3634';
export default HeavyComponent3634;
