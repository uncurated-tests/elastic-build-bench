'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14190<T> = T extends (infer U)[]
  ? DeepReadonlyArray14190<U>
  : T extends object
  ? DeepReadonlyObject14190<T>
  : T;

interface DeepReadonlyArray14190<T> extends ReadonlyArray<DeepReadonly14190<T>> {}

type DeepReadonlyObject14190<T> = {
  readonly [P in keyof T]: DeepReadonly14190<T[P]>;
};

type UnionToIntersection14190<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14190<T> = UnionToIntersection14190<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14190<T extends unknown[], V> = [...T, V];

type TuplifyUnion14190<T, L = LastOf14190<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14190<TuplifyUnion14190<Exclude<T, L>>, L>;

type DeepPartial14190<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14190<T[P]> }
  : T;

type Paths14190<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14190<K, Paths14190<T[K], Prev14190[D]>> : never }[keyof T]
  : never;

type Prev14190 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14190<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14190 {
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

type ConfigPaths14190 = Paths14190<NestedConfig14190>;

interface HeavyProps14190 {
  config: DeepPartial14190<NestedConfig14190>;
  path?: ConfigPaths14190;
}

const HeavyComponent14190 = memo(function HeavyComponent14190({ config }: HeavyProps14190) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14190) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14190 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14190: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14190.displayName = 'HeavyComponent14190';
export default HeavyComponent14190;
