'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14086<T> = T extends (infer U)[]
  ? DeepReadonlyArray14086<U>
  : T extends object
  ? DeepReadonlyObject14086<T>
  : T;

interface DeepReadonlyArray14086<T> extends ReadonlyArray<DeepReadonly14086<T>> {}

type DeepReadonlyObject14086<T> = {
  readonly [P in keyof T]: DeepReadonly14086<T[P]>;
};

type UnionToIntersection14086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14086<T> = UnionToIntersection14086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14086<T extends unknown[], V> = [...T, V];

type TuplifyUnion14086<T, L = LastOf14086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14086<TuplifyUnion14086<Exclude<T, L>>, L>;

type DeepPartial14086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14086<T[P]> }
  : T;

type Paths14086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14086<K, Paths14086<T[K], Prev14086[D]>> : never }[keyof T]
  : never;

type Prev14086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14086 {
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

type ConfigPaths14086 = Paths14086<NestedConfig14086>;

interface HeavyProps14086 {
  config: DeepPartial14086<NestedConfig14086>;
  path?: ConfigPaths14086;
}

const HeavyComponent14086 = memo(function HeavyComponent14086({ config }: HeavyProps14086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14086.displayName = 'HeavyComponent14086';
export default HeavyComponent14086;
