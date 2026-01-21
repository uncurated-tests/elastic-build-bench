'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14232<T> = T extends (infer U)[]
  ? DeepReadonlyArray14232<U>
  : T extends object
  ? DeepReadonlyObject14232<T>
  : T;

interface DeepReadonlyArray14232<T> extends ReadonlyArray<DeepReadonly14232<T>> {}

type DeepReadonlyObject14232<T> = {
  readonly [P in keyof T]: DeepReadonly14232<T[P]>;
};

type UnionToIntersection14232<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14232<T> = UnionToIntersection14232<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14232<T extends unknown[], V> = [...T, V];

type TuplifyUnion14232<T, L = LastOf14232<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14232<TuplifyUnion14232<Exclude<T, L>>, L>;

type DeepPartial14232<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14232<T[P]> }
  : T;

type Paths14232<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14232<K, Paths14232<T[K], Prev14232[D]>> : never }[keyof T]
  : never;

type Prev14232 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14232<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14232 {
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

type ConfigPaths14232 = Paths14232<NestedConfig14232>;

interface HeavyProps14232 {
  config: DeepPartial14232<NestedConfig14232>;
  path?: ConfigPaths14232;
}

const HeavyComponent14232 = memo(function HeavyComponent14232({ config }: HeavyProps14232) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14232) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14232 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14232: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14232.displayName = 'HeavyComponent14232';
export default HeavyComponent14232;
