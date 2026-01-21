'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3490<T> = T extends (infer U)[]
  ? DeepReadonlyArray3490<U>
  : T extends object
  ? DeepReadonlyObject3490<T>
  : T;

interface DeepReadonlyArray3490<T> extends ReadonlyArray<DeepReadonly3490<T>> {}

type DeepReadonlyObject3490<T> = {
  readonly [P in keyof T]: DeepReadonly3490<T[P]>;
};

type UnionToIntersection3490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3490<T> = UnionToIntersection3490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3490<T extends unknown[], V> = [...T, V];

type TuplifyUnion3490<T, L = LastOf3490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3490<TuplifyUnion3490<Exclude<T, L>>, L>;

type DeepPartial3490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3490<T[P]> }
  : T;

type Paths3490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3490<K, Paths3490<T[K], Prev3490[D]>> : never }[keyof T]
  : never;

type Prev3490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3490 {
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

type ConfigPaths3490 = Paths3490<NestedConfig3490>;

interface HeavyProps3490 {
  config: DeepPartial3490<NestedConfig3490>;
  path?: ConfigPaths3490;
}

const HeavyComponent3490 = memo(function HeavyComponent3490({ config }: HeavyProps3490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3490.displayName = 'HeavyComponent3490';
export default HeavyComponent3490;
