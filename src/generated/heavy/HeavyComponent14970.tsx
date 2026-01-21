'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14970<T> = T extends (infer U)[]
  ? DeepReadonlyArray14970<U>
  : T extends object
  ? DeepReadonlyObject14970<T>
  : T;

interface DeepReadonlyArray14970<T> extends ReadonlyArray<DeepReadonly14970<T>> {}

type DeepReadonlyObject14970<T> = {
  readonly [P in keyof T]: DeepReadonly14970<T[P]>;
};

type UnionToIntersection14970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14970<T> = UnionToIntersection14970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14970<T extends unknown[], V> = [...T, V];

type TuplifyUnion14970<T, L = LastOf14970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14970<TuplifyUnion14970<Exclude<T, L>>, L>;

type DeepPartial14970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14970<T[P]> }
  : T;

type Paths14970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14970<K, Paths14970<T[K], Prev14970[D]>> : never }[keyof T]
  : never;

type Prev14970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14970 {
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

type ConfigPaths14970 = Paths14970<NestedConfig14970>;

interface HeavyProps14970 {
  config: DeepPartial14970<NestedConfig14970>;
  path?: ConfigPaths14970;
}

const HeavyComponent14970 = memo(function HeavyComponent14970({ config }: HeavyProps14970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14970.displayName = 'HeavyComponent14970';
export default HeavyComponent14970;
