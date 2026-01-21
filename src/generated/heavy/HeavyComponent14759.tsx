'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14759<T> = T extends (infer U)[]
  ? DeepReadonlyArray14759<U>
  : T extends object
  ? DeepReadonlyObject14759<T>
  : T;

interface DeepReadonlyArray14759<T> extends ReadonlyArray<DeepReadonly14759<T>> {}

type DeepReadonlyObject14759<T> = {
  readonly [P in keyof T]: DeepReadonly14759<T[P]>;
};

type UnionToIntersection14759<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14759<T> = UnionToIntersection14759<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14759<T extends unknown[], V> = [...T, V];

type TuplifyUnion14759<T, L = LastOf14759<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14759<TuplifyUnion14759<Exclude<T, L>>, L>;

type DeepPartial14759<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14759<T[P]> }
  : T;

type Paths14759<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14759<K, Paths14759<T[K], Prev14759[D]>> : never }[keyof T]
  : never;

type Prev14759 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14759<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14759 {
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

type ConfigPaths14759 = Paths14759<NestedConfig14759>;

interface HeavyProps14759 {
  config: DeepPartial14759<NestedConfig14759>;
  path?: ConfigPaths14759;
}

const HeavyComponent14759 = memo(function HeavyComponent14759({ config }: HeavyProps14759) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14759) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14759 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14759: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14759.displayName = 'HeavyComponent14759';
export default HeavyComponent14759;
