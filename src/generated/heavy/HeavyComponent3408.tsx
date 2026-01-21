'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3408<T> = T extends (infer U)[]
  ? DeepReadonlyArray3408<U>
  : T extends object
  ? DeepReadonlyObject3408<T>
  : T;

interface DeepReadonlyArray3408<T> extends ReadonlyArray<DeepReadonly3408<T>> {}

type DeepReadonlyObject3408<T> = {
  readonly [P in keyof T]: DeepReadonly3408<T[P]>;
};

type UnionToIntersection3408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3408<T> = UnionToIntersection3408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3408<T extends unknown[], V> = [...T, V];

type TuplifyUnion3408<T, L = LastOf3408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3408<TuplifyUnion3408<Exclude<T, L>>, L>;

type DeepPartial3408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3408<T[P]> }
  : T;

type Paths3408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3408<K, Paths3408<T[K], Prev3408[D]>> : never }[keyof T]
  : never;

type Prev3408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3408 {
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

type ConfigPaths3408 = Paths3408<NestedConfig3408>;

interface HeavyProps3408 {
  config: DeepPartial3408<NestedConfig3408>;
  path?: ConfigPaths3408;
}

const HeavyComponent3408 = memo(function HeavyComponent3408({ config }: HeavyProps3408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3408.displayName = 'HeavyComponent3408';
export default HeavyComponent3408;
