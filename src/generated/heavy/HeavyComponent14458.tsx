'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14458<T> = T extends (infer U)[]
  ? DeepReadonlyArray14458<U>
  : T extends object
  ? DeepReadonlyObject14458<T>
  : T;

interface DeepReadonlyArray14458<T> extends ReadonlyArray<DeepReadonly14458<T>> {}

type DeepReadonlyObject14458<T> = {
  readonly [P in keyof T]: DeepReadonly14458<T[P]>;
};

type UnionToIntersection14458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14458<T> = UnionToIntersection14458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14458<T extends unknown[], V> = [...T, V];

type TuplifyUnion14458<T, L = LastOf14458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14458<TuplifyUnion14458<Exclude<T, L>>, L>;

type DeepPartial14458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14458<T[P]> }
  : T;

type Paths14458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14458<K, Paths14458<T[K], Prev14458[D]>> : never }[keyof T]
  : never;

type Prev14458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14458 {
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

type ConfigPaths14458 = Paths14458<NestedConfig14458>;

interface HeavyProps14458 {
  config: DeepPartial14458<NestedConfig14458>;
  path?: ConfigPaths14458;
}

const HeavyComponent14458 = memo(function HeavyComponent14458({ config }: HeavyProps14458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14458.displayName = 'HeavyComponent14458';
export default HeavyComponent14458;
