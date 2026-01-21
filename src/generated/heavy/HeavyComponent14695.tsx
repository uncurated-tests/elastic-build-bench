'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14695<T> = T extends (infer U)[]
  ? DeepReadonlyArray14695<U>
  : T extends object
  ? DeepReadonlyObject14695<T>
  : T;

interface DeepReadonlyArray14695<T> extends ReadonlyArray<DeepReadonly14695<T>> {}

type DeepReadonlyObject14695<T> = {
  readonly [P in keyof T]: DeepReadonly14695<T[P]>;
};

type UnionToIntersection14695<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14695<T> = UnionToIntersection14695<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14695<T extends unknown[], V> = [...T, V];

type TuplifyUnion14695<T, L = LastOf14695<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14695<TuplifyUnion14695<Exclude<T, L>>, L>;

type DeepPartial14695<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14695<T[P]> }
  : T;

type Paths14695<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14695<K, Paths14695<T[K], Prev14695[D]>> : never }[keyof T]
  : never;

type Prev14695 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14695<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14695 {
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

type ConfigPaths14695 = Paths14695<NestedConfig14695>;

interface HeavyProps14695 {
  config: DeepPartial14695<NestedConfig14695>;
  path?: ConfigPaths14695;
}

const HeavyComponent14695 = memo(function HeavyComponent14695({ config }: HeavyProps14695) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14695) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14695 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14695: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14695.displayName = 'HeavyComponent14695';
export default HeavyComponent14695;
