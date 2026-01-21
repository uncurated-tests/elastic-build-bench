'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3013<T> = T extends (infer U)[]
  ? DeepReadonlyArray3013<U>
  : T extends object
  ? DeepReadonlyObject3013<T>
  : T;

interface DeepReadonlyArray3013<T> extends ReadonlyArray<DeepReadonly3013<T>> {}

type DeepReadonlyObject3013<T> = {
  readonly [P in keyof T]: DeepReadonly3013<T[P]>;
};

type UnionToIntersection3013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3013<T> = UnionToIntersection3013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3013<T extends unknown[], V> = [...T, V];

type TuplifyUnion3013<T, L = LastOf3013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3013<TuplifyUnion3013<Exclude<T, L>>, L>;

type DeepPartial3013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3013<T[P]> }
  : T;

type Paths3013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3013<K, Paths3013<T[K], Prev3013[D]>> : never }[keyof T]
  : never;

type Prev3013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3013 {
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

type ConfigPaths3013 = Paths3013<NestedConfig3013>;

interface HeavyProps3013 {
  config: DeepPartial3013<NestedConfig3013>;
  path?: ConfigPaths3013;
}

const HeavyComponent3013 = memo(function HeavyComponent3013({ config }: HeavyProps3013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3013.displayName = 'HeavyComponent3013';
export default HeavyComponent3013;
