'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14240<T> = T extends (infer U)[]
  ? DeepReadonlyArray14240<U>
  : T extends object
  ? DeepReadonlyObject14240<T>
  : T;

interface DeepReadonlyArray14240<T> extends ReadonlyArray<DeepReadonly14240<T>> {}

type DeepReadonlyObject14240<T> = {
  readonly [P in keyof T]: DeepReadonly14240<T[P]>;
};

type UnionToIntersection14240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14240<T> = UnionToIntersection14240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14240<T extends unknown[], V> = [...T, V];

type TuplifyUnion14240<T, L = LastOf14240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14240<TuplifyUnion14240<Exclude<T, L>>, L>;

type DeepPartial14240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14240<T[P]> }
  : T;

type Paths14240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14240<K, Paths14240<T[K], Prev14240[D]>> : never }[keyof T]
  : never;

type Prev14240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14240 {
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

type ConfigPaths14240 = Paths14240<NestedConfig14240>;

interface HeavyProps14240 {
  config: DeepPartial14240<NestedConfig14240>;
  path?: ConfigPaths14240;
}

const HeavyComponent14240 = memo(function HeavyComponent14240({ config }: HeavyProps14240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14240.displayName = 'HeavyComponent14240';
export default HeavyComponent14240;
