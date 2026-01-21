'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14321<T> = T extends (infer U)[]
  ? DeepReadonlyArray14321<U>
  : T extends object
  ? DeepReadonlyObject14321<T>
  : T;

interface DeepReadonlyArray14321<T> extends ReadonlyArray<DeepReadonly14321<T>> {}

type DeepReadonlyObject14321<T> = {
  readonly [P in keyof T]: DeepReadonly14321<T[P]>;
};

type UnionToIntersection14321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14321<T> = UnionToIntersection14321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14321<T extends unknown[], V> = [...T, V];

type TuplifyUnion14321<T, L = LastOf14321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14321<TuplifyUnion14321<Exclude<T, L>>, L>;

type DeepPartial14321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14321<T[P]> }
  : T;

type Paths14321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14321<K, Paths14321<T[K], Prev14321[D]>> : never }[keyof T]
  : never;

type Prev14321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14321 {
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

type ConfigPaths14321 = Paths14321<NestedConfig14321>;

interface HeavyProps14321 {
  config: DeepPartial14321<NestedConfig14321>;
  path?: ConfigPaths14321;
}

const HeavyComponent14321 = memo(function HeavyComponent14321({ config }: HeavyProps14321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14321.displayName = 'HeavyComponent14321';
export default HeavyComponent14321;
