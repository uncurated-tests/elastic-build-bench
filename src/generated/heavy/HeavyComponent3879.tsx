'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3879<T> = T extends (infer U)[]
  ? DeepReadonlyArray3879<U>
  : T extends object
  ? DeepReadonlyObject3879<T>
  : T;

interface DeepReadonlyArray3879<T> extends ReadonlyArray<DeepReadonly3879<T>> {}

type DeepReadonlyObject3879<T> = {
  readonly [P in keyof T]: DeepReadonly3879<T[P]>;
};

type UnionToIntersection3879<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3879<T> = UnionToIntersection3879<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3879<T extends unknown[], V> = [...T, V];

type TuplifyUnion3879<T, L = LastOf3879<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3879<TuplifyUnion3879<Exclude<T, L>>, L>;

type DeepPartial3879<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3879<T[P]> }
  : T;

type Paths3879<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3879<K, Paths3879<T[K], Prev3879[D]>> : never }[keyof T]
  : never;

type Prev3879 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3879<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3879 {
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

type ConfigPaths3879 = Paths3879<NestedConfig3879>;

interface HeavyProps3879 {
  config: DeepPartial3879<NestedConfig3879>;
  path?: ConfigPaths3879;
}

const HeavyComponent3879 = memo(function HeavyComponent3879({ config }: HeavyProps3879) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3879) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3879 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3879: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3879.displayName = 'HeavyComponent3879';
export default HeavyComponent3879;
