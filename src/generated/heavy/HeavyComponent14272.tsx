'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14272<T> = T extends (infer U)[]
  ? DeepReadonlyArray14272<U>
  : T extends object
  ? DeepReadonlyObject14272<T>
  : T;

interface DeepReadonlyArray14272<T> extends ReadonlyArray<DeepReadonly14272<T>> {}

type DeepReadonlyObject14272<T> = {
  readonly [P in keyof T]: DeepReadonly14272<T[P]>;
};

type UnionToIntersection14272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14272<T> = UnionToIntersection14272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14272<T extends unknown[], V> = [...T, V];

type TuplifyUnion14272<T, L = LastOf14272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14272<TuplifyUnion14272<Exclude<T, L>>, L>;

type DeepPartial14272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14272<T[P]> }
  : T;

type Paths14272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14272<K, Paths14272<T[K], Prev14272[D]>> : never }[keyof T]
  : never;

type Prev14272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14272 {
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

type ConfigPaths14272 = Paths14272<NestedConfig14272>;

interface HeavyProps14272 {
  config: DeepPartial14272<NestedConfig14272>;
  path?: ConfigPaths14272;
}

const HeavyComponent14272 = memo(function HeavyComponent14272({ config }: HeavyProps14272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14272.displayName = 'HeavyComponent14272';
export default HeavyComponent14272;
