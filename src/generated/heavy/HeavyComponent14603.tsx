'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14603<T> = T extends (infer U)[]
  ? DeepReadonlyArray14603<U>
  : T extends object
  ? DeepReadonlyObject14603<T>
  : T;

interface DeepReadonlyArray14603<T> extends ReadonlyArray<DeepReadonly14603<T>> {}

type DeepReadonlyObject14603<T> = {
  readonly [P in keyof T]: DeepReadonly14603<T[P]>;
};

type UnionToIntersection14603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14603<T> = UnionToIntersection14603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14603<T extends unknown[], V> = [...T, V];

type TuplifyUnion14603<T, L = LastOf14603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14603<TuplifyUnion14603<Exclude<T, L>>, L>;

type DeepPartial14603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14603<T[P]> }
  : T;

type Paths14603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14603<K, Paths14603<T[K], Prev14603[D]>> : never }[keyof T]
  : never;

type Prev14603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14603 {
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

type ConfigPaths14603 = Paths14603<NestedConfig14603>;

interface HeavyProps14603 {
  config: DeepPartial14603<NestedConfig14603>;
  path?: ConfigPaths14603;
}

const HeavyComponent14603 = memo(function HeavyComponent14603({ config }: HeavyProps14603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14603.displayName = 'HeavyComponent14603';
export default HeavyComponent14603;
