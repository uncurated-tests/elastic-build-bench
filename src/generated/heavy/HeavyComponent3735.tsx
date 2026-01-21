'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3735<T> = T extends (infer U)[]
  ? DeepReadonlyArray3735<U>
  : T extends object
  ? DeepReadonlyObject3735<T>
  : T;

interface DeepReadonlyArray3735<T> extends ReadonlyArray<DeepReadonly3735<T>> {}

type DeepReadonlyObject3735<T> = {
  readonly [P in keyof T]: DeepReadonly3735<T[P]>;
};

type UnionToIntersection3735<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3735<T> = UnionToIntersection3735<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3735<T extends unknown[], V> = [...T, V];

type TuplifyUnion3735<T, L = LastOf3735<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3735<TuplifyUnion3735<Exclude<T, L>>, L>;

type DeepPartial3735<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3735<T[P]> }
  : T;

type Paths3735<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3735<K, Paths3735<T[K], Prev3735[D]>> : never }[keyof T]
  : never;

type Prev3735 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3735<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3735 {
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

type ConfigPaths3735 = Paths3735<NestedConfig3735>;

interface HeavyProps3735 {
  config: DeepPartial3735<NestedConfig3735>;
  path?: ConfigPaths3735;
}

const HeavyComponent3735 = memo(function HeavyComponent3735({ config }: HeavyProps3735) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3735) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3735 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3735: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3735.displayName = 'HeavyComponent3735';
export default HeavyComponent3735;
