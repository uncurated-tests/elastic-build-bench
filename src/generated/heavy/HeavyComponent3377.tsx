'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3377<T> = T extends (infer U)[]
  ? DeepReadonlyArray3377<U>
  : T extends object
  ? DeepReadonlyObject3377<T>
  : T;

interface DeepReadonlyArray3377<T> extends ReadonlyArray<DeepReadonly3377<T>> {}

type DeepReadonlyObject3377<T> = {
  readonly [P in keyof T]: DeepReadonly3377<T[P]>;
};

type UnionToIntersection3377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3377<T> = UnionToIntersection3377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3377<T extends unknown[], V> = [...T, V];

type TuplifyUnion3377<T, L = LastOf3377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3377<TuplifyUnion3377<Exclude<T, L>>, L>;

type DeepPartial3377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3377<T[P]> }
  : T;

type Paths3377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3377<K, Paths3377<T[K], Prev3377[D]>> : never }[keyof T]
  : never;

type Prev3377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3377 {
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

type ConfigPaths3377 = Paths3377<NestedConfig3377>;

interface HeavyProps3377 {
  config: DeepPartial3377<NestedConfig3377>;
  path?: ConfigPaths3377;
}

const HeavyComponent3377 = memo(function HeavyComponent3377({ config }: HeavyProps3377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3377.displayName = 'HeavyComponent3377';
export default HeavyComponent3377;
