'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3466<T> = T extends (infer U)[]
  ? DeepReadonlyArray3466<U>
  : T extends object
  ? DeepReadonlyObject3466<T>
  : T;

interface DeepReadonlyArray3466<T> extends ReadonlyArray<DeepReadonly3466<T>> {}

type DeepReadonlyObject3466<T> = {
  readonly [P in keyof T]: DeepReadonly3466<T[P]>;
};

type UnionToIntersection3466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3466<T> = UnionToIntersection3466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3466<T extends unknown[], V> = [...T, V];

type TuplifyUnion3466<T, L = LastOf3466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3466<TuplifyUnion3466<Exclude<T, L>>, L>;

type DeepPartial3466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3466<T[P]> }
  : T;

type Paths3466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3466<K, Paths3466<T[K], Prev3466[D]>> : never }[keyof T]
  : never;

type Prev3466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3466 {
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

type ConfigPaths3466 = Paths3466<NestedConfig3466>;

interface HeavyProps3466 {
  config: DeepPartial3466<NestedConfig3466>;
  path?: ConfigPaths3466;
}

const HeavyComponent3466 = memo(function HeavyComponent3466({ config }: HeavyProps3466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3466.displayName = 'HeavyComponent3466';
export default HeavyComponent3466;
