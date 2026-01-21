'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14837<T> = T extends (infer U)[]
  ? DeepReadonlyArray14837<U>
  : T extends object
  ? DeepReadonlyObject14837<T>
  : T;

interface DeepReadonlyArray14837<T> extends ReadonlyArray<DeepReadonly14837<T>> {}

type DeepReadonlyObject14837<T> = {
  readonly [P in keyof T]: DeepReadonly14837<T[P]>;
};

type UnionToIntersection14837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14837<T> = UnionToIntersection14837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14837<T extends unknown[], V> = [...T, V];

type TuplifyUnion14837<T, L = LastOf14837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14837<TuplifyUnion14837<Exclude<T, L>>, L>;

type DeepPartial14837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14837<T[P]> }
  : T;

type Paths14837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14837<K, Paths14837<T[K], Prev14837[D]>> : never }[keyof T]
  : never;

type Prev14837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14837 {
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

type ConfigPaths14837 = Paths14837<NestedConfig14837>;

interface HeavyProps14837 {
  config: DeepPartial14837<NestedConfig14837>;
  path?: ConfigPaths14837;
}

const HeavyComponent14837 = memo(function HeavyComponent14837({ config }: HeavyProps14837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14837.displayName = 'HeavyComponent14837';
export default HeavyComponent14837;
