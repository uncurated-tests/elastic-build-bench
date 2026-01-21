'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14398<T> = T extends (infer U)[]
  ? DeepReadonlyArray14398<U>
  : T extends object
  ? DeepReadonlyObject14398<T>
  : T;

interface DeepReadonlyArray14398<T> extends ReadonlyArray<DeepReadonly14398<T>> {}

type DeepReadonlyObject14398<T> = {
  readonly [P in keyof T]: DeepReadonly14398<T[P]>;
};

type UnionToIntersection14398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14398<T> = UnionToIntersection14398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14398<T extends unknown[], V> = [...T, V];

type TuplifyUnion14398<T, L = LastOf14398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14398<TuplifyUnion14398<Exclude<T, L>>, L>;

type DeepPartial14398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14398<T[P]> }
  : T;

type Paths14398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14398<K, Paths14398<T[K], Prev14398[D]>> : never }[keyof T]
  : never;

type Prev14398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14398 {
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

type ConfigPaths14398 = Paths14398<NestedConfig14398>;

interface HeavyProps14398 {
  config: DeepPartial14398<NestedConfig14398>;
  path?: ConfigPaths14398;
}

const HeavyComponent14398 = memo(function HeavyComponent14398({ config }: HeavyProps14398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14398.displayName = 'HeavyComponent14398';
export default HeavyComponent14398;
