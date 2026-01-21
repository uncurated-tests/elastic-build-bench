'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14304<T> = T extends (infer U)[]
  ? DeepReadonlyArray14304<U>
  : T extends object
  ? DeepReadonlyObject14304<T>
  : T;

interface DeepReadonlyArray14304<T> extends ReadonlyArray<DeepReadonly14304<T>> {}

type DeepReadonlyObject14304<T> = {
  readonly [P in keyof T]: DeepReadonly14304<T[P]>;
};

type UnionToIntersection14304<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14304<T> = UnionToIntersection14304<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14304<T extends unknown[], V> = [...T, V];

type TuplifyUnion14304<T, L = LastOf14304<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14304<TuplifyUnion14304<Exclude<T, L>>, L>;

type DeepPartial14304<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14304<T[P]> }
  : T;

type Paths14304<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14304<K, Paths14304<T[K], Prev14304[D]>> : never }[keyof T]
  : never;

type Prev14304 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14304<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14304 {
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

type ConfigPaths14304 = Paths14304<NestedConfig14304>;

interface HeavyProps14304 {
  config: DeepPartial14304<NestedConfig14304>;
  path?: ConfigPaths14304;
}

const HeavyComponent14304 = memo(function HeavyComponent14304({ config }: HeavyProps14304) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14304) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14304 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14304: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14304.displayName = 'HeavyComponent14304';
export default HeavyComponent14304;
