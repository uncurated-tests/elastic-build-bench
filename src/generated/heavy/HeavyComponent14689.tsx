'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14689<T> = T extends (infer U)[]
  ? DeepReadonlyArray14689<U>
  : T extends object
  ? DeepReadonlyObject14689<T>
  : T;

interface DeepReadonlyArray14689<T> extends ReadonlyArray<DeepReadonly14689<T>> {}

type DeepReadonlyObject14689<T> = {
  readonly [P in keyof T]: DeepReadonly14689<T[P]>;
};

type UnionToIntersection14689<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14689<T> = UnionToIntersection14689<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14689<T extends unknown[], V> = [...T, V];

type TuplifyUnion14689<T, L = LastOf14689<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14689<TuplifyUnion14689<Exclude<T, L>>, L>;

type DeepPartial14689<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14689<T[P]> }
  : T;

type Paths14689<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14689<K, Paths14689<T[K], Prev14689[D]>> : never }[keyof T]
  : never;

type Prev14689 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14689<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14689 {
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

type ConfigPaths14689 = Paths14689<NestedConfig14689>;

interface HeavyProps14689 {
  config: DeepPartial14689<NestedConfig14689>;
  path?: ConfigPaths14689;
}

const HeavyComponent14689 = memo(function HeavyComponent14689({ config }: HeavyProps14689) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14689) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14689 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14689: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14689.displayName = 'HeavyComponent14689';
export default HeavyComponent14689;
