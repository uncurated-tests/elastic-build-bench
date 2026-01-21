'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3594<T> = T extends (infer U)[]
  ? DeepReadonlyArray3594<U>
  : T extends object
  ? DeepReadonlyObject3594<T>
  : T;

interface DeepReadonlyArray3594<T> extends ReadonlyArray<DeepReadonly3594<T>> {}

type DeepReadonlyObject3594<T> = {
  readonly [P in keyof T]: DeepReadonly3594<T[P]>;
};

type UnionToIntersection3594<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3594<T> = UnionToIntersection3594<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3594<T extends unknown[], V> = [...T, V];

type TuplifyUnion3594<T, L = LastOf3594<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3594<TuplifyUnion3594<Exclude<T, L>>, L>;

type DeepPartial3594<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3594<T[P]> }
  : T;

type Paths3594<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3594<K, Paths3594<T[K], Prev3594[D]>> : never }[keyof T]
  : never;

type Prev3594 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3594<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3594 {
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

type ConfigPaths3594 = Paths3594<NestedConfig3594>;

interface HeavyProps3594 {
  config: DeepPartial3594<NestedConfig3594>;
  path?: ConfigPaths3594;
}

const HeavyComponent3594 = memo(function HeavyComponent3594({ config }: HeavyProps3594) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3594) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3594 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3594: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3594.displayName = 'HeavyComponent3594';
export default HeavyComponent3594;
