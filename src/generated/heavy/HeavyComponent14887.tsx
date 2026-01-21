'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14887<T> = T extends (infer U)[]
  ? DeepReadonlyArray14887<U>
  : T extends object
  ? DeepReadonlyObject14887<T>
  : T;

interface DeepReadonlyArray14887<T> extends ReadonlyArray<DeepReadonly14887<T>> {}

type DeepReadonlyObject14887<T> = {
  readonly [P in keyof T]: DeepReadonly14887<T[P]>;
};

type UnionToIntersection14887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14887<T> = UnionToIntersection14887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14887<T extends unknown[], V> = [...T, V];

type TuplifyUnion14887<T, L = LastOf14887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14887<TuplifyUnion14887<Exclude<T, L>>, L>;

type DeepPartial14887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14887<T[P]> }
  : T;

type Paths14887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14887<K, Paths14887<T[K], Prev14887[D]>> : never }[keyof T]
  : never;

type Prev14887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14887 {
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

type ConfigPaths14887 = Paths14887<NestedConfig14887>;

interface HeavyProps14887 {
  config: DeepPartial14887<NestedConfig14887>;
  path?: ConfigPaths14887;
}

const HeavyComponent14887 = memo(function HeavyComponent14887({ config }: HeavyProps14887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14887.displayName = 'HeavyComponent14887';
export default HeavyComponent14887;
