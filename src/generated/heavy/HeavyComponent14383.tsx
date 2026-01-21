'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14383<T> = T extends (infer U)[]
  ? DeepReadonlyArray14383<U>
  : T extends object
  ? DeepReadonlyObject14383<T>
  : T;

interface DeepReadonlyArray14383<T> extends ReadonlyArray<DeepReadonly14383<T>> {}

type DeepReadonlyObject14383<T> = {
  readonly [P in keyof T]: DeepReadonly14383<T[P]>;
};

type UnionToIntersection14383<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14383<T> = UnionToIntersection14383<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14383<T extends unknown[], V> = [...T, V];

type TuplifyUnion14383<T, L = LastOf14383<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14383<TuplifyUnion14383<Exclude<T, L>>, L>;

type DeepPartial14383<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14383<T[P]> }
  : T;

type Paths14383<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14383<K, Paths14383<T[K], Prev14383[D]>> : never }[keyof T]
  : never;

type Prev14383 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14383<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14383 {
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

type ConfigPaths14383 = Paths14383<NestedConfig14383>;

interface HeavyProps14383 {
  config: DeepPartial14383<NestedConfig14383>;
  path?: ConfigPaths14383;
}

const HeavyComponent14383 = memo(function HeavyComponent14383({ config }: HeavyProps14383) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14383) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14383 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14383: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14383.displayName = 'HeavyComponent14383';
export default HeavyComponent14383;
