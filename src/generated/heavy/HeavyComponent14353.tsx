'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14353<T> = T extends (infer U)[]
  ? DeepReadonlyArray14353<U>
  : T extends object
  ? DeepReadonlyObject14353<T>
  : T;

interface DeepReadonlyArray14353<T> extends ReadonlyArray<DeepReadonly14353<T>> {}

type DeepReadonlyObject14353<T> = {
  readonly [P in keyof T]: DeepReadonly14353<T[P]>;
};

type UnionToIntersection14353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14353<T> = UnionToIntersection14353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14353<T extends unknown[], V> = [...T, V];

type TuplifyUnion14353<T, L = LastOf14353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14353<TuplifyUnion14353<Exclude<T, L>>, L>;

type DeepPartial14353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14353<T[P]> }
  : T;

type Paths14353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14353<K, Paths14353<T[K], Prev14353[D]>> : never }[keyof T]
  : never;

type Prev14353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14353 {
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

type ConfigPaths14353 = Paths14353<NestedConfig14353>;

interface HeavyProps14353 {
  config: DeepPartial14353<NestedConfig14353>;
  path?: ConfigPaths14353;
}

const HeavyComponent14353 = memo(function HeavyComponent14353({ config }: HeavyProps14353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14353.displayName = 'HeavyComponent14353';
export default HeavyComponent14353;
