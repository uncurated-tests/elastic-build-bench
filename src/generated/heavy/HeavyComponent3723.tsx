'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3723<T> = T extends (infer U)[]
  ? DeepReadonlyArray3723<U>
  : T extends object
  ? DeepReadonlyObject3723<T>
  : T;

interface DeepReadonlyArray3723<T> extends ReadonlyArray<DeepReadonly3723<T>> {}

type DeepReadonlyObject3723<T> = {
  readonly [P in keyof T]: DeepReadonly3723<T[P]>;
};

type UnionToIntersection3723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3723<T> = UnionToIntersection3723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3723<T extends unknown[], V> = [...T, V];

type TuplifyUnion3723<T, L = LastOf3723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3723<TuplifyUnion3723<Exclude<T, L>>, L>;

type DeepPartial3723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3723<T[P]> }
  : T;

type Paths3723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3723<K, Paths3723<T[K], Prev3723[D]>> : never }[keyof T]
  : never;

type Prev3723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3723 {
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

type ConfigPaths3723 = Paths3723<NestedConfig3723>;

interface HeavyProps3723 {
  config: DeepPartial3723<NestedConfig3723>;
  path?: ConfigPaths3723;
}

const HeavyComponent3723 = memo(function HeavyComponent3723({ config }: HeavyProps3723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3723.displayName = 'HeavyComponent3723';
export default HeavyComponent3723;
