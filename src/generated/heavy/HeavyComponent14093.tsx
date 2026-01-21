'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14093<T> = T extends (infer U)[]
  ? DeepReadonlyArray14093<U>
  : T extends object
  ? DeepReadonlyObject14093<T>
  : T;

interface DeepReadonlyArray14093<T> extends ReadonlyArray<DeepReadonly14093<T>> {}

type DeepReadonlyObject14093<T> = {
  readonly [P in keyof T]: DeepReadonly14093<T[P]>;
};

type UnionToIntersection14093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14093<T> = UnionToIntersection14093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14093<T extends unknown[], V> = [...T, V];

type TuplifyUnion14093<T, L = LastOf14093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14093<TuplifyUnion14093<Exclude<T, L>>, L>;

type DeepPartial14093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14093<T[P]> }
  : T;

type Paths14093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14093<K, Paths14093<T[K], Prev14093[D]>> : never }[keyof T]
  : never;

type Prev14093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14093 {
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

type ConfigPaths14093 = Paths14093<NestedConfig14093>;

interface HeavyProps14093 {
  config: DeepPartial14093<NestedConfig14093>;
  path?: ConfigPaths14093;
}

const HeavyComponent14093 = memo(function HeavyComponent14093({ config }: HeavyProps14093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14093.displayName = 'HeavyComponent14093';
export default HeavyComponent14093;
