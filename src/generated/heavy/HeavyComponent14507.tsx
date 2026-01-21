'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14507<T> = T extends (infer U)[]
  ? DeepReadonlyArray14507<U>
  : T extends object
  ? DeepReadonlyObject14507<T>
  : T;

interface DeepReadonlyArray14507<T> extends ReadonlyArray<DeepReadonly14507<T>> {}

type DeepReadonlyObject14507<T> = {
  readonly [P in keyof T]: DeepReadonly14507<T[P]>;
};

type UnionToIntersection14507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14507<T> = UnionToIntersection14507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14507<T extends unknown[], V> = [...T, V];

type TuplifyUnion14507<T, L = LastOf14507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14507<TuplifyUnion14507<Exclude<T, L>>, L>;

type DeepPartial14507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14507<T[P]> }
  : T;

type Paths14507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14507<K, Paths14507<T[K], Prev14507[D]>> : never }[keyof T]
  : never;

type Prev14507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14507 {
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

type ConfigPaths14507 = Paths14507<NestedConfig14507>;

interface HeavyProps14507 {
  config: DeepPartial14507<NestedConfig14507>;
  path?: ConfigPaths14507;
}

const HeavyComponent14507 = memo(function HeavyComponent14507({ config }: HeavyProps14507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14507.displayName = 'HeavyComponent14507';
export default HeavyComponent14507;
