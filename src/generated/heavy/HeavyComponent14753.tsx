'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14753<T> = T extends (infer U)[]
  ? DeepReadonlyArray14753<U>
  : T extends object
  ? DeepReadonlyObject14753<T>
  : T;

interface DeepReadonlyArray14753<T> extends ReadonlyArray<DeepReadonly14753<T>> {}

type DeepReadonlyObject14753<T> = {
  readonly [P in keyof T]: DeepReadonly14753<T[P]>;
};

type UnionToIntersection14753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14753<T> = UnionToIntersection14753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14753<T extends unknown[], V> = [...T, V];

type TuplifyUnion14753<T, L = LastOf14753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14753<TuplifyUnion14753<Exclude<T, L>>, L>;

type DeepPartial14753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14753<T[P]> }
  : T;

type Paths14753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14753<K, Paths14753<T[K], Prev14753[D]>> : never }[keyof T]
  : never;

type Prev14753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14753 {
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

type ConfigPaths14753 = Paths14753<NestedConfig14753>;

interface HeavyProps14753 {
  config: DeepPartial14753<NestedConfig14753>;
  path?: ConfigPaths14753;
}

const HeavyComponent14753 = memo(function HeavyComponent14753({ config }: HeavyProps14753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14753.displayName = 'HeavyComponent14753';
export default HeavyComponent14753;
