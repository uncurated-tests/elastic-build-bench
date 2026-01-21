'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14898<T> = T extends (infer U)[]
  ? DeepReadonlyArray14898<U>
  : T extends object
  ? DeepReadonlyObject14898<T>
  : T;

interface DeepReadonlyArray14898<T> extends ReadonlyArray<DeepReadonly14898<T>> {}

type DeepReadonlyObject14898<T> = {
  readonly [P in keyof T]: DeepReadonly14898<T[P]>;
};

type UnionToIntersection14898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14898<T> = UnionToIntersection14898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14898<T extends unknown[], V> = [...T, V];

type TuplifyUnion14898<T, L = LastOf14898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14898<TuplifyUnion14898<Exclude<T, L>>, L>;

type DeepPartial14898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14898<T[P]> }
  : T;

type Paths14898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14898<K, Paths14898<T[K], Prev14898[D]>> : never }[keyof T]
  : never;

type Prev14898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14898 {
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

type ConfigPaths14898 = Paths14898<NestedConfig14898>;

interface HeavyProps14898 {
  config: DeepPartial14898<NestedConfig14898>;
  path?: ConfigPaths14898;
}

const HeavyComponent14898 = memo(function HeavyComponent14898({ config }: HeavyProps14898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14898.displayName = 'HeavyComponent14898';
export default HeavyComponent14898;
