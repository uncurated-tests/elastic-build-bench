'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14527<T> = T extends (infer U)[]
  ? DeepReadonlyArray14527<U>
  : T extends object
  ? DeepReadonlyObject14527<T>
  : T;

interface DeepReadonlyArray14527<T> extends ReadonlyArray<DeepReadonly14527<T>> {}

type DeepReadonlyObject14527<T> = {
  readonly [P in keyof T]: DeepReadonly14527<T[P]>;
};

type UnionToIntersection14527<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14527<T> = UnionToIntersection14527<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14527<T extends unknown[], V> = [...T, V];

type TuplifyUnion14527<T, L = LastOf14527<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14527<TuplifyUnion14527<Exclude<T, L>>, L>;

type DeepPartial14527<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14527<T[P]> }
  : T;

type Paths14527<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14527<K, Paths14527<T[K], Prev14527[D]>> : never }[keyof T]
  : never;

type Prev14527 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14527<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14527 {
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

type ConfigPaths14527 = Paths14527<NestedConfig14527>;

interface HeavyProps14527 {
  config: DeepPartial14527<NestedConfig14527>;
  path?: ConfigPaths14527;
}

const HeavyComponent14527 = memo(function HeavyComponent14527({ config }: HeavyProps14527) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14527) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14527 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14527: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14527.displayName = 'HeavyComponent14527';
export default HeavyComponent14527;
