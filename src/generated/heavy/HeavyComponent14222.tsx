'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14222<T> = T extends (infer U)[]
  ? DeepReadonlyArray14222<U>
  : T extends object
  ? DeepReadonlyObject14222<T>
  : T;

interface DeepReadonlyArray14222<T> extends ReadonlyArray<DeepReadonly14222<T>> {}

type DeepReadonlyObject14222<T> = {
  readonly [P in keyof T]: DeepReadonly14222<T[P]>;
};

type UnionToIntersection14222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14222<T> = UnionToIntersection14222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14222<T extends unknown[], V> = [...T, V];

type TuplifyUnion14222<T, L = LastOf14222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14222<TuplifyUnion14222<Exclude<T, L>>, L>;

type DeepPartial14222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14222<T[P]> }
  : T;

type Paths14222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14222<K, Paths14222<T[K], Prev14222[D]>> : never }[keyof T]
  : never;

type Prev14222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14222 {
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

type ConfigPaths14222 = Paths14222<NestedConfig14222>;

interface HeavyProps14222 {
  config: DeepPartial14222<NestedConfig14222>;
  path?: ConfigPaths14222;
}

const HeavyComponent14222 = memo(function HeavyComponent14222({ config }: HeavyProps14222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14222.displayName = 'HeavyComponent14222';
export default HeavyComponent14222;
