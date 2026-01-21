'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14560<T> = T extends (infer U)[]
  ? DeepReadonlyArray14560<U>
  : T extends object
  ? DeepReadonlyObject14560<T>
  : T;

interface DeepReadonlyArray14560<T> extends ReadonlyArray<DeepReadonly14560<T>> {}

type DeepReadonlyObject14560<T> = {
  readonly [P in keyof T]: DeepReadonly14560<T[P]>;
};

type UnionToIntersection14560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14560<T> = UnionToIntersection14560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14560<T extends unknown[], V> = [...T, V];

type TuplifyUnion14560<T, L = LastOf14560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14560<TuplifyUnion14560<Exclude<T, L>>, L>;

type DeepPartial14560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14560<T[P]> }
  : T;

type Paths14560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14560<K, Paths14560<T[K], Prev14560[D]>> : never }[keyof T]
  : never;

type Prev14560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14560 {
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

type ConfigPaths14560 = Paths14560<NestedConfig14560>;

interface HeavyProps14560 {
  config: DeepPartial14560<NestedConfig14560>;
  path?: ConfigPaths14560;
}

const HeavyComponent14560 = memo(function HeavyComponent14560({ config }: HeavyProps14560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14560.displayName = 'HeavyComponent14560';
export default HeavyComponent14560;
