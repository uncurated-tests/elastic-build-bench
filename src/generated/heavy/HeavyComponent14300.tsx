'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14300<T> = T extends (infer U)[]
  ? DeepReadonlyArray14300<U>
  : T extends object
  ? DeepReadonlyObject14300<T>
  : T;

interface DeepReadonlyArray14300<T> extends ReadonlyArray<DeepReadonly14300<T>> {}

type DeepReadonlyObject14300<T> = {
  readonly [P in keyof T]: DeepReadonly14300<T[P]>;
};

type UnionToIntersection14300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14300<T> = UnionToIntersection14300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14300<T extends unknown[], V> = [...T, V];

type TuplifyUnion14300<T, L = LastOf14300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14300<TuplifyUnion14300<Exclude<T, L>>, L>;

type DeepPartial14300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14300<T[P]> }
  : T;

type Paths14300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14300<K, Paths14300<T[K], Prev14300[D]>> : never }[keyof T]
  : never;

type Prev14300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14300 {
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

type ConfigPaths14300 = Paths14300<NestedConfig14300>;

interface HeavyProps14300 {
  config: DeepPartial14300<NestedConfig14300>;
  path?: ConfigPaths14300;
}

const HeavyComponent14300 = memo(function HeavyComponent14300({ config }: HeavyProps14300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14300.displayName = 'HeavyComponent14300';
export default HeavyComponent14300;
