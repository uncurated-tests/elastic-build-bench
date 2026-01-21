'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3461<T> = T extends (infer U)[]
  ? DeepReadonlyArray3461<U>
  : T extends object
  ? DeepReadonlyObject3461<T>
  : T;

interface DeepReadonlyArray3461<T> extends ReadonlyArray<DeepReadonly3461<T>> {}

type DeepReadonlyObject3461<T> = {
  readonly [P in keyof T]: DeepReadonly3461<T[P]>;
};

type UnionToIntersection3461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3461<T> = UnionToIntersection3461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3461<T extends unknown[], V> = [...T, V];

type TuplifyUnion3461<T, L = LastOf3461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3461<TuplifyUnion3461<Exclude<T, L>>, L>;

type DeepPartial3461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3461<T[P]> }
  : T;

type Paths3461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3461<K, Paths3461<T[K], Prev3461[D]>> : never }[keyof T]
  : never;

type Prev3461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3461 {
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

type ConfigPaths3461 = Paths3461<NestedConfig3461>;

interface HeavyProps3461 {
  config: DeepPartial3461<NestedConfig3461>;
  path?: ConfigPaths3461;
}

const HeavyComponent3461 = memo(function HeavyComponent3461({ config }: HeavyProps3461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3461.displayName = 'HeavyComponent3461';
export default HeavyComponent3461;
