'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14200<T> = T extends (infer U)[]
  ? DeepReadonlyArray14200<U>
  : T extends object
  ? DeepReadonlyObject14200<T>
  : T;

interface DeepReadonlyArray14200<T> extends ReadonlyArray<DeepReadonly14200<T>> {}

type DeepReadonlyObject14200<T> = {
  readonly [P in keyof T]: DeepReadonly14200<T[P]>;
};

type UnionToIntersection14200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14200<T> = UnionToIntersection14200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14200<T extends unknown[], V> = [...T, V];

type TuplifyUnion14200<T, L = LastOf14200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14200<TuplifyUnion14200<Exclude<T, L>>, L>;

type DeepPartial14200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14200<T[P]> }
  : T;

type Paths14200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14200<K, Paths14200<T[K], Prev14200[D]>> : never }[keyof T]
  : never;

type Prev14200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14200 {
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

type ConfigPaths14200 = Paths14200<NestedConfig14200>;

interface HeavyProps14200 {
  config: DeepPartial14200<NestedConfig14200>;
  path?: ConfigPaths14200;
}

const HeavyComponent14200 = memo(function HeavyComponent14200({ config }: HeavyProps14200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14200.displayName = 'HeavyComponent14200';
export default HeavyComponent14200;
