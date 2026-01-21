'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly161<T> = T extends (infer U)[]
  ? DeepReadonlyArray161<U>
  : T extends object
  ? DeepReadonlyObject161<T>
  : T;

interface DeepReadonlyArray161<T> extends ReadonlyArray<DeepReadonly161<T>> {}

type DeepReadonlyObject161<T> = {
  readonly [P in keyof T]: DeepReadonly161<T[P]>;
};

type UnionToIntersection161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf161<T> = UnionToIntersection161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push161<T extends unknown[], V> = [...T, V];

type TuplifyUnion161<T, L = LastOf161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push161<TuplifyUnion161<Exclude<T, L>>, L>;

type DeepPartial161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial161<T[P]> }
  : T;

type Paths161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join161<K, Paths161<T[K], Prev161[D]>> : never }[keyof T]
  : never;

type Prev161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig161 {
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

type ConfigPaths161 = Paths161<NestedConfig161>;

interface HeavyProps161 {
  config: DeepPartial161<NestedConfig161>;
  path?: ConfigPaths161;
}

const HeavyComponent161 = memo(function HeavyComponent161({ config }: HeavyProps161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent161.displayName = 'HeavyComponent161';
export default HeavyComponent161;
