'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14675<T> = T extends (infer U)[]
  ? DeepReadonlyArray14675<U>
  : T extends object
  ? DeepReadonlyObject14675<T>
  : T;

interface DeepReadonlyArray14675<T> extends ReadonlyArray<DeepReadonly14675<T>> {}

type DeepReadonlyObject14675<T> = {
  readonly [P in keyof T]: DeepReadonly14675<T[P]>;
};

type UnionToIntersection14675<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14675<T> = UnionToIntersection14675<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14675<T extends unknown[], V> = [...T, V];

type TuplifyUnion14675<T, L = LastOf14675<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14675<TuplifyUnion14675<Exclude<T, L>>, L>;

type DeepPartial14675<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14675<T[P]> }
  : T;

type Paths14675<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14675<K, Paths14675<T[K], Prev14675[D]>> : never }[keyof T]
  : never;

type Prev14675 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14675<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14675 {
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

type ConfigPaths14675 = Paths14675<NestedConfig14675>;

interface HeavyProps14675 {
  config: DeepPartial14675<NestedConfig14675>;
  path?: ConfigPaths14675;
}

const HeavyComponent14675 = memo(function HeavyComponent14675({ config }: HeavyProps14675) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14675) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14675 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14675: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14675.displayName = 'HeavyComponent14675';
export default HeavyComponent14675;
