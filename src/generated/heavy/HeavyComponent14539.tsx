'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14539<T> = T extends (infer U)[]
  ? DeepReadonlyArray14539<U>
  : T extends object
  ? DeepReadonlyObject14539<T>
  : T;

interface DeepReadonlyArray14539<T> extends ReadonlyArray<DeepReadonly14539<T>> {}

type DeepReadonlyObject14539<T> = {
  readonly [P in keyof T]: DeepReadonly14539<T[P]>;
};

type UnionToIntersection14539<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14539<T> = UnionToIntersection14539<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14539<T extends unknown[], V> = [...T, V];

type TuplifyUnion14539<T, L = LastOf14539<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14539<TuplifyUnion14539<Exclude<T, L>>, L>;

type DeepPartial14539<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14539<T[P]> }
  : T;

type Paths14539<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14539<K, Paths14539<T[K], Prev14539[D]>> : never }[keyof T]
  : never;

type Prev14539 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14539<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14539 {
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

type ConfigPaths14539 = Paths14539<NestedConfig14539>;

interface HeavyProps14539 {
  config: DeepPartial14539<NestedConfig14539>;
  path?: ConfigPaths14539;
}

const HeavyComponent14539 = memo(function HeavyComponent14539({ config }: HeavyProps14539) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14539) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14539 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14539: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14539.displayName = 'HeavyComponent14539';
export default HeavyComponent14539;
