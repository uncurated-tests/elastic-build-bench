'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14925<T> = T extends (infer U)[]
  ? DeepReadonlyArray14925<U>
  : T extends object
  ? DeepReadonlyObject14925<T>
  : T;

interface DeepReadonlyArray14925<T> extends ReadonlyArray<DeepReadonly14925<T>> {}

type DeepReadonlyObject14925<T> = {
  readonly [P in keyof T]: DeepReadonly14925<T[P]>;
};

type UnionToIntersection14925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14925<T> = UnionToIntersection14925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14925<T extends unknown[], V> = [...T, V];

type TuplifyUnion14925<T, L = LastOf14925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14925<TuplifyUnion14925<Exclude<T, L>>, L>;

type DeepPartial14925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14925<T[P]> }
  : T;

type Paths14925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14925<K, Paths14925<T[K], Prev14925[D]>> : never }[keyof T]
  : never;

type Prev14925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14925 {
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

type ConfigPaths14925 = Paths14925<NestedConfig14925>;

interface HeavyProps14925 {
  config: DeepPartial14925<NestedConfig14925>;
  path?: ConfigPaths14925;
}

const HeavyComponent14925 = memo(function HeavyComponent14925({ config }: HeavyProps14925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14925.displayName = 'HeavyComponent14925';
export default HeavyComponent14925;
