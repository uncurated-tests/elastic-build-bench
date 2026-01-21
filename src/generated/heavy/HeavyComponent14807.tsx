'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14807<T> = T extends (infer U)[]
  ? DeepReadonlyArray14807<U>
  : T extends object
  ? DeepReadonlyObject14807<T>
  : T;

interface DeepReadonlyArray14807<T> extends ReadonlyArray<DeepReadonly14807<T>> {}

type DeepReadonlyObject14807<T> = {
  readonly [P in keyof T]: DeepReadonly14807<T[P]>;
};

type UnionToIntersection14807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14807<T> = UnionToIntersection14807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14807<T extends unknown[], V> = [...T, V];

type TuplifyUnion14807<T, L = LastOf14807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14807<TuplifyUnion14807<Exclude<T, L>>, L>;

type DeepPartial14807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14807<T[P]> }
  : T;

type Paths14807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14807<K, Paths14807<T[K], Prev14807[D]>> : never }[keyof T]
  : never;

type Prev14807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14807 {
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

type ConfigPaths14807 = Paths14807<NestedConfig14807>;

interface HeavyProps14807 {
  config: DeepPartial14807<NestedConfig14807>;
  path?: ConfigPaths14807;
}

const HeavyComponent14807 = memo(function HeavyComponent14807({ config }: HeavyProps14807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14807.displayName = 'HeavyComponent14807';
export default HeavyComponent14807;
