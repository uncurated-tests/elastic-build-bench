'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14632<T> = T extends (infer U)[]
  ? DeepReadonlyArray14632<U>
  : T extends object
  ? DeepReadonlyObject14632<T>
  : T;

interface DeepReadonlyArray14632<T> extends ReadonlyArray<DeepReadonly14632<T>> {}

type DeepReadonlyObject14632<T> = {
  readonly [P in keyof T]: DeepReadonly14632<T[P]>;
};

type UnionToIntersection14632<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14632<T> = UnionToIntersection14632<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14632<T extends unknown[], V> = [...T, V];

type TuplifyUnion14632<T, L = LastOf14632<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14632<TuplifyUnion14632<Exclude<T, L>>, L>;

type DeepPartial14632<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14632<T[P]> }
  : T;

type Paths14632<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14632<K, Paths14632<T[K], Prev14632[D]>> : never }[keyof T]
  : never;

type Prev14632 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14632<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14632 {
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

type ConfigPaths14632 = Paths14632<NestedConfig14632>;

interface HeavyProps14632 {
  config: DeepPartial14632<NestedConfig14632>;
  path?: ConfigPaths14632;
}

const HeavyComponent14632 = memo(function HeavyComponent14632({ config }: HeavyProps14632) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14632) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14632 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14632: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14632.displayName = 'HeavyComponent14632';
export default HeavyComponent14632;
