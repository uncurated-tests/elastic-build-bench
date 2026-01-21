'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14345<T> = T extends (infer U)[]
  ? DeepReadonlyArray14345<U>
  : T extends object
  ? DeepReadonlyObject14345<T>
  : T;

interface DeepReadonlyArray14345<T> extends ReadonlyArray<DeepReadonly14345<T>> {}

type DeepReadonlyObject14345<T> = {
  readonly [P in keyof T]: DeepReadonly14345<T[P]>;
};

type UnionToIntersection14345<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14345<T> = UnionToIntersection14345<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14345<T extends unknown[], V> = [...T, V];

type TuplifyUnion14345<T, L = LastOf14345<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14345<TuplifyUnion14345<Exclude<T, L>>, L>;

type DeepPartial14345<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14345<T[P]> }
  : T;

type Paths14345<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14345<K, Paths14345<T[K], Prev14345[D]>> : never }[keyof T]
  : never;

type Prev14345 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14345<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14345 {
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

type ConfigPaths14345 = Paths14345<NestedConfig14345>;

interface HeavyProps14345 {
  config: DeepPartial14345<NestedConfig14345>;
  path?: ConfigPaths14345;
}

const HeavyComponent14345 = memo(function HeavyComponent14345({ config }: HeavyProps14345) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14345) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14345 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14345: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14345.displayName = 'HeavyComponent14345';
export default HeavyComponent14345;
