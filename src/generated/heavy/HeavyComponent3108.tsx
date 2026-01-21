'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3108<T> = T extends (infer U)[]
  ? DeepReadonlyArray3108<U>
  : T extends object
  ? DeepReadonlyObject3108<T>
  : T;

interface DeepReadonlyArray3108<T> extends ReadonlyArray<DeepReadonly3108<T>> {}

type DeepReadonlyObject3108<T> = {
  readonly [P in keyof T]: DeepReadonly3108<T[P]>;
};

type UnionToIntersection3108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3108<T> = UnionToIntersection3108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3108<T extends unknown[], V> = [...T, V];

type TuplifyUnion3108<T, L = LastOf3108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3108<TuplifyUnion3108<Exclude<T, L>>, L>;

type DeepPartial3108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3108<T[P]> }
  : T;

type Paths3108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3108<K, Paths3108<T[K], Prev3108[D]>> : never }[keyof T]
  : never;

type Prev3108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3108 {
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

type ConfigPaths3108 = Paths3108<NestedConfig3108>;

interface HeavyProps3108 {
  config: DeepPartial3108<NestedConfig3108>;
  path?: ConfigPaths3108;
}

const HeavyComponent3108 = memo(function HeavyComponent3108({ config }: HeavyProps3108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3108.displayName = 'HeavyComponent3108';
export default HeavyComponent3108;
