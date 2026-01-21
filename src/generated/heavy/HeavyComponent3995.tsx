'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3995<T> = T extends (infer U)[]
  ? DeepReadonlyArray3995<U>
  : T extends object
  ? DeepReadonlyObject3995<T>
  : T;

interface DeepReadonlyArray3995<T> extends ReadonlyArray<DeepReadonly3995<T>> {}

type DeepReadonlyObject3995<T> = {
  readonly [P in keyof T]: DeepReadonly3995<T[P]>;
};

type UnionToIntersection3995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3995<T> = UnionToIntersection3995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3995<T extends unknown[], V> = [...T, V];

type TuplifyUnion3995<T, L = LastOf3995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3995<TuplifyUnion3995<Exclude<T, L>>, L>;

type DeepPartial3995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3995<T[P]> }
  : T;

type Paths3995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3995<K, Paths3995<T[K], Prev3995[D]>> : never }[keyof T]
  : never;

type Prev3995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3995 {
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

type ConfigPaths3995 = Paths3995<NestedConfig3995>;

interface HeavyProps3995 {
  config: DeepPartial3995<NestedConfig3995>;
  path?: ConfigPaths3995;
}

const HeavyComponent3995 = memo(function HeavyComponent3995({ config }: HeavyProps3995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3995.displayName = 'HeavyComponent3995';
export default HeavyComponent3995;
