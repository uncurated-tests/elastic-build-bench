'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly110<T> = T extends (infer U)[]
  ? DeepReadonlyArray110<U>
  : T extends object
  ? DeepReadonlyObject110<T>
  : T;

interface DeepReadonlyArray110<T> extends ReadonlyArray<DeepReadonly110<T>> {}

type DeepReadonlyObject110<T> = {
  readonly [P in keyof T]: DeepReadonly110<T[P]>;
};

type UnionToIntersection110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf110<T> = UnionToIntersection110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push110<T extends unknown[], V> = [...T, V];

type TuplifyUnion110<T, L = LastOf110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push110<TuplifyUnion110<Exclude<T, L>>, L>;

type DeepPartial110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial110<T[P]> }
  : T;

type Paths110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join110<K, Paths110<T[K], Prev110[D]>> : never }[keyof T]
  : never;

type Prev110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig110 {
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

type ConfigPaths110 = Paths110<NestedConfig110>;

interface HeavyProps110 {
  config: DeepPartial110<NestedConfig110>;
  path?: ConfigPaths110;
}

const HeavyComponent110 = memo(function HeavyComponent110({ config }: HeavyProps110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent110.displayName = 'HeavyComponent110';
export default HeavyComponent110;
