'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14644<T> = T extends (infer U)[]
  ? DeepReadonlyArray14644<U>
  : T extends object
  ? DeepReadonlyObject14644<T>
  : T;

interface DeepReadonlyArray14644<T> extends ReadonlyArray<DeepReadonly14644<T>> {}

type DeepReadonlyObject14644<T> = {
  readonly [P in keyof T]: DeepReadonly14644<T[P]>;
};

type UnionToIntersection14644<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14644<T> = UnionToIntersection14644<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14644<T extends unknown[], V> = [...T, V];

type TuplifyUnion14644<T, L = LastOf14644<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14644<TuplifyUnion14644<Exclude<T, L>>, L>;

type DeepPartial14644<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14644<T[P]> }
  : T;

type Paths14644<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14644<K, Paths14644<T[K], Prev14644[D]>> : never }[keyof T]
  : never;

type Prev14644 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14644<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14644 {
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

type ConfigPaths14644 = Paths14644<NestedConfig14644>;

interface HeavyProps14644 {
  config: DeepPartial14644<NestedConfig14644>;
  path?: ConfigPaths14644;
}

const HeavyComponent14644 = memo(function HeavyComponent14644({ config }: HeavyProps14644) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14644) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14644 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14644: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14644.displayName = 'HeavyComponent14644';
export default HeavyComponent14644;
