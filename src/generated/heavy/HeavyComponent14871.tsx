'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14871<T> = T extends (infer U)[]
  ? DeepReadonlyArray14871<U>
  : T extends object
  ? DeepReadonlyObject14871<T>
  : T;

interface DeepReadonlyArray14871<T> extends ReadonlyArray<DeepReadonly14871<T>> {}

type DeepReadonlyObject14871<T> = {
  readonly [P in keyof T]: DeepReadonly14871<T[P]>;
};

type UnionToIntersection14871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14871<T> = UnionToIntersection14871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14871<T extends unknown[], V> = [...T, V];

type TuplifyUnion14871<T, L = LastOf14871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14871<TuplifyUnion14871<Exclude<T, L>>, L>;

type DeepPartial14871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14871<T[P]> }
  : T;

type Paths14871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14871<K, Paths14871<T[K], Prev14871[D]>> : never }[keyof T]
  : never;

type Prev14871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14871 {
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

type ConfigPaths14871 = Paths14871<NestedConfig14871>;

interface HeavyProps14871 {
  config: DeepPartial14871<NestedConfig14871>;
  path?: ConfigPaths14871;
}

const HeavyComponent14871 = memo(function HeavyComponent14871({ config }: HeavyProps14871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14871.displayName = 'HeavyComponent14871';
export default HeavyComponent14871;
