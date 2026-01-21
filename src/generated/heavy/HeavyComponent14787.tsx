'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14787<T> = T extends (infer U)[]
  ? DeepReadonlyArray14787<U>
  : T extends object
  ? DeepReadonlyObject14787<T>
  : T;

interface DeepReadonlyArray14787<T> extends ReadonlyArray<DeepReadonly14787<T>> {}

type DeepReadonlyObject14787<T> = {
  readonly [P in keyof T]: DeepReadonly14787<T[P]>;
};

type UnionToIntersection14787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14787<T> = UnionToIntersection14787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14787<T extends unknown[], V> = [...T, V];

type TuplifyUnion14787<T, L = LastOf14787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14787<TuplifyUnion14787<Exclude<T, L>>, L>;

type DeepPartial14787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14787<T[P]> }
  : T;

type Paths14787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14787<K, Paths14787<T[K], Prev14787[D]>> : never }[keyof T]
  : never;

type Prev14787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14787 {
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

type ConfigPaths14787 = Paths14787<NestedConfig14787>;

interface HeavyProps14787 {
  config: DeepPartial14787<NestedConfig14787>;
  path?: ConfigPaths14787;
}

const HeavyComponent14787 = memo(function HeavyComponent14787({ config }: HeavyProps14787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14787.displayName = 'HeavyComponent14787';
export default HeavyComponent14787;
