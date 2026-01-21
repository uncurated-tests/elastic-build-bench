'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14045<T> = T extends (infer U)[]
  ? DeepReadonlyArray14045<U>
  : T extends object
  ? DeepReadonlyObject14045<T>
  : T;

interface DeepReadonlyArray14045<T> extends ReadonlyArray<DeepReadonly14045<T>> {}

type DeepReadonlyObject14045<T> = {
  readonly [P in keyof T]: DeepReadonly14045<T[P]>;
};

type UnionToIntersection14045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14045<T> = UnionToIntersection14045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14045<T extends unknown[], V> = [...T, V];

type TuplifyUnion14045<T, L = LastOf14045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14045<TuplifyUnion14045<Exclude<T, L>>, L>;

type DeepPartial14045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14045<T[P]> }
  : T;

type Paths14045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14045<K, Paths14045<T[K], Prev14045[D]>> : never }[keyof T]
  : never;

type Prev14045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14045 {
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

type ConfigPaths14045 = Paths14045<NestedConfig14045>;

interface HeavyProps14045 {
  config: DeepPartial14045<NestedConfig14045>;
  path?: ConfigPaths14045;
}

const HeavyComponent14045 = memo(function HeavyComponent14045({ config }: HeavyProps14045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14045.displayName = 'HeavyComponent14045';
export default HeavyComponent14045;
