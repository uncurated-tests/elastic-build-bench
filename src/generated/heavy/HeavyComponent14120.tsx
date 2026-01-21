'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14120<T> = T extends (infer U)[]
  ? DeepReadonlyArray14120<U>
  : T extends object
  ? DeepReadonlyObject14120<T>
  : T;

interface DeepReadonlyArray14120<T> extends ReadonlyArray<DeepReadonly14120<T>> {}

type DeepReadonlyObject14120<T> = {
  readonly [P in keyof T]: DeepReadonly14120<T[P]>;
};

type UnionToIntersection14120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14120<T> = UnionToIntersection14120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14120<T extends unknown[], V> = [...T, V];

type TuplifyUnion14120<T, L = LastOf14120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14120<TuplifyUnion14120<Exclude<T, L>>, L>;

type DeepPartial14120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14120<T[P]> }
  : T;

type Paths14120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14120<K, Paths14120<T[K], Prev14120[D]>> : never }[keyof T]
  : never;

type Prev14120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14120 {
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

type ConfigPaths14120 = Paths14120<NestedConfig14120>;

interface HeavyProps14120 {
  config: DeepPartial14120<NestedConfig14120>;
  path?: ConfigPaths14120;
}

const HeavyComponent14120 = memo(function HeavyComponent14120({ config }: HeavyProps14120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14120.displayName = 'HeavyComponent14120';
export default HeavyComponent14120;
