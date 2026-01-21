'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14216<T> = T extends (infer U)[]
  ? DeepReadonlyArray14216<U>
  : T extends object
  ? DeepReadonlyObject14216<T>
  : T;

interface DeepReadonlyArray14216<T> extends ReadonlyArray<DeepReadonly14216<T>> {}

type DeepReadonlyObject14216<T> = {
  readonly [P in keyof T]: DeepReadonly14216<T[P]>;
};

type UnionToIntersection14216<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14216<T> = UnionToIntersection14216<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14216<T extends unknown[], V> = [...T, V];

type TuplifyUnion14216<T, L = LastOf14216<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14216<TuplifyUnion14216<Exclude<T, L>>, L>;

type DeepPartial14216<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14216<T[P]> }
  : T;

type Paths14216<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14216<K, Paths14216<T[K], Prev14216[D]>> : never }[keyof T]
  : never;

type Prev14216 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14216<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14216 {
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

type ConfigPaths14216 = Paths14216<NestedConfig14216>;

interface HeavyProps14216 {
  config: DeepPartial14216<NestedConfig14216>;
  path?: ConfigPaths14216;
}

const HeavyComponent14216 = memo(function HeavyComponent14216({ config }: HeavyProps14216) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14216) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14216 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14216: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14216.displayName = 'HeavyComponent14216';
export default HeavyComponent14216;
