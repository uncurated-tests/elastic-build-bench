'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14597<T> = T extends (infer U)[]
  ? DeepReadonlyArray14597<U>
  : T extends object
  ? DeepReadonlyObject14597<T>
  : T;

interface DeepReadonlyArray14597<T> extends ReadonlyArray<DeepReadonly14597<T>> {}

type DeepReadonlyObject14597<T> = {
  readonly [P in keyof T]: DeepReadonly14597<T[P]>;
};

type UnionToIntersection14597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14597<T> = UnionToIntersection14597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14597<T extends unknown[], V> = [...T, V];

type TuplifyUnion14597<T, L = LastOf14597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14597<TuplifyUnion14597<Exclude<T, L>>, L>;

type DeepPartial14597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14597<T[P]> }
  : T;

type Paths14597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14597<K, Paths14597<T[K], Prev14597[D]>> : never }[keyof T]
  : never;

type Prev14597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14597 {
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

type ConfigPaths14597 = Paths14597<NestedConfig14597>;

interface HeavyProps14597 {
  config: DeepPartial14597<NestedConfig14597>;
  path?: ConfigPaths14597;
}

const HeavyComponent14597 = memo(function HeavyComponent14597({ config }: HeavyProps14597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14597.displayName = 'HeavyComponent14597';
export default HeavyComponent14597;
