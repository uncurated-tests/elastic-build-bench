'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3604<T> = T extends (infer U)[]
  ? DeepReadonlyArray3604<U>
  : T extends object
  ? DeepReadonlyObject3604<T>
  : T;

interface DeepReadonlyArray3604<T> extends ReadonlyArray<DeepReadonly3604<T>> {}

type DeepReadonlyObject3604<T> = {
  readonly [P in keyof T]: DeepReadonly3604<T[P]>;
};

type UnionToIntersection3604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3604<T> = UnionToIntersection3604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3604<T extends unknown[], V> = [...T, V];

type TuplifyUnion3604<T, L = LastOf3604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3604<TuplifyUnion3604<Exclude<T, L>>, L>;

type DeepPartial3604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3604<T[P]> }
  : T;

type Paths3604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3604<K, Paths3604<T[K], Prev3604[D]>> : never }[keyof T]
  : never;

type Prev3604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3604 {
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

type ConfigPaths3604 = Paths3604<NestedConfig3604>;

interface HeavyProps3604 {
  config: DeepPartial3604<NestedConfig3604>;
  path?: ConfigPaths3604;
}

const HeavyComponent3604 = memo(function HeavyComponent3604({ config }: HeavyProps3604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3604.displayName = 'HeavyComponent3604';
export default HeavyComponent3604;
