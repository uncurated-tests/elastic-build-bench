'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14608<T> = T extends (infer U)[]
  ? DeepReadonlyArray14608<U>
  : T extends object
  ? DeepReadonlyObject14608<T>
  : T;

interface DeepReadonlyArray14608<T> extends ReadonlyArray<DeepReadonly14608<T>> {}

type DeepReadonlyObject14608<T> = {
  readonly [P in keyof T]: DeepReadonly14608<T[P]>;
};

type UnionToIntersection14608<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14608<T> = UnionToIntersection14608<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14608<T extends unknown[], V> = [...T, V];

type TuplifyUnion14608<T, L = LastOf14608<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14608<TuplifyUnion14608<Exclude<T, L>>, L>;

type DeepPartial14608<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14608<T[P]> }
  : T;

type Paths14608<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14608<K, Paths14608<T[K], Prev14608[D]>> : never }[keyof T]
  : never;

type Prev14608 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14608<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14608 {
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

type ConfigPaths14608 = Paths14608<NestedConfig14608>;

interface HeavyProps14608 {
  config: DeepPartial14608<NestedConfig14608>;
  path?: ConfigPaths14608;
}

const HeavyComponent14608 = memo(function HeavyComponent14608({ config }: HeavyProps14608) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14608) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14608 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14608: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14608.displayName = 'HeavyComponent14608';
export default HeavyComponent14608;
