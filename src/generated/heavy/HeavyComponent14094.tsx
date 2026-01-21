'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14094<T> = T extends (infer U)[]
  ? DeepReadonlyArray14094<U>
  : T extends object
  ? DeepReadonlyObject14094<T>
  : T;

interface DeepReadonlyArray14094<T> extends ReadonlyArray<DeepReadonly14094<T>> {}

type DeepReadonlyObject14094<T> = {
  readonly [P in keyof T]: DeepReadonly14094<T[P]>;
};

type UnionToIntersection14094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14094<T> = UnionToIntersection14094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14094<T extends unknown[], V> = [...T, V];

type TuplifyUnion14094<T, L = LastOf14094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14094<TuplifyUnion14094<Exclude<T, L>>, L>;

type DeepPartial14094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14094<T[P]> }
  : T;

type Paths14094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14094<K, Paths14094<T[K], Prev14094[D]>> : never }[keyof T]
  : never;

type Prev14094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14094 {
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

type ConfigPaths14094 = Paths14094<NestedConfig14094>;

interface HeavyProps14094 {
  config: DeepPartial14094<NestedConfig14094>;
  path?: ConfigPaths14094;
}

const HeavyComponent14094 = memo(function HeavyComponent14094({ config }: HeavyProps14094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14094.displayName = 'HeavyComponent14094';
export default HeavyComponent14094;
