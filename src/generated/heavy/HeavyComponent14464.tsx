'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14464<T> = T extends (infer U)[]
  ? DeepReadonlyArray14464<U>
  : T extends object
  ? DeepReadonlyObject14464<T>
  : T;

interface DeepReadonlyArray14464<T> extends ReadonlyArray<DeepReadonly14464<T>> {}

type DeepReadonlyObject14464<T> = {
  readonly [P in keyof T]: DeepReadonly14464<T[P]>;
};

type UnionToIntersection14464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14464<T> = UnionToIntersection14464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14464<T extends unknown[], V> = [...T, V];

type TuplifyUnion14464<T, L = LastOf14464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14464<TuplifyUnion14464<Exclude<T, L>>, L>;

type DeepPartial14464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14464<T[P]> }
  : T;

type Paths14464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14464<K, Paths14464<T[K], Prev14464[D]>> : never }[keyof T]
  : never;

type Prev14464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14464 {
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

type ConfigPaths14464 = Paths14464<NestedConfig14464>;

interface HeavyProps14464 {
  config: DeepPartial14464<NestedConfig14464>;
  path?: ConfigPaths14464;
}

const HeavyComponent14464 = memo(function HeavyComponent14464({ config }: HeavyProps14464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14464.displayName = 'HeavyComponent14464';
export default HeavyComponent14464;
