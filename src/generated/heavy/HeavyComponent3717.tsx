'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3717<T> = T extends (infer U)[]
  ? DeepReadonlyArray3717<U>
  : T extends object
  ? DeepReadonlyObject3717<T>
  : T;

interface DeepReadonlyArray3717<T> extends ReadonlyArray<DeepReadonly3717<T>> {}

type DeepReadonlyObject3717<T> = {
  readonly [P in keyof T]: DeepReadonly3717<T[P]>;
};

type UnionToIntersection3717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3717<T> = UnionToIntersection3717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3717<T extends unknown[], V> = [...T, V];

type TuplifyUnion3717<T, L = LastOf3717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3717<TuplifyUnion3717<Exclude<T, L>>, L>;

type DeepPartial3717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3717<T[P]> }
  : T;

type Paths3717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3717<K, Paths3717<T[K], Prev3717[D]>> : never }[keyof T]
  : never;

type Prev3717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3717 {
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

type ConfigPaths3717 = Paths3717<NestedConfig3717>;

interface HeavyProps3717 {
  config: DeepPartial3717<NestedConfig3717>;
  path?: ConfigPaths3717;
}

const HeavyComponent3717 = memo(function HeavyComponent3717({ config }: HeavyProps3717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3717.displayName = 'HeavyComponent3717';
export default HeavyComponent3717;
