'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14161<T> = T extends (infer U)[]
  ? DeepReadonlyArray14161<U>
  : T extends object
  ? DeepReadonlyObject14161<T>
  : T;

interface DeepReadonlyArray14161<T> extends ReadonlyArray<DeepReadonly14161<T>> {}

type DeepReadonlyObject14161<T> = {
  readonly [P in keyof T]: DeepReadonly14161<T[P]>;
};

type UnionToIntersection14161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14161<T> = UnionToIntersection14161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14161<T extends unknown[], V> = [...T, V];

type TuplifyUnion14161<T, L = LastOf14161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14161<TuplifyUnion14161<Exclude<T, L>>, L>;

type DeepPartial14161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14161<T[P]> }
  : T;

type Paths14161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14161<K, Paths14161<T[K], Prev14161[D]>> : never }[keyof T]
  : never;

type Prev14161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14161 {
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

type ConfigPaths14161 = Paths14161<NestedConfig14161>;

interface HeavyProps14161 {
  config: DeepPartial14161<NestedConfig14161>;
  path?: ConfigPaths14161;
}

const HeavyComponent14161 = memo(function HeavyComponent14161({ config }: HeavyProps14161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14161.displayName = 'HeavyComponent14161';
export default HeavyComponent14161;
