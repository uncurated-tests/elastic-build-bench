'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3367<T> = T extends (infer U)[]
  ? DeepReadonlyArray3367<U>
  : T extends object
  ? DeepReadonlyObject3367<T>
  : T;

interface DeepReadonlyArray3367<T> extends ReadonlyArray<DeepReadonly3367<T>> {}

type DeepReadonlyObject3367<T> = {
  readonly [P in keyof T]: DeepReadonly3367<T[P]>;
};

type UnionToIntersection3367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3367<T> = UnionToIntersection3367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3367<T extends unknown[], V> = [...T, V];

type TuplifyUnion3367<T, L = LastOf3367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3367<TuplifyUnion3367<Exclude<T, L>>, L>;

type DeepPartial3367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3367<T[P]> }
  : T;

type Paths3367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3367<K, Paths3367<T[K], Prev3367[D]>> : never }[keyof T]
  : never;

type Prev3367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3367 {
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

type ConfigPaths3367 = Paths3367<NestedConfig3367>;

interface HeavyProps3367 {
  config: DeepPartial3367<NestedConfig3367>;
  path?: ConfigPaths3367;
}

const HeavyComponent3367 = memo(function HeavyComponent3367({ config }: HeavyProps3367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3367.displayName = 'HeavyComponent3367';
export default HeavyComponent3367;
