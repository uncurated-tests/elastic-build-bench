'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14182<T> = T extends (infer U)[]
  ? DeepReadonlyArray14182<U>
  : T extends object
  ? DeepReadonlyObject14182<T>
  : T;

interface DeepReadonlyArray14182<T> extends ReadonlyArray<DeepReadonly14182<T>> {}

type DeepReadonlyObject14182<T> = {
  readonly [P in keyof T]: DeepReadonly14182<T[P]>;
};

type UnionToIntersection14182<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14182<T> = UnionToIntersection14182<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14182<T extends unknown[], V> = [...T, V];

type TuplifyUnion14182<T, L = LastOf14182<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14182<TuplifyUnion14182<Exclude<T, L>>, L>;

type DeepPartial14182<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14182<T[P]> }
  : T;

type Paths14182<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14182<K, Paths14182<T[K], Prev14182[D]>> : never }[keyof T]
  : never;

type Prev14182 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14182<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14182 {
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

type ConfigPaths14182 = Paths14182<NestedConfig14182>;

interface HeavyProps14182 {
  config: DeepPartial14182<NestedConfig14182>;
  path?: ConfigPaths14182;
}

const HeavyComponent14182 = memo(function HeavyComponent14182({ config }: HeavyProps14182) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14182) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14182 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14182: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14182.displayName = 'HeavyComponent14182';
export default HeavyComponent14182;
