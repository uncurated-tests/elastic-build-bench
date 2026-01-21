'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3220<T> = T extends (infer U)[]
  ? DeepReadonlyArray3220<U>
  : T extends object
  ? DeepReadonlyObject3220<T>
  : T;

interface DeepReadonlyArray3220<T> extends ReadonlyArray<DeepReadonly3220<T>> {}

type DeepReadonlyObject3220<T> = {
  readonly [P in keyof T]: DeepReadonly3220<T[P]>;
};

type UnionToIntersection3220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3220<T> = UnionToIntersection3220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3220<T extends unknown[], V> = [...T, V];

type TuplifyUnion3220<T, L = LastOf3220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3220<TuplifyUnion3220<Exclude<T, L>>, L>;

type DeepPartial3220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3220<T[P]> }
  : T;

type Paths3220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3220<K, Paths3220<T[K], Prev3220[D]>> : never }[keyof T]
  : never;

type Prev3220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3220 {
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

type ConfigPaths3220 = Paths3220<NestedConfig3220>;

interface HeavyProps3220 {
  config: DeepPartial3220<NestedConfig3220>;
  path?: ConfigPaths3220;
}

const HeavyComponent3220 = memo(function HeavyComponent3220({ config }: HeavyProps3220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3220.displayName = 'HeavyComponent3220';
export default HeavyComponent3220;
