'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14913<T> = T extends (infer U)[]
  ? DeepReadonlyArray14913<U>
  : T extends object
  ? DeepReadonlyObject14913<T>
  : T;

interface DeepReadonlyArray14913<T> extends ReadonlyArray<DeepReadonly14913<T>> {}

type DeepReadonlyObject14913<T> = {
  readonly [P in keyof T]: DeepReadonly14913<T[P]>;
};

type UnionToIntersection14913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14913<T> = UnionToIntersection14913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14913<T extends unknown[], V> = [...T, V];

type TuplifyUnion14913<T, L = LastOf14913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14913<TuplifyUnion14913<Exclude<T, L>>, L>;

type DeepPartial14913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14913<T[P]> }
  : T;

type Paths14913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14913<K, Paths14913<T[K], Prev14913[D]>> : never }[keyof T]
  : never;

type Prev14913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14913 {
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

type ConfigPaths14913 = Paths14913<NestedConfig14913>;

interface HeavyProps14913 {
  config: DeepPartial14913<NestedConfig14913>;
  path?: ConfigPaths14913;
}

const HeavyComponent14913 = memo(function HeavyComponent14913({ config }: HeavyProps14913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14913.displayName = 'HeavyComponent14913';
export default HeavyComponent14913;
