'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14112<T> = T extends (infer U)[]
  ? DeepReadonlyArray14112<U>
  : T extends object
  ? DeepReadonlyObject14112<T>
  : T;

interface DeepReadonlyArray14112<T> extends ReadonlyArray<DeepReadonly14112<T>> {}

type DeepReadonlyObject14112<T> = {
  readonly [P in keyof T]: DeepReadonly14112<T[P]>;
};

type UnionToIntersection14112<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14112<T> = UnionToIntersection14112<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14112<T extends unknown[], V> = [...T, V];

type TuplifyUnion14112<T, L = LastOf14112<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14112<TuplifyUnion14112<Exclude<T, L>>, L>;

type DeepPartial14112<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14112<T[P]> }
  : T;

type Paths14112<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14112<K, Paths14112<T[K], Prev14112[D]>> : never }[keyof T]
  : never;

type Prev14112 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14112<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14112 {
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

type ConfigPaths14112 = Paths14112<NestedConfig14112>;

interface HeavyProps14112 {
  config: DeepPartial14112<NestedConfig14112>;
  path?: ConfigPaths14112;
}

const HeavyComponent14112 = memo(function HeavyComponent14112({ config }: HeavyProps14112) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14112) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14112 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14112: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14112.displayName = 'HeavyComponent14112';
export default HeavyComponent14112;
