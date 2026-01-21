'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14691<T> = T extends (infer U)[]
  ? DeepReadonlyArray14691<U>
  : T extends object
  ? DeepReadonlyObject14691<T>
  : T;

interface DeepReadonlyArray14691<T> extends ReadonlyArray<DeepReadonly14691<T>> {}

type DeepReadonlyObject14691<T> = {
  readonly [P in keyof T]: DeepReadonly14691<T[P]>;
};

type UnionToIntersection14691<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14691<T> = UnionToIntersection14691<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14691<T extends unknown[], V> = [...T, V];

type TuplifyUnion14691<T, L = LastOf14691<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14691<TuplifyUnion14691<Exclude<T, L>>, L>;

type DeepPartial14691<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14691<T[P]> }
  : T;

type Paths14691<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14691<K, Paths14691<T[K], Prev14691[D]>> : never }[keyof T]
  : never;

type Prev14691 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14691<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14691 {
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

type ConfigPaths14691 = Paths14691<NestedConfig14691>;

interface HeavyProps14691 {
  config: DeepPartial14691<NestedConfig14691>;
  path?: ConfigPaths14691;
}

const HeavyComponent14691 = memo(function HeavyComponent14691({ config }: HeavyProps14691) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14691) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14691 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14691: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14691.displayName = 'HeavyComponent14691';
export default HeavyComponent14691;
