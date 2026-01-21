'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14880<T> = T extends (infer U)[]
  ? DeepReadonlyArray14880<U>
  : T extends object
  ? DeepReadonlyObject14880<T>
  : T;

interface DeepReadonlyArray14880<T> extends ReadonlyArray<DeepReadonly14880<T>> {}

type DeepReadonlyObject14880<T> = {
  readonly [P in keyof T]: DeepReadonly14880<T[P]>;
};

type UnionToIntersection14880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14880<T> = UnionToIntersection14880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14880<T extends unknown[], V> = [...T, V];

type TuplifyUnion14880<T, L = LastOf14880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14880<TuplifyUnion14880<Exclude<T, L>>, L>;

type DeepPartial14880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14880<T[P]> }
  : T;

type Paths14880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14880<K, Paths14880<T[K], Prev14880[D]>> : never }[keyof T]
  : never;

type Prev14880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14880 {
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

type ConfigPaths14880 = Paths14880<NestedConfig14880>;

interface HeavyProps14880 {
  config: DeepPartial14880<NestedConfig14880>;
  path?: ConfigPaths14880;
}

const HeavyComponent14880 = memo(function HeavyComponent14880({ config }: HeavyProps14880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14880.displayName = 'HeavyComponent14880';
export default HeavyComponent14880;
