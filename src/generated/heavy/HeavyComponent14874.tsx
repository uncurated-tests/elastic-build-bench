'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14874<T> = T extends (infer U)[]
  ? DeepReadonlyArray14874<U>
  : T extends object
  ? DeepReadonlyObject14874<T>
  : T;

interface DeepReadonlyArray14874<T> extends ReadonlyArray<DeepReadonly14874<T>> {}

type DeepReadonlyObject14874<T> = {
  readonly [P in keyof T]: DeepReadonly14874<T[P]>;
};

type UnionToIntersection14874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14874<T> = UnionToIntersection14874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14874<T extends unknown[], V> = [...T, V];

type TuplifyUnion14874<T, L = LastOf14874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14874<TuplifyUnion14874<Exclude<T, L>>, L>;

type DeepPartial14874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14874<T[P]> }
  : T;

type Paths14874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14874<K, Paths14874<T[K], Prev14874[D]>> : never }[keyof T]
  : never;

type Prev14874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14874 {
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

type ConfigPaths14874 = Paths14874<NestedConfig14874>;

interface HeavyProps14874 {
  config: DeepPartial14874<NestedConfig14874>;
  path?: ConfigPaths14874;
}

const HeavyComponent14874 = memo(function HeavyComponent14874({ config }: HeavyProps14874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14874.displayName = 'HeavyComponent14874';
export default HeavyComponent14874;
