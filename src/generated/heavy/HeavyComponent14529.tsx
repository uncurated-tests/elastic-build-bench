'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14529<T> = T extends (infer U)[]
  ? DeepReadonlyArray14529<U>
  : T extends object
  ? DeepReadonlyObject14529<T>
  : T;

interface DeepReadonlyArray14529<T> extends ReadonlyArray<DeepReadonly14529<T>> {}

type DeepReadonlyObject14529<T> = {
  readonly [P in keyof T]: DeepReadonly14529<T[P]>;
};

type UnionToIntersection14529<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14529<T> = UnionToIntersection14529<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14529<T extends unknown[], V> = [...T, V];

type TuplifyUnion14529<T, L = LastOf14529<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14529<TuplifyUnion14529<Exclude<T, L>>, L>;

type DeepPartial14529<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14529<T[P]> }
  : T;

type Paths14529<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14529<K, Paths14529<T[K], Prev14529[D]>> : never }[keyof T]
  : never;

type Prev14529 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14529<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14529 {
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

type ConfigPaths14529 = Paths14529<NestedConfig14529>;

interface HeavyProps14529 {
  config: DeepPartial14529<NestedConfig14529>;
  path?: ConfigPaths14529;
}

const HeavyComponent14529 = memo(function HeavyComponent14529({ config }: HeavyProps14529) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14529) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14529 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14529: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14529.displayName = 'HeavyComponent14529';
export default HeavyComponent14529;
