'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14899<T> = T extends (infer U)[]
  ? DeepReadonlyArray14899<U>
  : T extends object
  ? DeepReadonlyObject14899<T>
  : T;

interface DeepReadonlyArray14899<T> extends ReadonlyArray<DeepReadonly14899<T>> {}

type DeepReadonlyObject14899<T> = {
  readonly [P in keyof T]: DeepReadonly14899<T[P]>;
};

type UnionToIntersection14899<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14899<T> = UnionToIntersection14899<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14899<T extends unknown[], V> = [...T, V];

type TuplifyUnion14899<T, L = LastOf14899<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14899<TuplifyUnion14899<Exclude<T, L>>, L>;

type DeepPartial14899<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14899<T[P]> }
  : T;

type Paths14899<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14899<K, Paths14899<T[K], Prev14899[D]>> : never }[keyof T]
  : never;

type Prev14899 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14899<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14899 {
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

type ConfigPaths14899 = Paths14899<NestedConfig14899>;

interface HeavyProps14899 {
  config: DeepPartial14899<NestedConfig14899>;
  path?: ConfigPaths14899;
}

const HeavyComponent14899 = memo(function HeavyComponent14899({ config }: HeavyProps14899) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14899) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14899 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14899: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14899.displayName = 'HeavyComponent14899';
export default HeavyComponent14899;
