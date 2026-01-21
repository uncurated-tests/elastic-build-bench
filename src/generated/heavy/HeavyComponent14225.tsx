'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14225<T> = T extends (infer U)[]
  ? DeepReadonlyArray14225<U>
  : T extends object
  ? DeepReadonlyObject14225<T>
  : T;

interface DeepReadonlyArray14225<T> extends ReadonlyArray<DeepReadonly14225<T>> {}

type DeepReadonlyObject14225<T> = {
  readonly [P in keyof T]: DeepReadonly14225<T[P]>;
};

type UnionToIntersection14225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14225<T> = UnionToIntersection14225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14225<T extends unknown[], V> = [...T, V];

type TuplifyUnion14225<T, L = LastOf14225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14225<TuplifyUnion14225<Exclude<T, L>>, L>;

type DeepPartial14225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14225<T[P]> }
  : T;

type Paths14225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14225<K, Paths14225<T[K], Prev14225[D]>> : never }[keyof T]
  : never;

type Prev14225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14225 {
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

type ConfigPaths14225 = Paths14225<NestedConfig14225>;

interface HeavyProps14225 {
  config: DeepPartial14225<NestedConfig14225>;
  path?: ConfigPaths14225;
}

const HeavyComponent14225 = memo(function HeavyComponent14225({ config }: HeavyProps14225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14225.displayName = 'HeavyComponent14225';
export default HeavyComponent14225;
