'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14879<T> = T extends (infer U)[]
  ? DeepReadonlyArray14879<U>
  : T extends object
  ? DeepReadonlyObject14879<T>
  : T;

interface DeepReadonlyArray14879<T> extends ReadonlyArray<DeepReadonly14879<T>> {}

type DeepReadonlyObject14879<T> = {
  readonly [P in keyof T]: DeepReadonly14879<T[P]>;
};

type UnionToIntersection14879<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14879<T> = UnionToIntersection14879<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14879<T extends unknown[], V> = [...T, V];

type TuplifyUnion14879<T, L = LastOf14879<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14879<TuplifyUnion14879<Exclude<T, L>>, L>;

type DeepPartial14879<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14879<T[P]> }
  : T;

type Paths14879<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14879<K, Paths14879<T[K], Prev14879[D]>> : never }[keyof T]
  : never;

type Prev14879 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14879<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14879 {
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

type ConfigPaths14879 = Paths14879<NestedConfig14879>;

interface HeavyProps14879 {
  config: DeepPartial14879<NestedConfig14879>;
  path?: ConfigPaths14879;
}

const HeavyComponent14879 = memo(function HeavyComponent14879({ config }: HeavyProps14879) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14879) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14879 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14879: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14879.displayName = 'HeavyComponent14879';
export default HeavyComponent14879;
