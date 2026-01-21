'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14940<T> = T extends (infer U)[]
  ? DeepReadonlyArray14940<U>
  : T extends object
  ? DeepReadonlyObject14940<T>
  : T;

interface DeepReadonlyArray14940<T> extends ReadonlyArray<DeepReadonly14940<T>> {}

type DeepReadonlyObject14940<T> = {
  readonly [P in keyof T]: DeepReadonly14940<T[P]>;
};

type UnionToIntersection14940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14940<T> = UnionToIntersection14940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14940<T extends unknown[], V> = [...T, V];

type TuplifyUnion14940<T, L = LastOf14940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14940<TuplifyUnion14940<Exclude<T, L>>, L>;

type DeepPartial14940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14940<T[P]> }
  : T;

type Paths14940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14940<K, Paths14940<T[K], Prev14940[D]>> : never }[keyof T]
  : never;

type Prev14940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14940 {
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

type ConfigPaths14940 = Paths14940<NestedConfig14940>;

interface HeavyProps14940 {
  config: DeepPartial14940<NestedConfig14940>;
  path?: ConfigPaths14940;
}

const HeavyComponent14940 = memo(function HeavyComponent14940({ config }: HeavyProps14940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14940.displayName = 'HeavyComponent14940';
export default HeavyComponent14940;
