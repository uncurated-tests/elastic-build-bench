'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14106<T> = T extends (infer U)[]
  ? DeepReadonlyArray14106<U>
  : T extends object
  ? DeepReadonlyObject14106<T>
  : T;

interface DeepReadonlyArray14106<T> extends ReadonlyArray<DeepReadonly14106<T>> {}

type DeepReadonlyObject14106<T> = {
  readonly [P in keyof T]: DeepReadonly14106<T[P]>;
};

type UnionToIntersection14106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14106<T> = UnionToIntersection14106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14106<T extends unknown[], V> = [...T, V];

type TuplifyUnion14106<T, L = LastOf14106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14106<TuplifyUnion14106<Exclude<T, L>>, L>;

type DeepPartial14106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14106<T[P]> }
  : T;

type Paths14106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14106<K, Paths14106<T[K], Prev14106[D]>> : never }[keyof T]
  : never;

type Prev14106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14106 {
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

type ConfigPaths14106 = Paths14106<NestedConfig14106>;

interface HeavyProps14106 {
  config: DeepPartial14106<NestedConfig14106>;
  path?: ConfigPaths14106;
}

const HeavyComponent14106 = memo(function HeavyComponent14106({ config }: HeavyProps14106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14106.displayName = 'HeavyComponent14106';
export default HeavyComponent14106;
